import SectionTitle from "@/components/formComponents/SectionTitle";
import textFieldStyle from "@/components/formComponents/textFieldStyle";
import TextInputField from "@/components/formComponents/TextInputField";
import dateAsInputFieldFormat from "@/lib/utils/formatting/dateAsInputFieldFormat";
import { Form, useActionData } from "react-router";
import { useState } from "react";

// dateUploaded,
//   docDate,
//   description,
export default function NewCaseDocument() {
  const { error } = useActionData() || {};
  console.log(error);
  const [submitting, setSubmitting] = useState(false);
  return (
    <Form
      className="w-fit grid grid-cols-[auto_auto_auto] gap-2 p-5 bg-base-100"
      method="POST"
      onSubmit={() => {
        setSubmitting(true);
      }}
      encType="multipart/form-data"
    >
      <SectionTitle className="col-span-3">New Document</SectionTitle>
      {/* <TextInputField
        type="date"
        name="dateUploaded"
        defaultValue={dateAsInputFieldFormat()}
        label="Date Uploaded"
        className="w-fit"
        disabled
      /> */}
      <input
        type="date"
        hidden
        value={dateAsInputFieldFormat()}
        name="dateUploaded"
      />
      <TextInputField
        type="date"
        name="docDate"
        defaultValue={dateAsInputFieldFormat()}
        label="Doc Date"
        className="w-fit"
      />
      <input
        type="file"
        name="docFile"
        className={"file-input w-full h-full"}
        accept="image/*, application/pdf"
        required
      />
      <TextInputField
        name="description"
        placeholder="Description"
        className="col-span-2 w-full"
      />
      <button
        className="btn btn-success dark:btn-soft col-start-3 self-end"
        type="submit"
        disabled={submitting}
      >
        Submit
      </button>
    </Form>
  );
}
