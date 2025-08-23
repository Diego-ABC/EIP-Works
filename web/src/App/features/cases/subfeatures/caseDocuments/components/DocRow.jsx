import GridTableRow from "@/components/dataDisplay/GridTable/GridTableRow";
import GridTableCell from "@/components/dataDisplay/GridTable/GridTableCell";
import { FileArrowDownIcon } from "@phosphor-icons/react";

export default function DocRow({ doc = {} }) {
  const {
    id,
    dateUploaded,
    docDate,
    description,
    downloadUrl,
    // docId,
  } = doc;
  return (
    <GridTableRow>
      {[
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
      ]}
    </GridTableRow>
  );
}
