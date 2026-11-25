import { useParams } from "react-router-dom";
import DetailPage from "../components/DetailPage";
import { ministries } from "../data/ministries";

export default function MinistryDetail() {
  const { slug } = useParams();
  const item = ministries.find((m) => m.slug === slug);
  return (
    <DetailPage
      item={item}
      title={item?.name}
      backTo="/ministries-groups"
      backLabel="All ministries & groups"
    />
  );
}