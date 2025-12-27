import Header from "../components/Header";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { useFetchData } from "../hooks/useFetchData";

function Home() {
  // const { isLoading } = useFetchData();
  return (
    <div className="width">
      <Header />
      <Products />
    </div>
  );
}

export default Home;
