import OriginalImg from "../assets/original.png";
import SatisfactionImg from "../assets/satisfaction.png";
import NewArrivalImg from "../assets/shopping-bag.png";
import FastDeliveryImg from "../assets/fast-delivery.png";

export default function Services() {
  const services = [
    {
      title: "Original Products",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: OriginalImg,
    },
    {
      title: "Satisfaction Guarantee",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: SatisfactionImg,
    },
    {
      title: "New Arrival Everyday",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: NewArrivalImg,
    },
    {
      title: "Fast & Free Shipping",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: FastDeliveryImg,
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10">
        We Provide Best <br />
        <span className="font-bold">Customer Experiences</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center mb-2">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
