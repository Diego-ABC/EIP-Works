import SearchableDropDown from "@/components/formComponents/SearchableDropDown";
import TextInputField from "@/components/formComponents/TextInputField";
import { useState, useEffect } from "react";
import { Form, useActionData } from "react-router";

// ``` type,
//   frequency,
//   length,
//   period,
//   startDate,
//   endDate,
//   authNumber,
//   providerName,```;
export default function NewAuth() {
  const { error } = useActionData() || {};
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    if (error) {
      setSubmitting(false);
    }
  }, [error]);
  return (
    <Form
      className="w-fit grid grid-cols-[auto_auto_auto] gap-2 p-5 bg-base-100"
      method="POST"
      onSubmit={() => {
        setSubmitting(true);
      }}
    >
      <TextInputField
        name="authNumber"
        placeholder="Authorization Number"
        className="col-span-2 w-full has-[input:invalid]:border-b-red-500"
        required={!!error}
      />
      <SearchableDropDown
        name="type"
        placeholder="Type"
        options={["SI", "ABA", "OT", "PT", "ST"]}
        required={!!error}
        className="[&:has(input:invalid)]:border-b-red-500"
      />
      <SearchableDropDown
        name="length"
        placeholder="Length"
        options={["30", "60"]}
        rightLabel="minutes"
        className="w-52 min-w-full"
        required={!!error}
      />
      <TextInputField
        type="number"
        name="frequency"
        placeholder="Count"
        min="0"
        max="20"
        className="w-42 min-w-full has-[input:invalid]:border-b-red-500"
        label="times"
        labelRight
        required={!!error}
      />
      <SearchableDropDown
        name="period"
        placeholder="Period"
        options={["Week", "Month"]}
        leftLabel="per"
        required={!!error}
      />
      <TextInputField
        type="date"
        name="startDate"
        label="start"
        required={!!error}
        className="has-[input:invalid]:border-b-red-500"
      />
      <TextInputField
        type="date"
        name="endDate"
        label="end"
        required={!!error}
        className="has-[input:invalid]:border-b-red-500"
      />
      <TextInputField
        name="providerName"
        placeholder="Provider"
        className="w-full"
      />
      <button
        type="submit"
        className="btn btn-soft dark:btn btn-success btn-lg col-start-3"
        disabled={submitting}
      >
        {submitting ? <div className="loading loading-spinner"></div> : "Save"}
      </button>
      {error && (
        <p className="text-error font-medium col-span-2 col-start-1">{error}</p>
      )}
    </Form>
  );
}
