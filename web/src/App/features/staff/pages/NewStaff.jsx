import TextInputField from "@/components/formComponents/TextInputField";
import StaffListHeader from "../components/StaffListHeader";
import { Form, useActionData } from "react-router";
import formatPhoneNumber from "@/lib/utils/formatting/formatPhoneNumber";

export default function NewStaff() {
  const { error, success, link } = useActionData() || {};
  return (
    <>
      <StaffListHeader>Staff {">"} New</StaffListHeader>
      <Form
        className="w-fit grid grid-cols-4 gap-2 p-5 bg-base-100"
        method="POST"
      >
        <TextInputField
          name="firstName"
          placeholder="First Name"
          className="col-span-2 w-full"
        />
        <TextInputField
          name="lastName"
          placeholder="Last Name"
          className="col-span-2 w-full"
        />
        <TextInputField
          name="email"
          placeholder="email"
          className="col-span-4 w-full"
        />
        <TextInputField
          name="cell"
          placeholder="mobile number"
          className="col-span-4 w-full"
          onInput={(e) => (e.target.value = formatPhoneNumber(e.target.value))}
        />
        <TextInputField
          name="work"
          placeholder="work number"
          className="col-span-3 w-full"
          onInput={(e) => (e.target.value = formatPhoneNumber(e.target.value))}
        />
        <TextInputField
          name="workExt"
          placeholder="ext"
          className="col-span-1 min-w-0 w-36"
        />
        <TextInputField
          type="date"
          name="dateJoined"
          label="start date"
          className="col-span-2"
        />
        <div className="px-4 rounded-lg bg-base-200 col-span-2 flex flex-row items-center">
          <label className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              className="checkbox checked:checkbox-success peer"
              name="sendInvite"
            />
            <span className="font-medium peer-checked:text-success transition-colors cursor-pointer">
              Send Invite?
            </span>
          </label>
        </div>

        {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-64 border p-4">
          <legend className="fieldset-legend">Send Invite</legend>
          <label className="label">
            <input type="checkbox" className="checkbox" />
          </label>
        </fieldset> */}
        <button className="btn btn-soft dark:btn btn-success btn-lg col-span-4">
          Save
        </button>
        {error && <p className="text-error font-medium col-span-4">{error}</p>}
        {link && <p className="text-error font-medium col-span-4">{link}</p>}
        {success && (
          <p className="text-success font-medium col-span-4">{success}</p>
        )}
      </Form>
    </>
  );
}
