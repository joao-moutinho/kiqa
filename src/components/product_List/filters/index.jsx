import "./filters.scss";
import { RangeSlider, ReactiveBase } from "@appbaseio/reactivesearch";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

export const Filters = ({ searchParamsChange }) => {
  const categoriesList = ["lips", "eyes", "face", "nails"];

  const subCategoriesList = [
    { name: "nail_polish",type : "nails"},
    { name: "blush" ,type  : "face"},
    { name: "lipstick" ,type : "lips"},
    { name: "mascara" ,type  : "face"},
    { name: "lip_liner" ,type : "lips"},
    { name: "foundation" ,type : "face"},
    { name: "eyeshadow" ,type : "eyes"},
    { name: "eyeliner" ,type : "eyes"},
    { name: "eyebrow" ,type : "eyes"},
    { name: "bronzer",type  : "face"},
  ];

  const [priceMin, setPriceMin] = useState(1);
  const [priceMax, setPriceMax] = useState(80);
  const [moreBrands, setMoreBrands] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showSubCategories, setShowSubCategories] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(null);
  const [sort, setSort] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [categoryParam, setCategoryParam] = useState();


  const { data, isLoading } = useQuery(
    "brands",
    async () =>
      await axios
        .get(
          "https://kiqa-be.herokuapp.com/brands?page=0&size=44&hasProducts=true"
        , {withCredentials: true})
        .then((res) => res.data)
  );

  const {category} = useParams();

  useEffect(() => {
    if (category !== undefined) {
      setCategories([category]);
      setCategoryParam(category);
    }
  }, [category]);
  
  useEffect(() => {
    setSort(searchParams.get("sort"));
  }, [searchParams]);

  useEffect(() => {

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
  }, [brands, price,categories,subCategories,sort]);


  const handleChangeBrands = (brand) => {
    const index = brands.findIndex((element) => element === brand);
    if (index === -1) {
      setBrands([...brands, brand]);
    } else {
      setBrands(
        brands.filter((element) => {
          if (element !== brand) {
            return element;
          }
        })
      );
    }
  };


  const handleChangeSubCategory = (subCategory) => {
    const index = subCategories.findIndex((element) => element === subCategory);
    if(index === -1){
      setSubCategories([...subCategories, subCategory]);
    }else{
      setSubCategories(
        subCategories.filter((element) => {
          if(element !== subCategory){
            return element;
          }
        })
      )
    }
  }
 

  const handleChangeCategories = (category) =>{
    const index = categories.findIndex((element) => element === category);
    if(index === -1){
      setCategories([...categories, category]);
    }else{
     const removeSub  = [];

      subCategoriesList.forEach((element) => {
        if(element.type === category){
          removeSub.push(element.name);
        }   
      })

      setSubCategories(subCategories.filter((element) => {
         if(!!removeSub.find((removeSub) =>  removeSub === element) === false){
           return true;
         }
      })) 
     

      setCategories(
        categories.filter((element) => {
          if(element !== category){
            return element;
          }
        })
      )
    }
  }


  return (
    /* Slide Price */
    <div className="filters">
      <div className="filters-price">
        <div className="filters-price-text">Price</div>
        <div className="filters-price-range">
          <ReactiveBase
            app="good-books-ds"
            url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
            enableAppbase
          >
            <RangeSlider
              data-testid="slider"
              showHistogram={false}
              dataField="ratings_count"
              componentId="BookSensor"
              range={{
                start: 1.99,
                end: 77,
              }}
              defaultValue={{
                start: priceMin,
                end: priceMax,
              }}
              rangeLabels={{
                start: `${priceMin} €`,
                end: `${priceMax} €`,
              }}
              beforeValueChange={function (value) {
                setPrice(`&minPrice=${value[0]}&maxPrice=${value[1]}`);
              }}
              onValueChange={function (value) {
                if (value[1] > 74) value[1] = 77;
                if (value[0] < 6) value[0] = 1.99;
                setPriceMin(value[0]);
                setPriceMax(value[1]);
              }}
            />
          </ReactiveBase>
        </div>
      </div>

      {/*     Categories    */}
      <div className="filters-type">
        <div className="filters-type-title">
          <BiChevronDown
            data-testid="chevron-categories"
            className={
              !showCategories
                ? "filters-type-title-iconclose"
                : "filters-type-title-iconopen"
            }
            onClick={() => {
              if (showCategories) {
                setShowCategories(false);
              } else {
                setShowCategories(true);
              }
            }}
            size={30}
          />
          <p>Categories</p>
        </div>

        {showCategories && (
          <div data-testid="showCategories" className="filters-type-checkbox">
            { categoryParam !== undefined ?
              categoriesList.map((category) => {
                return(
                  <div className="filters-type-checkbox-input">
                  <input 
                    type="checkbox" 
                    name={category} 
                    disabled={true}
                    onChange={() => handleChangeCategories(category)}
                    checked={(category === categoryParam)
                      ? "checked"
                      : ""}
                    />
                  <label htmlFor={category}>{category}</label>
                </div>
                )
              })
            : 
              categoriesList.map((category) => {
              return (
                <div key={category} className="filters-type-checkbox-input">
                  <input 
                    type="checkbox" 
                    name={category} 
                    onChange={() => handleChangeCategories(category)}
                    checked={(!!categories.find((element) => element === category))
                      ? "checked"
                      : ""}
                    />
                  <label htmlFor={category}>{category}</label>
                </div>
              );
            })
          }


          </div>
        )}
      </div>

      {/* Checkbox Sub-Categories */}
      <div className="filters-subCategory">
        <div className="filters-type-title">
          <BiChevronDown
            className={
              !showSubCategories
                ? "filters-type-title-iconclose"
                : "filters-type-title-iconopen"
            }
            onClick={() => {
              if (showSubCategories) {
                setShowSubCategories(false);
              } else {
                setShowSubCategories(true);
              }
            }}
            size={30}
          />
          <p>Sub-Category</p>
        </div>
        {showSubCategories && (
          <div className="filters-category-checkbox">
            {subCategoriesList.map((subCategory) => {
              return (
                <div className="filters-type-checkbox-input">
                  <input 
                   type="checkbox"
                   name="brand" 
                   onChange={() => handleChangeSubCategory(subCategory.name)}
                   disabled={!!categories.find((element) => element === subCategory.type)
                      ? ""
                      : "disabled"
                  }
                  checked={(!!subCategories.find((element) => element === subCategory.name))
                    ? "checked"
                    : ""}
                  />
                  <label htmlFor={subCategory.name}>{subCategory.name}</label>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Checkbox Brands */}
      <div className="filters-category">
        <div className="filters-type-title">
          <BiChevronDown
            className={
              !showBrands
                ? "filters-type-title-iconclose"
                : "filters-type-title-iconopen"
            }
            onClick={() => {
              if (showBrands) {
                setShowBrands(false);
              } else {
                setShowBrands(true);
              }
            }}
            size={30}
          />
          <p>Brands</p>
        </div>
        {showBrands && (
          <>
            <div className="filters-category-checkbox">
              {!isLoading &&
                data.paginatedItems.map((brand, index) => {
                  if (moreBrands === false && index >= 11) {
                    return <></>;
                  } else {
                    return (
                      <div className="filters-type-checkbox-input">
                        <input
                          checked={
                            !!brands.find((element) => element === brand.name)
                              ? "checked"
                              : ""
                          }
                          onChange={() => handleChangeBrands(brand.name)}
                          type="checkbox"
                          name={brand.name}
                        />
                        <label htmlFor={brand.name}>{brand.name}</label>
                      </div>
                    );
                  }
                })}
            </div>
            <div className="filters-category-showmore">
              {moreBrands === false && (
                <p onClick={() => setMoreBrands(true)}>Show More</p>
              )}
              {moreBrands === true && (
                <p onClick={() => setMoreBrands(false)}>Show Less</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
