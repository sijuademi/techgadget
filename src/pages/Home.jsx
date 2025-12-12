import Header from "../components/Header";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import useFetchProducts from "../hooks/useFetchProducts";

function Home() {
  const { isLoading } = useFetchProducts();
  return (
    <div>
      <Header />
      {isLoading ? <Loader /> : <Products />}
      {/* <Products /> */}
    </div>
  );
}

export default Home;
