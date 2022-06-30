import "./color-palette.scss";
import { useEffect, useState } from "react";

export const ColorPalette = ({ selectedColor, product }) => {
  const [optColor, setOptColor] = useState(product.colors[0]);

  function doSomething(colorObj) {
    setOptColor(colorObj);
  }

  useEffect(() => {
    selectedColor(optColor);
  }, [optColor]);

  return (
    <div className="color-palette">
      {product.colors.map((res, index) => {
        if (index > 5) return true;
        let colorObj = res;
        let colorValue = res.hexValue;
        let colorName = res.colourName;
        const str = colorName;
        const result = str.split(/\d/);
        return (
          <div className="circle">
            <div
              className="circle1"
              style={{
                backgroundColor: `${colorValue}`,
                border: colorObj === optColor ? " 2px solid white" : "none",
              }}
              onClick={() => doSomething(colorObj)}
            >
              <p className="name">{result} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
