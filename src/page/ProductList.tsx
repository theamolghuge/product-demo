import { useProducts } from "../hooks/useProducts";
import { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import ProductTable from "../components/ProductTable";
import SortFilterBar from "../components/SortFilterBar";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

export default function ProductList() {
  const { products, loading } = useProducts();
  const [view, setView] = useState<"grid" | "table">("grid");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const categories = useMemo(() => {
    const all = products.map((p) => p.category);
    return Array.from(new Set(all));
  }, [products]);

  const filtered = useMemo(() => {
    return products
      .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .filter((p) => (category ? p.category === category : true))
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.price - b.price
          : sortOrder === "desc"
          ? b.price - a.price
          : 0
      );
  }, [products, searchQuery, category, sortOrder]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <SearchBar query={searchQuery} onChange={setSearchQuery} />
      <CategoryFilter
        categories={categories}
        selected={category}
        onChange={setCategory}
      />
      <SortFilterBar
        view={view}
        onViewChange={setView}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {paginated.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <ProductTable products={paginated} />
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
