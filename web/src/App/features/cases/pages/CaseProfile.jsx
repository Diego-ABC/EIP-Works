import { Fragment } from "react";
import { useCase } from "../context/caseContext";

export default function CaseProfile() {
  const { eiCase } = useCase();
  return (
    <div className="grid grid-cols-[auto_auto] w-fit p-3">
      {Object.entries(eiCase).map(([id, value]) => (
        <Fragment key={id}>
          <div className="border-b-2 border-b-black dark:border-b-white pr-5">
            {id}:
          </div>
          <div className="border-b-2 border-b-black dark:border-b-white">
            {value}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
