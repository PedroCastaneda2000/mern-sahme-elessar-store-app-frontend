import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageProductPage from "./pages/ManageProductPage";
import SearchPage from "./pages/SearchPage";
import GalleryPage from "./pages/GalleryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ScrollToTop from "./components/ScrollToTop";
import OrderStatusPage from "./pages/OrderStatusPage";
import AdminProtectedRoute from "./auth/AdminProtectedRoute";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout showHero>
              <HomePage />
            </Layout>
          }
        />

        <Route path="/auth-callback" element={<AuthCallbackPage />} />

        <Route
          path="/search/:category"
          element={
            <Layout showHero={false}>
              <SearchPage />
            </Layout>
          }
        />

        <Route
          path="/manage-cart"
          element={
            <Layout showHero={false}>
              <CartPage />
            </Layout>
          }
        />

        <Route
          path="/products"
          element={
            <Layout showHero={false}>
              <GalleryPage />
            </Layout>
          }
        />

        <Route
          path="/details/:productId"
          element={
            <Layout showHero={false}>
              <ProductPage />
            </Layout>
          }
        />

        <Route element={<ProtectedRoute />}>
          <Route
            path="/order-status"
            element={
              <Layout>
                <OrderStatusPage />
              </Layout>
            }
          />
          <Route
            path="/user-profile"
            element={
              <Layout>
                <UserProfilePage />
              </Layout>
            }
          />
        </Route>

        <Route element={<AdminProtectedRoute />}>
          <Route
            path="/manage-product"
            element={
              <Layout>
                <ManageProductPage />
              </Layout>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
