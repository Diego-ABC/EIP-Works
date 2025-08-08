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
    `${frequency}x${length}, ${period}`,
    startDate,
    endDate,
    authNumber,
    providerName,
  ],
});
// utility for case -> gridtable format
const casePropertiesArray = ({
  id,
  firstName,
  lastName,
  dob,
  eiNumber,
  auths = [],
}) => {
  return {
    href: `/cases/${id}`,
    className: "",
    content: [
      firstName + " " + lastName,
      { className: "bg-success/20 dark:bg-success/50", content: dob },
      eiNumber,
      auths.join(", "),
    ],
  };
};

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
