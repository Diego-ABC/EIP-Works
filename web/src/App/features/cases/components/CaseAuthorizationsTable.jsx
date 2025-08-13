import GridTable from "@/components/dataDisplay/GridTable/GridTable";

const authProperties = ({
  id,
  type,
  frequency,
  length,
  period,
  startDate,
  endDate,
  authNumber,
  providerName,
}) => ({
  href: "./" + id,
  content: [
    type,
    `${frequency}x${length}, ${period}ly`,
    startDate,
    endDate,
    authNumber,
    providerName,
  ],
});

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
