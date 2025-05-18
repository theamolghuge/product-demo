import { render, screen, fireEvent } from "@testing-library/react";
import SortFilterBar from "./SortFilterBar";

describe("SortFilterBar", () => {
  const onViewChange = jest.fn();
  const onSortChange = jest.fn();

  beforeEach(() => {
    onViewChange.mockClear();
    onSortChange.mockClear();
  });

  it("renders grid and table view buttons", () => {
    render(
      <SortFilterBar
        view="grid"
        onViewChange={onViewChange}
        sortOrder={null}
        onSortChange={onSortChange}
      />
    );

    expect(screen.getByText("Grid")).toBeInTheDocument();
    expect(screen.getByText("Table")).toBeInTheDocument();
  });

  it("renders sort buttons", () => {
    render(
      <SortFilterBar
        view="grid"
        onViewChange={onViewChange}
        sortOrder="asc"
        onSortChange={onSortChange}
      />
    );

    expect(screen.getByText("Price ↑")).toBeInTheDocument();
    expect(screen.getByText("Price ↓")).toBeInTheDocument();
  });

  it("calls onViewChange when clicking Grid/Table buttons", () => {
    render(
      <SortFilterBar
        view="table"
        onViewChange={onViewChange}
        sortOrder={null}
        onSortChange={onSortChange}
      />
    );

    fireEvent.click(screen.getByText("Grid"));
    expect(onViewChange).toHaveBeenCalledWith("grid");

    fireEvent.click(screen.getByText("Table"));
    expect(onViewChange).toHaveBeenCalledWith("table");
  });

  it("calls onSortChange when clicking Price ↑/↓ buttons", () => {
    render(
      <SortFilterBar
        view="grid"
        onViewChange={onViewChange}
        sortOrder={null}
        onSortChange={onSortChange}
      />
    );

    fireEvent.click(screen.getByText("Price ↑"));
    expect(onSortChange).toHaveBeenCalledWith("asc");

    fireEvent.click(screen.getByText("Price ↓"));
    expect(onSortChange).toHaveBeenCalledWith("desc");
  });

  it("highlights selected view and sort order", () => {
    render(
      <SortFilterBar
        view="table"
        onViewChange={onViewChange}
        sortOrder="desc"
        onSortChange={onSortChange}
      />
    );

    expect(screen.getByText("Table")).toHaveClass("bg-blue-500");
    expect(screen.getByText("Price ↓")).toHaveClass("bg-green-500");
  });
});
