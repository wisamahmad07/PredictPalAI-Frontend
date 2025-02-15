// styling
import styled from "styled-components";
import theme from "styled-theming";

// components
import Spring from "@components/Spring";
import BasicCheckbox from "@ui/BasicCheckbox";

// hooks
import { useThemeProvider } from "@contexts/themeContext";

// api
import { useGetProductCategoriesQuery } from "@api/eCommerce/eCommerceApi";

// context
import { useShopProvider } from "@contexts/shopContext";

const Category = styled.div`
  .item {
    position: relative;

    &_qty {
      position: absolute;
      color: ${theme("theme", {
        light: "var(--btn-text-light)",
        dark: "#B0B7A1",
      })};

      &.ltr {
        margin: -4px 0 0 8px;
      }

      &.rtl {
        margin: -4px 8px 0 0;
      }
    }
  }
`;

const StoreCategories = ({ standalone = true }) => {
  const { direction } = useThemeProvider();
  const Wrapper = standalone ? Spring : "div";
  const wrapperProps = standalone
    ? { className: "card flex flex-col gap-5 card-padded" }
    : { className: "flex flex-col gap-5" };

  const {
    data: response,
    isLoading,
    error,
  } = useGetProductCategoriesQuery({
    minify: "false",
  });

  const { selectedCategories, toggleCategory, resetCategory } =
    useShopProvider();

  const handleCheckboxChange = (categoryId) => {
    toggleCategory(categoryId);
  };

  return (
    <Wrapper {...wrapperProps}>
      <div className="flex justify-between">
        <h3>Categories</h3>
        {selectedCategories.length > 1 && (
          <button className="underline" onClick={() => resetCategory()}>
            Clear
          </button>
        )}
      </div>

      {isLoading && <p>Loading categories...</p>}
      {error && (
        <p style={{ color: "red" }}>
          Error loading categories: {error.message}
        </p>
      )}

      {!isLoading && !error && response && (
        <div className="h-30 overflow-y-scroll">
          <div className="grid grid-cols-2 gap-3" style={{ paddingTop: 0 }}>
            {response.data.map((item) => (
              <Category
                className="flex items-center gap-3"
                key={`Product-Categories-${item.ProductCatID}`}
              >
                <BasicCheckbox
                  id={`Product-Categories-${item.ProductCatID}`}
                  color="grass"
                  checked={selectedCategories.includes(item.ProductCatID)}
                  onChange={() => handleCheckboxChange(item.ProductCatID)}
                />
                <label className="item text-16">
                  {item.Name}
                  <span className={`item_qty h6 ${direction}`}>
                    {item.ProductCount}
                  </span>
                </label>
              </Category>
            ))}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default StoreCategories;
