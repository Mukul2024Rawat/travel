// app/pages/Home.tsx
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Card from "~/components/Card";
import destinations from "~/data/destinations";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((dest, index) => (
          <Card key={index} image={dest.image} title={dest.title} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
