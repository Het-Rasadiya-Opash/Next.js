import ProductsList from "./ProductsList";

const Products = async ({ searchParams }) => {
  // Await the entire searchParams object once
  const params = await searchParams;

  const category = params.category || "all";
  const sort = params.sort || "default";
  const page = params.page || "1";

  return (
    <>
      <ProductsList />
      <div>
        showing {category} products, sorted by {sort}, page {page}
      </div>
    </>
  );
};

export default Products;
