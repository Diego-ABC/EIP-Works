import DateField from "@/components/formComponents/DateField";
import MultiTagInput from "@/components/formComponents/MultiTagInput";
import SectionTitle from "@/components/formComponents/SectionTitle";
import TextInputField from "@/components/formComponents/TextInputField";
import { Form } from "react-router";

const DISCIPLINES = ["ABA", "SI", "ST", "OT", "PT", "Service Coordination"];

export default function ProviderForm({
  provider = {},
  canSave = false,
  submitting = false,
  containerClassName = "",
  onChange = () => {},
  onSubmit = () => {},
  showRequired = false,
}) {
  const {
    firstName,
    lastName,
    joinDate,
    address,
    city,
    zip,
    disciplines,
    email,
    phone,
    altPhone,
    npi,
    license,
    licenseExp,
    medicalExp,
    ppdExp,
    liabilityExp,
    dohApprovalExp,
    zipCodes,
  } = provider;
  return (
    <div className={"@container " + containerClassName}>
      <Form
        className="min-w-sm w-full max-w-4xl justify-items-stretch grid grid-cols-1 @md:grid-cols-2 @3xl:grid-cols-3 gap-x-2 gap-y-3 p-5 bg-base-100"
        method="POST"
        onSubmit={onSubmit}
        onChange={onChange}
      >
        <SectionTitle className="col-span-full">Contact Info</SectionTitle>
        <TextInputField
          name="firstName"
          placeholder="First Name"
          // className="w-full input-sm @lg:input-md"
          defaultValue={firstName}
          required={showRequired}
        />
        <TextInputField
          name="lastName"
          placeholder="Last Name"
          // className="w-full input-sm @lg:input-md"
          defaultValue={lastName}
          required={showRequired}
        />
        <DateField name="joinDate" defaultValue={joinDate} label="start date" />
        <TextInputField
          type="text"
          name="address"
          placeholder="address"
          // className=" input-sm @lg:input-md"
          defaultValue={address}
        />
        <TextInputField
          type="text"
          name="city"
          placeholder="city"
          defaultValue={city}
          label="NY"
          labelRight
          // className="input-sm @lg:input-md"
        />
        <input type="text" name="state" defaultValue="NY" hidden />
        <TextInputField
          type="text"
          name="zip"
          placeholder="zip code"
          // className=" input-sm @lg:input-md"
          defaultValue={zip}
        />
        <TextInputField
          name="email"
          placeholder="Email"
          // className="w-full input-sm @lg:input-md"
          defaultValue={email}
          // required={showRequired}
        />
        <TextInputField
          name="phone"
          placeholder="Phone"
          // className="w-full input-sm @lg:input-md"
          defaultValue={phone}
          // required={showRequired}
          onChange={(e) => (e.target.value = formatPhoneNumber(e.target.value))}
        />
        <TextInputField
          name="altPhone"
          placeholder="Alt Phone"
          // className="w-full input-sm @lg:input-md"
          defaultValue={altPhone}
          onChange={(e) => (e.target.value = formatPhoneNumber(e.target.value))}
        />

        <SectionTitle className="col-span-full mt-3">
          Professional Info
        </SectionTitle>
        <MultiTagInput
          suggestions={DISCIPLINES}
          defaultTags={disciplines}
          name="disciplines"
          placeholder="Add disciplines..."
          // className="input-sm @lg:input-md"
          floatingLabel="disciplines"
          label="disciplines"
        />
        <TextInputField
          name="npi"
          placeholder="NPI #"
          // className="w-full input-sm @lg:input-md"
          defaultValue={npi}
          pattern="[0-9]{10}"
          min=""
        />
        <MultiTagInput
          name="zipCodes"
          defaultTags={zipCodes}
          allowCustom
          placeholder="Enter zipcodes"
          // className=""
          floatingLabel="preferred zipcodes"
          label="preferred zipcodes"
        />
        <TextInputField
          name="license"
          placeholder="License/Certification #"
          // className="w-full input-sm @lg:input-md"
          defaultValue={license}
        />
        <DateField
          name="licenseExp"
          defaultValue={licenseExp}
          // className="w-full input-sm @lg:input-md"
          // className="w-full"
          label="lic/cert exp"
        />
        <SectionTitle className="col-span-full mt-3">
          Additional Dates
        </SectionTitle>
        <DateField
          name="medicalExp"
          label="medical exp"
          // className="w-full input-sm @lg:input-md"
          // className="w-full"
          defaultValue={medicalExp}
        />
        <DateField
          name="ppdExp"
          label="ppd exp"
          // className="w-full input-sm @lg:input-md"
          // className="w-full"
          defaultValue={ppdExp}
        />
        <DateField
          name="liabilityExp"
          label="liability insurance exp"
          // className="w-full input-sm @lg:input-md"
          // className="w-full"
          defaultValue={liabilityExp}
        />
        <DateField
          name="dohApprovalExp"
          label="doh approval exp"
          // className="w-full input-sm @lg:input-md"
          // className="w-full"
          defaultValue={dohApprovalExp}
        />
        <button className="btn btn-success btn-outline dark:btn-soft -col-start-2">
          Save
        </button>
      </Form>
    </div>
  );
}
