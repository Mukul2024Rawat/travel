// app/pages/Destination.tsx
import { useParams } from "remix";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import destinations from "~/data/destinations";

export default function Destination() {
  const { title } = useParams();
  const destination = destinations.find(dest => dest.title === title);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="p-4 text-center">
        <img src={destination.image} alt={destination.title} className="w-full h-auto max-w-2xl mx-auto rounded-lg" />
        <h2 className="text-2xl mt-4">{destination.title}</h2>
      </div>
      <Footer />
    </div>
  );
}
