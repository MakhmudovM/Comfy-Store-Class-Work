
import { Filters, PaginationContainer, ProductsContainer } from "../components"
import { customFetch } from "../utils";

const url = "/products";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ]);
  const response = await customFetch(url , {params});
  const products = response.data.data;
  const meta = response.data.meta;
  return { products , meta , }
};


function Products() {
  return (
    <div className="align-content mt-14">
      {/* FILTER*/}
      <Filters/>

      {/* ProductsContainer*/}
      <ProductsContainer/>
      
      {/* PaginationContainer*/}
      <PaginationContainer/>

    </div>
  )
}

export default Products