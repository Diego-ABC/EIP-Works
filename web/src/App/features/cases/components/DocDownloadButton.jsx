import { DownloadIcon } from "@phosphor-icons/react";

export default function DocDownloadButton({ filePath = "" }) {
  
  return (
    <button className="btn btn-outline" disabled={!!filePath}>
      <DownloadIcon />
    </button>
  );
}
