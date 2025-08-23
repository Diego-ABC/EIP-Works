import GridTable from "@/components/dataDisplay/GridTable/GridTable";
import GridTableCell from "@/components/dataDisplay/GridTable/GridTableCell";
import GridTableRow from "@/components/dataDisplay/GridTable/GridTableRow";
import {
  DownloadIcon,
  DownloadSimpleIcon,
  FileArrowDownIcon,
} from "@phosphor-icons/react";
import { doc } from "firebase/firestore";
import DocRow from "./DocRow";

const docProperties = ({
  id,
  dateUploaded,
  docDate,
  description,
  downloadUrl,
  // docId,
}) => [
  // id,
  dateUploaded,
  docDate,
  description,
  <GridTableCell className="flex flex-row justify-center items-center">
    <a
      target="_blank"
      className="btn btn-success dark:btn-soft"
      href={downloadUrl}
    >
      <FileArrowDownIcon size={30} weight="fill" />
    </a>
  </GridTableCell>,
];

// const authProperties = ({
//   id,
//   type,
//   frequency,
//   length,
//   period,
//   startDate,
//   endDate,
//   authNumber,
//   providerName,
// }) => ({
//   href: "./" + id,
//   content: [
//     type,
//     `${frequency}x${length}, ${period}`,
//     startDate,
//     endDate,
//     authNumber,
//     providerName,
//   ],
// });

export default function DocsTable({ docs = [] }) {
  const headers = ["Date Uploaded", "Doc Date", "Description", "Download"];
  console.log(docs);
  return (
    <GridTable className="grid-cols-[auto_auto_1fr_auto]">
      {/* {[headers, ...docs.map(docProperties)]} */}
      {[headers, ...docs.map((doc) => <DocRow key={doc.id} doc={doc} />)]}
    </GridTable>
  );
}
