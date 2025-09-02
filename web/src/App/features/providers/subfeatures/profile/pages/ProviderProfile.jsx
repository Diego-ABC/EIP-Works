import ProviderForm from "../../../components/ProviderForm";
import { useProvider } from "../../../contexts/providerContext";

export default function ProviderProfile() {
  const { provider } = useProvider();
  return <ProviderForm provider={provider} />;
}
