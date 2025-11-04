import ServiceCard from "./ServiceCard";
import { offeringsList } from "../data.js";

const Services = () => {
  if (!offeringsList || offeringsList.length === 0) return null; // Optional safeguard

  return (
    <>
      <div className="position-relative">
        <div className="row gx-md-5 gy-5 text-center justify-content-center">
          {offeringsList.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
