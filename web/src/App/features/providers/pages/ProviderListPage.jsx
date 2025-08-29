import DashboardHeader from "@/App/layout/DashboardLayout/DashboardPage/DashboardHeader";
import AddLinkbutton from "@/components/buttons/AddLinkButton";
import TextInputField from "@/components/formComponents/TextInputField";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ProvidersList from "../components/ProvidersList";
import MultiTagInput from "@/components/formComponents/MultiTagInput";

export default function ProviderListPage() {
  const { providers: initialProviders, error } = useLoaderData() || {};
  const [providers, setProviders] = useState(initialProviders);
  const [filterText, setFilterText] = useState("");

  const handleFilter = (e) => {
    setFilterText(e.target.value);
  };

  useEffect(() => {
    if (filterText) {
      setProviders(
        initialProviders.filter(
          ({ firstName, lastName, dob, eiNumber, authorizations }) =>
            objectHasText(
              { firstName, lastName, dob, eiNumber, authorizations },
              filterText
            )
        )
      );
      return;
    }
    setProviders(initialProviders);
  }, [filterText]);

  return (
    <>
      <DashboardHeader>Providers</DashboardHeader>

      <div className="flex flex-row gap-5">
        <AddLinkbutton href="/cases/new" />
        <TextInputField
          placeholder="global filter"
          onChange={handleFilter}
          className="join-item"
        />
      </div>
      {error && <p className="font-medium text-error">{error}</p>}
      <form action="" id="test">
        <MultiTagInput
          label="test"
          suggestions={[
            "SI",
            "ST",
            "OT",
            "ABA",
            "Service Coordination",
            "PT",
            "Family Training",
          ]}
          name="services"
        />
      </form>
      <ProvidersList headers={["Provider", "Phone", "Email", "Services"]} />
      {/* <CasesListTable
              headers={["Name", "Date of Birth", "EI #", "Authorizations"]}
              cases={cases.map((eiCase) => casePropertiesArray(eiCase))}
            /> */}
    </>
  );
}
