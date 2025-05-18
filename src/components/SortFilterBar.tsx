import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

interface Props {
  view: "grid" | "table";
  onViewChange: (v: "grid" | "table") => void;
  sortOrder: "asc" | "desc" | null;
  onSortChange: (s: "asc" | "desc") => void;
}

export default function SortFilterBar({
  view,
  onViewChange,
  sortOrder,
  onSortChange,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div className="space-x-2">
        <button
          className={`px-3 py-1 rounded ${
            view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onViewChange("grid")}
        >
          Grid
        </button>
        <button
          className={`px-3 py-1 rounded ${
            view === "table" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onViewChange("table")}
        >
          Table
        </button>
      </div>

      <div className="space-x-2">
        <button
          className={`px-3 py-1 rounded ${
            sortOrder === "asc" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onSortChange("asc")}
        >
          Price ↑
        </button>
        <button
          className={`px-3 py-1 rounded ${
            sortOrder === "desc" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onSortChange("desc")}
        >
          Price ↓
        </button>
      </div>
    </div>
  );
}
