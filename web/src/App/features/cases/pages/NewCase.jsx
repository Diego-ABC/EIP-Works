import DashboardHeader from "@/App/layout/DashboardLayout/DashboardPage/DashboardHeader";
import { Form } from "react-router";
import TextInputField from "@/components/formComponents/TextInputField";
import RadioOptions from "@/components/formComponents/RadioOptions";
import SectionTitle from "@/components/formComponents/SectionTitle";
import SelectDropDown from "@/components/formComponents/SelectDropDown";
import SelectDropDownV2 from "@/components/formComponents/SelectDropDownV2";
import SearchableDropDown from "@/components/formComponents/SearchableDropDown";
import formatPhoneNumber from "@/lib/utils/formatting/formatPhoneNumber";

export default function NewCase() {
  // TODO: add localstorage save of data, trigger on debounced onchange

  return (
    <>
      <DashboardHeader>Staff {">"} New</DashboardHeader>
      <Form
        className="w-fit grid grid-cols-[auto_auto_auto] gap-2 p-5 bg-base-100"
        method="POST"
      >
        <SectionTitle className="col-span-3">Demographics</SectionTitle>
        <TextInputField
          name="firstName"
          placeholder="First Name"
          className="col-span-1 w-full has-[input:invalid]:border-b-red-500"
          required
        />
        <TextInputField
          name="lastName"
          placeholder="Last Name"
          className="col-span-1 w-full has-[input:invalid]:border-b-red-500"
          required
        />
        <TextInputField type="date" name="dob" label="date of birth" />
        <TextInputField type="text" name="address" placeholder="address" />
        <TextInputField
          type="text"
          name="city"
          placeholder="city"
          label="NY"
          labelRight
        />
        <input type="text" name="state" defaultValue="NY" hidden />
        <TextInputField type="text" name="zip" placeholder="zip code" />
        <TextInputField type="text" name="language" placeholder="language" />

        <RadioOptions
          name="gender"
          options={["Male", "Female"]}
          label="Gender"
        />

        <SectionTitle className="col-span-3 mt-3">Family Info</SectionTitle>
        <TextInputField name="guardian1" placeholder="Guardian Name" />
        <TextInputField
          type="tel"
          name="guardian1Phone"
          placeholder="Guardian Phone"
          onChange={(e) => (e.target.value = formatPhoneNumber(e.target.value))}
        />
        <SearchableDropDown
          name="guardian1Rel"
          placeholder="Relationship"
          options={["Mother", "Father", "Guardian", "Other"]}
        />
        <TextInputField name="guardian2" placeholder="Alt Guardian Name" />
        <TextInputField
          type="tel"
          name="guardian2Phone"
          placeholder="Alt Guardian Phone"
          onChange={(e) => (e.target.value = formatPhoneNumber(e.target.value))}
        />
        <SearchableDropDown
          name="guardian2Rel"
          placeholder="Relationship"
          options={["Mother", "Father", "Guardian", "Other"]}
        />

        <SectionTitle className="col-span-3 mt-3">Referral Info</SectionTitle>
        <TextInputField
          name="eiNumber"
          placeholder="eiNumber"
          className="w-full has-[input:invalid]:border-b-red-500"
          required
        />
        <TextInputField type="date" name="referralDate" label="referral date" />
        <SearchableDropDown
          placeholder="Stage"
          name="stage"
          options={["ISC", "OSC"]}
        />

        <TextInputField name="sc" placeholder="SC" />
        <TextInputField
          type="tel"
          name="scPhone"
          placeholder="SC Phone"
          onChange={(e) => (e.target.value = formatPhoneNumber(e.target.value))}
        />
        <TextInputField name="scAgency" placeholder="SC Agency" />

        <button className="btn btn-soft dark:btn btn-success btn-lg col-start-3">
          Save
        </button>
      </Form>
    </>
  );
}
