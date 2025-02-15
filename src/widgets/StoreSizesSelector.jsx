import React, { useState } from "react";
import Spring from "@components/Spring";
import SizeGuide from "@components/SizeGuide";
import SizeSelector from "@ui/SizeSelector";

// api
import { useGetProductSizesQuery } from "@api/eCommerce/eCommerceApi";
import { useShopProvider } from "@contexts/shopContext";

const StoreSizesSelector = ({ standalone = true }) => {
  const Wrapper = standalone ? Spring : "div";
  const wrapperProps = standalone ? { className: "card" } : {};
  const [popupOpen, setPopupOpen] = useState(false);

  const { data: response, isLoading, error } = useGetProductSizesQuery();

  const { selectedSizes, toggleSize, resetSizes } = useShopProvider();

  const headerStyles = {
    padding: standalone ? "30px 30px 20px" : "0 0 20px",
    borderBottom: "1px solid var(--border)",
  };

  const mainStyles = {
    padding: standalone ? "20px 30px 30px" : "20px 0 0",
  };

  return (
    <Wrapper {...wrapperProps}>
      <div className="flex justify-between" style={headerStyles}>
        <div className="flex gap-2">
          <h3>Select size</h3>
          {selectedSizes.length > 1 && (
            <button className="underline" onClick={() => resetSizes()}>
              Clear
            </button>
          )}
        </div>
        <button className="text-button" onClick={() => setPopupOpen(true)}>
          Size table
        </button>
      </div>

      {isLoading && <p>Loading sizes...</p>}
      {error && (
        <p style={{ color: "red" }}>Error loading sizes: {error.message}</p>
      )}

      {!isLoading && !error && response && (
        <>
          <div className="flex flex-wrap gap-2" style={mainStyles}>
            {response.data.map((size) => (
              <SizeSelector
                id={size.SizeID}
                key={size.ShortCode}
                size={size.Name}
                selected={selectedSizes.includes(size.SizeID)}
                onToggle={toggleSize}
              />
            ))}
          </div>
          <SizeGuide
            open={popupOpen}
            onClose={() => setPopupOpen(false)}
            data={response.data}
          />
        </>
      )}
    </Wrapper>
  );
};

export default StoreSizesSelector;
