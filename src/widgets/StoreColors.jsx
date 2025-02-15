// components
import Spring from "@components/Spring";
import ColorCheckbox from "@ui/ColorCheckbox";

// api
import { useGetProductColorsQuery } from "@api/eCommerce/eCommerceApi";
import { useShopProvider } from "@contexts/shopContext";

const StoreColors = ({ standalone = true }) => {
  const Wrapper = standalone ? Spring : "div";
  const wrapperProps = standalone
    ? { className: "card flex flex-col justify-between card-padded" }
    : { className: "flex flex-col gap-5" };

  const { data: response, isLoading, error } = useGetProductColorsQuery();

  const { selectedColors, toggleColor, resetColors } = useShopProvider();

  return (
    <Wrapper {...wrapperProps}>
      <div className="flex justify-between">
        <h3>Available colors</h3>
        {selectedColors.length > 1 && (
          <button className="underline" onClick={() => resetColors()}>
            Clear
          </button>
        )}
      </div>

      {isLoading && <p>Loading colors...</p>}
      {error && (
        <p style={{ color: "red" }}>Error loading colors: {error.message}</p>
      )}

      {!isLoading && !error && response && (
        <div className="flex flex-wrap" style={{ gap: "12px" }}>
          {response.data.map((color) => (
            <ColorCheckbox
              key={color.ColorID}
              type="checkbox"
              {...color}
              checked={selectedColors.includes(color.ColorID)}
              onChange={toggleColor}
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default StoreColors;
