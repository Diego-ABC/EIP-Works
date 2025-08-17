import SearchableDropDown from "@/components/formComponents/SearchableDropDown";
import SectionTitle from "@/components/formComponents/SectionTitle";
import TextInputField from "@/components/formComponents/TextInputField";
import dateAsInputFieldFormat from "@/lib/utils/formatting/dateAsInputFieldFormat";
import { Form } from "react-router";
import useAddNote from "../hooks/useAddNote";
import { useEffect } from "react";

const NoteTypes = ["Case Management", "Supervision", "Staffing"];

export default function AddNoteRow({ action = "", onNewNote = () => {} }) {
  const {
    submitNote,
    isSubmitting,
    error,
    formChanged,
    readyToSubmit,
    newNote,
  } = useAddNote();

  useEffect(() => {
    console.log("adding new note");
    if (newNote) {
      console.log(newNote);
      onNewNote(newNote);
    }
  }, [newNote]);

  return (
    <div className="bg-base-100 p-5">
      <SectionTitle>
        New Note{" "}
        {error && (
          <span className="font-medium text-base text-error">{error}</span>
        )}
      </SectionTitle>
      <Form
        method="POST"
        action={action}
        className="flex flex-row w-full gap-2 mt-3"
        onChange={formChanged}
        onSubmit={submitNote}
      >
        <TextInputField
          name="noteDate"
          type="date"
          required={error}
          defaultValue={dateAsInputFieldFormat()}
        />
        <TextInputField
          name="noteContent"
          placeholder="Note"
          className="w-full"
          required={error}
        />
        <SearchableDropDown
          options={NoteTypes}
          name="noteType"
          placeholder="Type"
          className="w-fit"
          required={error}
        />
        <button
          className="btn btn-lg btn-success dark:btn-soft self-center"
          disabled={!readyToSubmit}
        >
          {isSubmitting ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Save"
          )}
        </button>
      </Form>
    </div>
  );
}
