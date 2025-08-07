import { useCase } from "../context/caseContext";

export default function CaseDetails() {
  const { eiCase } = useCase();
  const { firstName, lastName, eiNumber, sc, scPhone } = eiCase;
  return (
    <div className="flex flex-row items-baseline gap-6 bg-base-300 p-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-medium">
          {firstName} {lastName}
        </h2>
        <p className="text-base">#{eiNumber}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-medium">
          <span className="font-normal">SC: </span>
          {sc}
        </h2>
        <p>{scPhone}</p>
      </div>
    </div>
  );
}
