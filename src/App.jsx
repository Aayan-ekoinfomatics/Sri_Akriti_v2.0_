import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "./components/pages/LandingPage";
import Navbar from "./components/global components/Navbar";
import Footer from "./components/global components/Footer";
import AllCollections from "./components/pages/AllCollections";
import Sidebar from "./components/global components/Sidebar";
import { useRecoilState } from "recoil";
import SidebarAtom from "./recoil/atoms/sidebar/SidebarAtom";
import mobile_menu from "../src/assets/icons/menu-mobile.svg";
import cross from "../src/assets/icons/cross.svg";
import Productpage from "./components/pages/Productpage";
import AboutUs from "./components/pages/AboutUs";
import SingleCategoryProducts from "./components/pages/SingleCategoryProducts";
import CategoryPage from "./components/pages/CategoryPage";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
// import Account from "./components/pages/Account";
import MyAccount from "./components/pages/MyAccount";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import AddressAdd from "./components/pages/AddressAdd";
import Wishlist from "./components/pages/Wishlist";
import OrderList from "./components/pages/OrderList";
import FAQPage from "./components/pages/FAQPage";
import ContactUs from "./components/pages/ContactUs";
import OrderDetails from "./components/pages/OrderDetails";
import ProtectedRoute from "./helpers/ProtectedRoute";
import Products from "./components/products-subcomponents/Products";
import collection_data from "./mockapi/apiData";
import EditAddress from "./components/pages/EditAdress";
import ProtectedRouteAdmin from "./helpers/ProtectedRouteAdmin";
import ProductsInventoryPage from "./components/admin-components/ProductsInventoryPage";
import OrdersInventoryPage from "./components/admin-components/OrdersInventoryPage";
import AddNewProductInventoryPage from "./components/admin-components/AddNewProductInventoryPage";
import AdminEditSingleProduct from "./components/admin-components/AdminEditSingleProduct";
import PageBackButton from "./components/global components/PageBackButton";
import AdminEditSingleOrderPage from "./components/admin-components/AdminEditSingleOrderPage";
import { ToastContainer } from "react-toastify";
import AdminAddNewOrder from "./components/admin-components/AdminAddNewOrder";
import RingSizeGuide from "./components/pages/RingSizeGuide";
import DeliveryPolicy from "./components/pages/DeliveryPolicy";
import ReturnPolicy from "./components/pages/ReturnPolicy";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import RefundPolicy from "./components/pages/RefundPolicy";
import AdminPricesPage from "./components/admin-components/AdminPricesPage";

function App() {
  const [navToggle, setNavToggle] = useRecoilState(SidebarAtom);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(location)
  }, [location]);

  return (
    <div className="relative">
      {/* overlay  */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000071] z-[1000] transition-all duration-500 ${navToggle ? "block" : "hidden"
          }`}
        onClick={() => setNavToggle(false)}
      ></div>

      <div className={`${localStorage.getItem("user_type") === 'admin' ? 'hidden' : 'block'}`}>
        <Sidebar />
      </div>

      {/* mobile navbar open button */}
      <div className={`md:hidden fixed top-[42px] right-[25px] z-[1003] cursor-pointer ${localStorage.getItem("user_type") === 'admin' ? 'hidden' : 'block'}`}>
        <img
          src={!navToggle ? mobile_menu : cross} 
          className="w-[27px] z-[9990] "
          onClick={() => setNavToggle(!navToggle)}
        />
      </div>

      {/* admin sidebar mobile */}
      {/* <div className={`md:hidden fixed top-[42px] right-[25px] z-[1003] cursor-pointer`}>
        <img
          src={!navToggle ? mobile_menu : cross}
          className="w-[27px] z-[9990] "
          onClick={() => setNavToggle(!navToggle)}
        />
      </div> */}
      
      {/* navbar */}
      <div className={`sticky top-0 left-0 right-0 bg-white pt-3 md:pt-8 z-[999] shadow-md w-full ${localStorage.getItem("user_type") === 'admin' ? 'hidden' : 'block'}`}>
        <Navbar />
      </div>

      <div>
        <Routes>
          <Route path='*' element={<Navigate to={localStorage.getItem("status") === 'true' ? '/' : '/login'} replace={true} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/product-details/:product_id" element={<Productpage />} />
          <Route path="/single-category/:category_id" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/ring-size-guide" element={<RingSizeGuide />} />
          <Route path="/delivery-policy" element={<DeliveryPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/terms_&_conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<ProtectedRouteAdmin />} >
            <Route path="/admin-products" element={<ProductsInventoryPage />} />
            <Route path="/admin-add-product" element={<AddNewProductInventoryPage />} />
            <Route path="/admin-products/:product_id" element={<AdminEditSingleProduct />} />

            <Route path="/admin-orders" element={<OrdersInventoryPage />} />
            <Route path="/admin-add-order" element={<AdminAddNewOrder />} />
            <Route path="/admin-orders/:order_id" element={<AdminEditSingleOrderPage />} />

            <Route path="/admin-prices" element={<AdminPricesPage />} />
          </Route>

          <Route path="/test-page" name='Products' apiData={collection_data} element={<Products />} />

          <Route element={<ProtectedRoute />}>
            {/* <Route path="/" element /> */}
            <Route path="*" element={<Navigate replace to='/' />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/add-address" element={<AddressAdd />} />
            <Route path="/edit-address/:id" element={<EditAddress />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/order-details/:order_id" element={<OrderDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>

          {/* <Route element={<ProtectedRouteAdmin />}>
            <Route  />
          </Route> */}

        </Routes>
      </div>
      <div className={`${localStorage.getItem("user_type") === 'admin' ? 'hidden' : 'block'}`}>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
