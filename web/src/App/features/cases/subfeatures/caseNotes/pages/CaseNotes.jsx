import AddLinkbutton from "@/components/buttons/AddLinkButton";
import NotesTable from "../components/NotesTable";
import AddNoteBox from "../components/AddNoteBox";
import { useLoaderData } from "react-router";
import { useState } from "react";

export default function CaseNotes() {
  const { notes: initialNotes, error } = useLoaderData();
  const [notes, setNotes] = useState(initialNotes);
  const onNewNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  return (
    <div className="py-3 min-w-full flex flex-col gap-3">
      <AddNoteBox onNewNote={onNewNote} />
      {error && <p className="font-medium text-error">{error}</p>}
      <NotesTable notes={notes} />
    </div>
  );
}
