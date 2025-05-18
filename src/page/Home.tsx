import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Store</h1>
      <Link to="/product-list" className="text-blue-600 underline">
        View Products
      </Link>
    </div>
  );
}
