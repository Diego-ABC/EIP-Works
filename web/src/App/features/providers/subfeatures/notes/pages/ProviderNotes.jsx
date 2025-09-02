import AddLinkbutton from "@/components/buttons/AddLinkButton";
import NotesTable from "@/components/dataDisplay/NotesTable";
import AddNoteBox from "@/components/formComponents/AddNoteBox";
import { useLoaderData } from "react-router";
import { useState } from "react";
import addProviderNote from "../services/addProviderNote";

export default function ProviderNotes() {
  const { notes: initialNotes, error } = useLoaderData();
  const [notes, setNotes] = useState(initialNotes);
  const onNewNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  return (
    <div className="py-3 min-w-full flex flex-col gap-3">
      <AddNoteBox
        onNewNote={onNewNote}
        noteTypes={["HR", "Payroll", "Staffing"]}
        addNoteService={addProviderNote}
      />
      {error && <p className="font-medium text-error">{error}</p>}
      <NotesTable notes={notes} />
    </div>
  );
}
