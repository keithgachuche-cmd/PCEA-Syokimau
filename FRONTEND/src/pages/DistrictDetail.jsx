import { useParams } from "react-router-dom";
import DetailPage from "../components/DetailPage";
import { districts } from "../data/districts";

export default function DistrictDetail() {
  const { slug } = useParams();
  const item = districts.find((d) => d.slug === slug);
  return (
    <DetailPage
      item={item}
      title={item ? `${item.name} District` : undefined}
      backTo="/services-districts?tab=districts"
      backLabel="All districts"
    />
  );
}