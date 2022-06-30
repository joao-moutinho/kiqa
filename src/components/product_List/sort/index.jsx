import { useEffect, useState } from "react";
import "./sort.scss";
import { BiChevronDown } from "react-icons/bi";
import { InView } from "react-intersection-observer";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";

export const Sort = ({ setHeaderState, searchParamsChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [option, setOption] = useState("Default");
  const [searchParams, setSearchParams] = useSearchParams();
  const [price, setPrice] = useState(null);
  const [sort, setSort] = useState(null);
  const [brands, setBrands] = useState([]);
  const [categoryParam, setCategoryParam] = useState();
  const [subCategories, setSubCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    setCategoryParam(category);
  }, [category]);

  useEffect(() => {
    setPrice(searchParams.get("price"));
    setBrands(searchParams.get("brands"));

  }, [searchParams]);

  useEffect(() => {
    setPrice(searchParams.get("price"));
    setBrands(searchParams.get("brands"));
    
    setSearchParams({
      ...(price && { price }),
      ...(brands && { brands }),
      ...(sort && { sort }),
      ...(categories && {categories}),
      ...(subCategories && {subCategories})
    });
    searchParamsChange({
      ...(price && { price }),
      ...(brands && { brands }),
      ...(sort && { sort }),
      ...(categories && {categories}),
      ...(subCategories && {subCategories})
    });
  }, [sort]);

  return (
    <InView as="div" onChange={setHeaderState} className="sort">
      <div className="sort-box">
        <div className="sort-box-left">
          <Breadcrumbs color="white" arial-label="breadcrumb">
            <Link underline="hover" color="white" href="/">
              Home
            </Link>
            <Link underline="hover" color="white" href="/products">
              Products
            </Link>
            {categoryParam && (
              <Typography className="sort-box-left-category" color="white">
                {categoryParam}
              </Typography>
            )}
          </Breadcrumbs>
        </div>

        <div className="sort-box-right">
          <div className="sort-box-right-title"> Sort by: </div>
          <div className="sort-box-right-output" data-testid="output">
            {option}
            <BiChevronDown
              data-testid="chevron"
              name="chevron"
              size={25}
              className={
                !showDropdown
                  ? "sort-box-right-output-iconclose"
                  : "sort-box-right-output-iconopen"
              }
              onClick={() => {
                if (showDropdown) {
                  setShowDropdown(false);
                } else {
                  setShowDropdown(true);
                }
              }}
            />
          </div>

          {showDropdown && (
            <div 
            data-testid="right-dropdown"
            className="sort-box-right-dropdown">
              
              <div
                data-testid="buttonDefault"
                onClick={() =>
                  setOption("Default") & setShowDropdown("") & setSort(null)
                }
                className="sort-box-right-dropdown-option"
              >
                Default
              </div>
              <div
                onClick={() =>
                  setOption("1-9 Asc") &
                  setShowDropdown(false) &
                  setSort("price%2Casc")
                }
                className="sort-box-right-dropdown-option"
              >
                <span>1-9 Asc</span>
              </div>
              <div
                onClick={() =>
                  setOption("9-1 Desc") &
                  setShowDropdown(false) &
                  setSort("price%2Cdesc")
                }
                className="sort-box-right-dropdown-option"
              >
                <span>9-1 Desc</span>
              </div>
              <div
                onClick={() =>
                  setOption("A-Z Asc") &
                  setShowDropdown(false) &
                  setSort("name%2Casc")
                }
                className="sort-box-right-dropdown-option"
              >
                <span>A-Z Asc</span>
              </div>
              <div
                onClick={() =>
                  setOption("Z-A Desc") &
                  setShowDropdown(false) &
                  setSort("name%2Cdesc")
                }
                className="sort-box-right-dropdown-option"
              >
                <span>Z-A Desc</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </InView>
  );
};
