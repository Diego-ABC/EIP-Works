import GridTable from "@/components/dataDisplay/GridTable/GridTable";
import AddNoteRow from "./AddNoteBox";

// caseId,
// noteDate,
// userId,
// userName,
// noteContent,
// noteType,

const noteToRow = (note) => [
  note.noteDate,
  note.noteContent,
  note.userName,
  note.noteType,
];

// this function is here because notes added are rendered immediately
// and don't have the normal server Timestamp value
function toMillis(value) {
  if (!value) return 0;
  if (value instanceof Date) return value.getTime();
  if (value.toMillis) return value.toMillis();
  return new Date(value).getTime(); // fallback for string/number
}

function sortNotes(a, b) {
  const aNote = toMillis(a.noteDate);
  const bNote = toMillis(b.noteDate);

  if (aNote !== bNote) {
    return aNote - bNote; // newest noteDate first
  }

  const aCreated = toMillis(a.createdAt);
  const bCreated = toMillis(b.createdAt);

  return aCreated - bCreated; // newest createdAt first
}

export default function NotesTable({ notes = [] }) {
  const headers = ["Date", "Note", "Created By", "Note Type"];

  return (
    <GridTable className="grid-cols-[auto_1fr_auto_auto]">
      {[headers, ...notes.sort(sortNotes).map(noteToRow)]}
    </GridTable>
  );
}
