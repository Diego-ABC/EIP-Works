import getFormDataFromRequest from "@/lib/utils/forms/getFormDataFromRequest";
import addNote from "../services/addNote";

export default async function newNoteAction({ request, params }) {
  try {
    const { noteDate, noteContent, userId, userName, noteType } =
      await getFormDataFromRequest(request);
    const { caseId } = params;
    const errors = {};
    if (!noteDate) errors.noteDate = "date missing";
    if (!noteContent) errors.noteContent = "content missing";
    if (!noteType) errors.noteType = "note type missing";
    if (Object.keys(errors).length) return errors;
    await addNote({
      caseId,
      noteDate,
      userId,
      userName,
      noteContent,
      noteType,
    });
  } catch (err) {
    return { error: { message: err.message } };
  }
}
