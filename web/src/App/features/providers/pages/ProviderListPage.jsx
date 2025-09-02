import DashboardHeader from "@/App/layout/DashboardLayout/DashboardPage/DashboardHeader";
import AddLinkbutton from "@/components/buttons/AddLinkButton";
import TextInputField from "@/components/formComponents/TextInputField";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ProvidersList from "../components/ProvidersList";
import objectHasText from "@/lib/utils/filters/objectHasText";

const providerPropertiesArray = ({
  id,
  firstName,
  lastName,
  email,
  phone,
  altPhone,
  disciplines,
}) => {
  return {
    href: `/providers/${id}`,
    className: "",
    content: [firstName + " " + lastName, phone, email, disciplines.join(", ")],
  };
};

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
        <AddLinkbutton href="/providers/new" />
        <TextInputField placeholder="global filter" onChange={handleFilter} />
      </div>
      {error && <p className="font-medium text-error">{error}</p>}
      <ProvidersList
        headers={["Provider", "Phone", "Email", "Services"]}
        providers={providers.map(providerPropertiesArray)}
      />
    </>
  );
}
