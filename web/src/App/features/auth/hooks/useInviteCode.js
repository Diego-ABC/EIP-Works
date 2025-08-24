import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import validateInviteCode from "../services/validateInviteCode";

export default function useInviteCode() {
  const { inviteCode } = useLoaderData();
  const [checkingCode, setCheckingCode] = useState(true);
  const [validCode, setValidCode] = useState(false);
  const [staffData, setStaffData] = useState({});
  const [error, setError] = useState("");

  // const { email, staffId } = validCode;
  // const [staffData, setStaffData] = useState({});
  // const [loadingStaffData, setLoadingStaffData] = useState(true);
  useEffect(() => {
    if (inviteCode) {
      setCheckingCode(true);
      validateInviteCode(inviteCode).then(({ staffData, error }) => {
        // console.log(returnVal);
        // return;
        setCheckingCode(false);
        setError("");
        setStaffData({});
        setValidCode(false);
        if (error) {
          setError(error);
          setValidCode(false);
        } else if (staffData) {
          setValidCode(true);
          setStaffData(staffData);
        }
      });
    }
  }, [inviteCode]);

  return { checkingCode, validCode, staffData, error };
  // useEffect(() => {
  //   checkValidStaffInvite(inviteCode).then((isValid) => {
  //     setCheckingCode(false);
  //     setValidCode(isValid);
  //   });
  // }, []);

  // useEffect(() => {
  //   if (staffId) {
  //     getStaffMember(staffId).then((staffData) => {
  //       setStaffData(staffData);
  //       setLoadingStaffData(false);
  //     });
  //   }
  // }, [staffId]);

  // const [isSubmitting, setIsSubmitting] = useState(false);

  // if (checkingCode) return null;
  // if (!validCode) return <Navigate to="/badinvite" />;
  // if (loadingStaffData) return <>loading staff data</>;

  // const { firstName, email: sEmail } = staffData;
}
