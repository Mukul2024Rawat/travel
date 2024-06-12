// app/components/Card.tsx
import { Link } from "remix";

export default function Card({ image, title }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl mb-2">{title}</h3>
        <Link to={`/destination/${title}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
