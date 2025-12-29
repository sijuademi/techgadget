import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
// import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";

import ProtectedRoute from "./pages/ProtectedRoute";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import AppProviders from "./context/AppProviders";
const Home = lazy(() => import("./pages/Home"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppProviders>
        <BrowserRouter>
          <Navbar />
          <main>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="product/:id" element={<ProductDetails />} />
                <Route
                  path="cart"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
                <Route path="login" element={<LoginPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </BrowserRouter>
      </AppProviders>
    </div>
  );
}

export default App;
