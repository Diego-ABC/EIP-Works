import SectionTitle from "@/components/formComponents/SectionTitle";
import TextInputField from "@/components/formComponents/TextInputField";
import RadioOptions from "@/components/formComponents/RadioOptions";
import SearchableDropDown from "@/components/formComponents/SearchableDropDown";
import formatPhoneNumber from "@/lib/utils/formatting/formatPhoneNumber";
import { Form } from "react-router";

export default function CaseProfileForm({
  patient,
  canSave = false,
  submitting = false,
  onChange = () => {},
  onSubmit = () => {},
  error,
}) {
  const {
    firstName,
    lastName,
    dob,
    address,
    city,
    zip,
    language,
    gender,
    guardian1,
    guardian1Phone,
    guardian1Rel,
    guardian2,
    guardian2Phone,
    guardian2Rel,
    eiNumber,
    referralDate,
    stage,
    sc,
    scPhone,
    scAgency,
  } = patient ?? {};
  return (
    <Form
      className="w-fit max-w-full grid grid-cols-2 @lg:grid-cols-2 @3xl:grid-cols-[minmax(10rem,auto)_auto_auto] gap-2 p-5 bg-base-100"
      method="POST"
      onSubmit={onSubmit}
      onChange={onChange}
    >
      <SectionTitle className="col-span-full">Demographics</SectionTitle>
      <TextInputField
        name="firstName"
        placeholder="First Name"
        className="col-span-1 w-full input-sm @lg:input-md"
        defaultValue={firstName}
        required
      />
      <TextInputField
        name="lastName"
        placeholder="Last Name"
        className="col-span-1 w-full input-sm @lg:input-md"
        defaultValue={lastName}
        required
      />
      <TextInputField
        type="date"
        name="dob"
        label="date of birth"
        defaultValue={dob}
        className="px-1.5 input-sm @lg:px-3 @lg:input-md"
      />
      <TextInputField
        type="text"
        name="address"
        placeholder="address"
        className=" input-sm @lg:input-md"
        defaultValue={address}
      />
      <TextInputField
        type="text"
        name="city"
        placeholder="city"
        defaultValue={city}
        label="NY"
        labelRight
        className="input-sm @lg:input-md"
      />
      <input type="text" name="state" defaultValue="NY" hidden />
      <TextInputField
        type="text"
        name="zip"
        placeholder="zip code"
        className=" input-sm @lg:input-md"
        defaultValue={zip}
      />
      <TextInputField
        type="text"
        name="language"
        placeholder="language"
        className=" input-sm @lg:input-md"
        defaultValue={language}
      />
      <RadioOptions
        name="gender"
        options={["Male", "Female"]}
        label="Gender"
        defaultValue={gender}
        className="justify-center @lg:px-3 gap-2 @lg:gap-4 text-sm @lg:text-base"
      />

      <SectionTitle className="col-span-full mt-3">Family Info</SectionTitle>
      <TextInputField
        name="guardian1"
        placeholder="Guardian Name"
        className=" input-sm @lg:input-md"
        defaultValue={guardian1}
      />
      <TextInputField
        type="tel"
        name="guardian1Phone"
        placeholder="Guardian Phone"
        onChange={(e) => (e.target.value = formatPhoneNumber(e.target.value))}
        className="input-sm @lg:input-md"
        defaultValue={guardian1Phone}
      />
      <SearchableDropDown
        name="guardian1Rel"
        placeholder="Relationship"
        options={["Mother", "Father", "Guardian", "Other"]}
        className=" input-sm @lg:input-md "
        defaultValue={guardian1Rel}
        onSelectedIndex={onChange}
      />
      <TextInputField
        name="guardian2"
        placeholder="Alt Guardian Name"
        className=" input-sm @lg:input-md col-start-1"
        defaultValue={guardian2}
      />
      <TextInputField
        type="tel"
        name="guardian2Phone"
        placeholder="Alt Guardian Phone"
        onChange={(e) => (e.target.value = formatPhoneNumber(e.target.value))}
        className=" input-sm @lg:input-md"
        defaultValue={guardian2Phone}
      />
      <SearchableDropDown
        name="guardian2Rel"
        placeholder="Relationship"
        options={["Mother", "Father", "Guardian", "Other"]}
        className=" input-sm @lg:input-md"
        defaultValue={guardian2Rel}
        onSelectedIndex={onChange}
      />

      <SectionTitle className="col-span-full mt-3">Referral Info</SectionTitle>
      <TextInputField
        name="eiNumber"
        placeholder="eiNumber"
        className="w-full input-sm @lg:input-md"
        required
        defaultValue={eiNumber}
      />
      <TextInputField
        type="date"
        name="referralDate"
        label="referral date"
        className="px-1.5 input-sm @lg:px-3 @lg:input-md"
        defaultValue={referralDate}
      />
      <SearchableDropDown
        placeholder="Stage"
        name="stage"
        options={["ISC", "OSC"]}
        className=" input-sm @lg:input-md"
        defaultValue={stage}
        onSelectedIndex={onChange}
      />
      <TextInputField
        name="sc"
        placeholder="SC"
        className=" input-sm @lg:input-md"
        defaultValue={sc}
      />
      <TextInputField
        type="tel"
        name="scPhone"
        placeholder="SC Phone"
        onChange={(e) => (e.target.value = formatPhoneNumber(e.target.value))}
        className=" input-sm @lg:input-md"
        defaultValue={scPhone}
      />
      <TextInputField
        name="scAgency"
        placeholder="SC Agency"
        className=" input-sm @lg:input-md"
        defaultValue={scAgency}
      />
      <button
        type="submit"
        className="btn btn-outline dark:btn-soft btn-success btn-lg col-span-full @lg:col-span-full col-start-1"
        disabled={submitting || !canSave}
        // onClick={(e) => {
        //   setSubmitting(true);
        //   e.
        // }}
      >
        {submitting ? <div className="loading loading-spinner"></div> : "Save"}
      </button>
      {error && (
        <p className="text-error font-medium col-span-full @lg:col-span-full col-start-1">
          {error}
        </p>
      )}
    </Form>
  );
}
