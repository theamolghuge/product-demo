interface Props {
  query: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ query, onChange }: Props) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search products..."
      className="border p-2 rounded w-full md:w-1/3 mr-3 mb-4"
    />
  );
}
