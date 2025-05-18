import { type Product } from "../types/product";

export default function ProductTable({ products }: { products: Product[] }) {
  return (
    <table className="w-full border mt-4 text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id} className="border-t">
            <td className="p-2">
              <img
                src={p.image}
                alt={p.title}
                className="h-16 object-contain"
              />
            </td>
            <td>{p.title}</td>
            <td>${p.price}</td>
            <td>
              ⭐ {p.rating.rate} ({p.rating.count})
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
