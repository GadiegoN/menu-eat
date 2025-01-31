import Link from "next/link";

interface MenuCardProps {
  id: string;
  name: string;
  description: string;
}

export default function MenuCard({ id, name, description }: MenuCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <Link href={`/menu/${id}`}>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
          Ver Cardápio
        </button>
      </Link>
    </div>
  );
}
