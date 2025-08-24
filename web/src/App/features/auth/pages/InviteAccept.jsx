import { useState } from "react";
import { Form, Navigate, useActionData } from "react-router";
import TextInputField from "@/components/formComponents/TextInputField";
import useInviteCode from "../hooks/useInviteCode";

export default function InviteAccept() {
  const { error } = useActionData() || {};

  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    checkingCode,
    validCode,
    staffData,
    error: invError,
  } = useInviteCode();

  if (error) console.log(error);
  if (!validCode) return <Navigate to="/badinvite" />;

  const { firstName, email: sEmail } = staffData;

  return (
    <div className="h-dvh w-dvw bg-base-300 flex justify-center items-center">
      <Form
        method="POST"
        className="card card-xl rounded bg-base-100"
        onSubmit={() => {
          setIsSubmitting(true);
        }}
      >
        <div className="card-title border-b-2 border-dashed border-base-300 px-5 py-2.5 justify-center">
          Hi {firstName}!
        </div>
        <div className="card-body grid grid-cols-[auto_auto] gap-x-5 font-medium">
          <p className="text-right">login email:</p>
          <p>{sEmail}</p>
          <p className="self-center">password:</p>
          <TextInputField
            name="password"
            type="password"
            placeholder="set your password here"
          />
          <input type="text" name="email" defaultValue={sEmail} hidden />
          <div className="card-actions justify-end col-span-2 mt-4">
            <p className="text-sm text-primary text-right">
              use this email and
              <br /> password when logging in
            </p>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
          {error && <p className="col-span-2">{error}</p>}
        </div>
      </Form>
    </div>
  );
}
