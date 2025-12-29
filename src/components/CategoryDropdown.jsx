import { useState } from "react";
import FontAwesome from "./FontAwesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useFetchData } from "../hooks/useFetchData";
import { useFilter } from "../context/FilterContext";
import { useSearch } from "../context/SearchContext";

function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedCategory, setSelectedCategory } = useFilter();
  const { clearSearch } = useSearch();

  const { data: products } = useFetchData("products");

  const categories = [
    ...new Set(products.map((product) => product.category.toLowerCase())),
  ];

  function handleCategoryClick(category) {
    setSelectedCategory(category);
    clearSearch();
    setIsOpen(false);
  }

  function handleAllProducts() {
    setSelectedCategory(null);
    clearSearch();
    setIsOpen(false);
  }

  return (
    <div className="relative">
      {/* Dropdown Toggle Button */}
      <button
        onClick={() => {
          setIsOpen((s) => !s);
        }}
        className="flex cursor-pointer items-center gap-1 hover:text-blue-600"
      >
        Categories
        <FontAwesome icon={faAngleDown} size="xs" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
          <ul className="py-2">
            <li>
              <button
                className={`w-full px-4 py-2 text-left text-lg text-black hover:bg-blue-100`}
                onClick={() => handleAllProducts()}
              >
                all
              </button>
            </li>
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full px-4 py-2 text-left text-lg text-black hover:bg-blue-100 ${
                    selectedCategory === category
                      ? "bg-blue-50 text-blue-600"
                      : ""
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CategoryDropdown;
