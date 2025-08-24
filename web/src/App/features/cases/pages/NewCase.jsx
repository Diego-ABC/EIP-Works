import DashboardHeader from "@/App/layout/DashboardLayout/DashboardPage/DashboardHeader";
import { Form, useActionData } from "react-router";
// import TextInputField from "@/components/formComponents/TextInputField";
// import RadioOptions from "@/components/formComponents/RadioOptions";
// import SectionTitle from "@/components/formComponents/SectionTitle";
// import SelectDropDown from "@/components/formComponents/SelectDropDown";
// import SelectDropDownV2 from "@/components/formComponents/SelectDropDownV2";
// import SearchableDropDown from "@/components/formComponents/SearchableDropDown";
// import formatPhoneNumber from "@/lib/utils/formatting/formatPhoneNumber";
import { useEffect, useState } from "react";
// import { DatePicker } from "react-aria-components";
// import { DateField } from "react-aria-components";
// import DateField from "@/components/formComponents/DateField";
import CaseProfileForm from "../components/CaseProfileForm";

export default function NewCase() {
  const { error } = useActionData() || {};
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    if (error) {
      setSubmitting(false);
    }
  }, [error]);
  // TODO: add localstorage save of data, trigger on debounced onchange

  return (
    <div className="@container w-full">
      <DashboardHeader>Cases {">"} New</DashboardHeader>
      <CaseProfileForm />
    </div>
  );
}
