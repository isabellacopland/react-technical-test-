import React, { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
    const validProps = {
        results: ["test", "test"],
    };

  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults results={validProps.results}/>);
    
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders placeholder it no results", () => {
      const validProps = [];
      render(<SearchResults results={validProps} />);

      const placeholderMsg = screen.getByText("No results");

      expect(placeholderMsg).toBeInTheDocument();
    });
});