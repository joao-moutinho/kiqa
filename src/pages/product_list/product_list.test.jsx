/* eslint-disable testing-library/await-async-query */
import { ProductList } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";




describe("ProductList", () => {
  test("render", () => {
    const { container } = render(
      <BrowserRouter >
        <Routes>
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("check searchParamsState", () => {
    

    const { container } = render(
        <BrowserRouter >
          <Routes>
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </BrowserRouter>
      );
 
    
    
  })
  
});
