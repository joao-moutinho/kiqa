import "./product_list.scss";
import { Filters } from "../../components/product_List/filters";
import { Products } from "../../components/product_List/products";
import { Sort } from "../../components/product_List/sort";
import {  useState } from "react";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import Axios from "axios";
import {
  useOutletContext,
} from "react-router-dom";
import { Loading } from "../../components/share_components/loading";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const createUrl = (params) => {
  const { pageParam = 1, sort, price, brands,categories ,subCategories } = params;
  return `https://kiqa-be.herokuapp.com/products?page=${pageParam}&size=10?${!!sort ? `&sort=${sort}` : ``}${!!brands ? `&brands=${brands}` : ``}${!!categories ? `&category=${categories}` : ``}${!!subCategories ? `&subCategory=${subCategories}` : ``}${!!price ? `&${price}` : ``}`;
};

export const ProductList = () => {

  const [searchParams, setSearchParams] = useState({});
  const { setHeaderState } = useOutletContext();
  

  const { data, isError,  isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["products", searchParams],
    ({ pageParam = 1 }) => {
      
      return Axios.get(createUrl({ pageParam, ...(searchParams ? searchParams : {})}),{withCredentials: true}).then((data) => {
        return data.data;
      });
    },
    {
      cacheTime:0,
      retry:1,
      getNextPageParam: (lastPage) => {
        if (lastPage.pageNumber === lastPage.totalNumberOfPages) return false;
        return lastPage.pageNumber + 1;
      },
    }
  );

  

  const productsfetch =
    data?.pages.reduce(
      (prevMovies, page) => prevMovies.concat(page.paginatedItems),
      []
    ) ?? [];

  return (
    <div data-testid="firstdiv">
    
      <InfiniteScroll
        data-testid="infinitescroll"
        dataLength={productsfetch.length}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Loading />}
        scrollThreshold={0.2}
      >
        <div className="productlist">
          <div className="productlist-top">
            <Sort
              searchParamsChange={(params) => {setSearchParams(params)}}
              setHeaderState={setHeaderState}
            />
          </div>
          <div className="productlist-center">
            <Filters  searchParamsChange={(params) => {setSearchParams(params)}} />
            <Products isLoading={isLoading} isError={isError} products={productsfetch} />
          </div>
        </div>
      </InfiniteScroll>

     { !isError && <div className="scroll-top">
        <BsFillArrowUpCircleFill
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-top-icon"
          size={30}
        />
        <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-top-text"
        >
          Scroll Top
        </p>
       </div>}
    </div>
  );
};
