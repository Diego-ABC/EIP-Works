import { useLoaderData } from "react-router";
import StaffListHeader from "../components/StaffListHeader";
import copyTextToClipboard from "@/lib/utils/copyToClipboard";
import sendInvite from "../services/sendInvite";
import { useState } from "react";

const labelClass =
  "text-right border-r-2 border-r-black dark:border-r-white pr-3 mr-3 pb-3";
export default function StaffDetail() {
  const {
    id,
    firstName,
    lastName,
    email,
    cell,
    work,
    workExt,
    dateJoined,
    registered,
    disabled,
    inviteCode,
  } = useLoaderData();

  const [invCode, setInvCode] = useState(inviteCode);
  const [sendingInv, setSendingInv] = useState(false);
  const [invCopied, setInvCopied] = useState(false);
  return (
    <>
      <StaffListHeader>
        Staff {">"} {firstName + " " + lastName}
      </StaffListHeader>

      <div className="grid grid-cols-2 w-fit font-medium text-lg">
        <p className={labelClass}>name</p>
        <p>
          {firstName} {lastName}
        </p>
        <p className={labelClass}>email</p>
        <p>{email}</p>
        <p className={labelClass}>cell</p>
        <p>{cell}</p>
        <p className={labelClass}>work</p>
        <p>
          {work}
          {workExt && "x" + workExt}
        </p>
        <p className={labelClass}>start date</p>
        <p>{dateJoined}</p>
        <p className={labelClass}>registered?</p>
        <p className={registered ? "text-success" : "text-error"}>
          {registered ? "yes" : "no"}
        </p>
        {invCode && (
          <>
            <div
              className="tooltip tooltip-primary tooltip-bottom col-span-2"
              data-tip={location.host + "/invite/staff/" + invCode}
            >
              <button
                onClick={() => {
                  copyTextToClipboard(
                    location.host + "/invite/staff/" + invCode
                  );
                  setInvCopied(true);
                  setTimeout(() => {
                    setInvCopied(false);
                  }, 3000);
                }}
                className="btn btn-lg btn-accent w-full mt-3 disabled:bg-primary"
                disabled={invCopied}
              >
                {invCopied ? "Copied ✔" : "Copy Invite Link"}
              </button>
            </div>
            <p className="col-span-2 max-w-sm text-wrap">
              if your invite was not received, you can copy the link from here
              to send directly
            </p>
          </>
        )}
        {!invCode && (
          <button
            onClick={() => {
              setSendingInv(true);
              sendInvite(id).then((code) => setInvCode(code));
            }}
            className="btn btn-lg btn-secondary col-span-2 mt-3"
            disabled={sendingInv}
          >
            Send Invite
          </button>
        )}
      </div>
    </>
  );
}
