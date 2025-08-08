import GridTable from "@/components/dataDisplay/GridTable/GridTable";

const authProperties = ({
  type,
  frequency,
  length,
  period,
  startDate,
  endDate,
  authNumber,
  providerName,
}) => [
  type,
  `${frequency}x${length}, ${period}`,
  startDate,
  endDate,
  authNumber,
  providerName,
];

export default function CaseAuthorizationsTable({ auths = [] }) {
  const headers = [
    "Type",
    "Mandate",
    "Start Date",
    "End Date",
    "Auth #",
    "Provider",
  ];

  return (
    <GridTable className="min-w-full w-fit grid-cols-6">
      {[headers, ...auths.map(authProperties)]}
    </GridTable>
  );
}
