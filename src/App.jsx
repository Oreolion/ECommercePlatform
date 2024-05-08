import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Checkout from "./pages/Checkout.jsx";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NotFound from "./components/NotFound";
import { CartContextProvider } from "./components/CartContext.jsx";
import { UserContextProvider } from "./components/UserContext.jsx";
import { ProtectedRoute } from "./utils/ProtectedRoute.jsx";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";

function App() {
    const location = useLocation()
  return (
    <>
      <CartContextProvider>
        <UserContextProvider>
          <SwitchTransition component={null}>
            <CSSTransition key={location.pathname} classNames='fade' timeout={300} unmountOnExit>
              <Routes location={location}>
                <Route path="/" element={<Navbar />}>
                  <Route exact path="/" element={<Homepage />}></Route>
                  <Route path="/about" element={<AboutUs />}></Route>
                  <Route path="/shop" element={<Shop />}></Route>
                  <Route path="/cart" element={<Cart />}></Route>
                  <Route
                    path="/checkout"
                    element={
                      <ProtectedRoute>
                        <Checkout />
                      </ProtectedRoute>
                    }
                  ></Route>
                </Route>
                {/* <Route path="/signup" element={<SignUp />}></Route> */}
                <Route path="/login" element={<Login />}></Route>

                <Route path="*" element={<NotFound />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </CSSTransition>
          </SwitchTransition>
        </UserContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
