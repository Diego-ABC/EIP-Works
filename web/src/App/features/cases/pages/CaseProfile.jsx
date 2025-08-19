import { Fragment, useEffect } from "react";
import { useCase } from "../context/caseContext";
import CaseProfileForm from "../components/CaseProfileForm";
import { useState } from "react";
import { useActionData } from "react-router";

export default function CaseProfile() {
  const { eiCase } = useCase();
  const [formEdited, setFormEdited] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const actionData = useActionData();
  const { success, error } = actionData || {};

  useEffect(() => {
    setSubmitting(false);
    setFormEdited(false);
  }, [actionData]);
  return (
    <div className="@container w-full">
      <CaseProfileForm
        patient={eiCase}
        canSave={formEdited}
        onChange={() => {
          setFormEdited(true);
        }}
        onSubmit={() => {
          setSubmitting(true);
        }}
        submitting={submitting}
      />
    </div>
  );
}
