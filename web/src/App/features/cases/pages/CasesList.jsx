import DashboardHeader from "@/App/layout/DashboardLayout/DashboardPage/DashboardHeader";
import CasesListTable from "../components/CasesListTable";
import AddLinkbutton from "@/components/buttons/AddLinkButton";

const sampleCases = [
  {
    id: 1,
    firstName: "Dummy",
    lastName: "Child",
    dob: "2023-04-20",
    eiNumber: "123456",
    auths: ["1234567", "1234568"],
  },
  {
    id: 2,
    firstName: "Dummy",
    lastName: "Child",
    dob: "2023-04-20",
    eiNumber: "123456",
    auths: ["1234567", "1234568"],
  },
];

// utility for case -> gridtable format
const casePropertiesArray = ({
  id,
  firstName,
  lastName,
  dob,
  eiNumber,
  auths,
}) => {
  return {
    href: `cases/${id}`,
    className: "",
    content: [
      firstName + " " + lastName,
      { className: "bg-success/20 dark:bg-success/50", content: dob },
      eiNumber,
      auths.join(", "),
    ],
  };
};
export default function CasesList() {
  const cases = sampleCases;
  console.log(cases);
  return (
    <>
      <DashboardHeader>Cases</DashboardHeader>
      <AddLinkbutton href="/cases/new" />
      <CasesListTable
        headers={["Name", "Date of Birth", "EI #", "Authorizations"]}
        cases={cases.map((eiCase) => casePropertiesArray(eiCase))}
      />
    </>
  );
}
