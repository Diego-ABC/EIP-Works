import { useEffect, useState } from "react";
import { Form, Navigate, useActionData, useLoaderData } from "react-router";
import checkValidStaffInvite from "../services/checkValidStaffInvite";
import getStaffMember from "../../staff/services/getStaffMember";
import TextInputField from "@/components/formComponents/TextInputField";

export default function InviteAccept() {
  const { error } = useActionData() || {};
  const { inviteCode } = useLoaderData();
  const [checkingCode, setCheckingCode] = useState(true);
  const [validCode, setValidCode] = useState(false);

  const { email, staffId } = validCode;
  const [staffData, setStaffData] = useState({});
  const [loadingStaffData, setLoadingStaffData] = useState(true);
  useEffect(() => {
    checkValidStaffInvite(inviteCode).then((isValid) => {
      setCheckingCode(false);
      setValidCode(isValid);
    });
  }, []);

  useEffect(() => {
    if (staffId) {
      getStaffMember(staffId).then((staffData) => {
        setStaffData(staffData);
        setLoadingStaffData(false);
      });
    }
  }, [staffId]);

  if (checkingCode) return null;
  if (!validCode) return <Navigate to="/badinvite" />;
  if (loadingStaffData) return null;

  const { firstName, email: sEmail } = staffData;
  return (
    <div className="h-dvh w-dvw bg-base-300 flex justify-center items-center">
      <Form method="POST" className="card card-xl rounded bg-base-100">
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {error && <p className="col-span-2">{error}</p>}
        </div>
      </Form>
    </div>
  );
}
