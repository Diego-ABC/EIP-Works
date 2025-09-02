import SearchableDropDown from "@/components/formComponents/SearchableDropDown";
import SectionTitle from "@/components/formComponents/SectionTitle";
import TextInputField from "@/components/formComponents/TextInputField";
import dateAsInputFieldFormat from "@/lib/utils/formatting/dateAsInputFieldFormat";
import { Form } from "react-router";
import useAddNote from "./useAddNote";
import { useEffect } from "react";
import MultiTagInput from "./MultiTagInput";
// import addNote from "@/App/features/cases/subfeatures/caseNotes/services/addNote";

export default function AddNoteBox({
  action = "",
  onNewNote = () => {},
  noteTypes = [],
  addNoteService,
}) {
  const {
    submitNote,
    isSubmitting,
    error,
    formChanged,
    readyToSubmit,
    newNote,
  } = useAddNote(addNoteService);

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
          autoComplete={false}
        />
        {/* <SearchableDropDown
          options={NoteTypes}
          name="noteType"
          placeholder="Type"
          className="w-fit"
          required={error}
        /> */}
        <MultiTagInput
          name="noteType"
          placeholder="Type"
          className="w-fit"
          suggestions={noteTypes}
        />
        <button
          className="btn  btn-success dark:btn-soft self-center"
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
