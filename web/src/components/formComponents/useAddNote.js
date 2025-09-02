import { useUser } from "@/App/features/auth/providers/UserProvider";
import { useParams } from "react-router";
// import addNote from "../services/addNote";
import { useState } from "react";

// caseId,
// noteDate,
// userId,
// userName,
// noteContent,
// noteType,
export default function useAddNote(addNoteService) {
  const params = useParams();
  const {
    user: { displayName: userName, uid: userId },
  } = useUser();
  const [error, setError] = useState(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [newNote, setNewNote] = useState(undefined);

  const submitNote = async (e) => {
    e.preventDefault();
    setError(undefined);
    setIsSubmitting(true);
    const form = e.target;
    const noteData = Object.fromEntries(new FormData(form));
    const { noteDate, noteContent, noteType } = noteData;

    try {
      if (!noteDate) throw new Error("note date missing");
      if (!noteContent) throw new Error("note missing");
      // if (!noteType) throw new Error("note type missing");

      const note = { ...noteData, userName, userId, ...params };
      const newNoteId = await addNoteService(note);
      setNewNote({
        id: newNoteId,
        ...note,
        noteType: JSON.parse(noteType),
        createdAt: new Date(),
      });
      form.reset();
      setReadyToSubmit(false);
    } catch (err) {
      setError(err.message);
    }
    setIsSubmitting(false);
  };
  const formChanged = (e) => {
    console.log(e);
    const form = e.target.form;
    const noteData = Object.fromEntries(new FormData(form));
    const { noteDate, noteContent, noteType } = noteData;
    console.log(noteDate, noteContent, noteType);
    setReadyToSubmit(!(!noteDate || !noteContent));
  };

  return {
    submitNote,
    isSubmitting,
    error,
    formChanged,
    readyToSubmit,
    newNote,
  };
}
