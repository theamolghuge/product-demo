import { type Product } from "../types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />
      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p className="text-green-600 font-bold">${product.price}</p>
      <p>
        ⭐ {product.rating.rate} ({product.rating.count})
      </p>
    </div>
  );
}
