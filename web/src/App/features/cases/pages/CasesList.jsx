import DashboardHeader from "@/App/layout/DashboardLayout/DashboardPage/DashboardHeader";
import CasesListTable from "../components/CasesListTable";
import AddLinkbutton from "@/components/buttons/AddLinkButton";
import { useLoaderData } from "react-router";
import TextInputField from "@/components/formComponents/TextInputField";
import { useEffect, useState } from "react";

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

/**
 * Helper function for taking in a string, object, or array,
 * and recursively checking for if a bit of text is present
 * anywhere inside
 *
 * @param {string|Array|Object} object
 * @param {string} text
 * @returns {boolean}
 */
function objectHasText(object, text) {
  if (!object) return false;
  if (typeof object === "string")
    return object.toLowerCase().includes(text.toLowerCase());
  if (Array.isArray(object))
    return object.some((item) => objectHasText(item, text));

  if (typeof object === "object")
    return Object.values(object).some((propVal) =>
      objectHasText(propVal, text)
    );
  return false;
}

export default function CasesList() {
  const { cases: initialCases, error } = useLoaderData();
  const [cases, setCases] = useState(initialCases);
  const [filterText, setFilterText] = useState("");

  const handleFilter = (e) => {
    setFilterText(e.target.value);
  };

  useEffect(() => {
    if (filterText) {
      setCases(
        initialCases.filter(
          ({ firstName, lastName, dob, eiNumber, authorizations }) =>
            objectHasText(
              { firstName, lastName, dob, eiNumber, authorizations },
              filterText
            )
        )
      );
      return;
    }
    setCases(initialCases);
  }, [filterText]);

  return (
    <>
      <DashboardHeader>Cases</DashboardHeader>
      <div className="flex flex-row gap-5">
        <AddLinkbutton href="/cases/new" />
        {/* <div className="join"> */}
        <TextInputField
          placeholder="global filter"
          onChange={handleFilter}
          className="join-item"
        />
        {/* <button className="btn btn-outline btn-success join-item">
            Search
          </button>
        </div> */}
      </div>
      {error && <p className="font-medium text-error">{error}</p>}
      <CasesListTable
        headers={["Name", "Date of Birth", "EI #", "Authorizations"]}
        cases={cases.map((eiCase) => casePropertiesArray(eiCase))}
      />
    </>
  );
}
