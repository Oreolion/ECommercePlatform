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
import { useState } from "react";
import { useEffect } from "react";
import Loader from "./components/Loader.jsx";
import { PiArrowFatLinesUpFill } from "react-icons/pi";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [showComponent, setShowComponent] = useState(false);
    const [hideButton, setHideButton] = useState(true);
    useEffect(() => {
      // Simulate an 3-second delay
      const delay = 3000;
  
      const preloaderTimeout = setTimeout(() => {
        setIsLoading(false);
        setShowComponent(true);
      }, delay);
  
      // Clear the timeout to prevent memory leaks
      return () => clearTimeout(preloaderTimeout);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
      };
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY === 0) {
            setHideButton(true);
          } else {
            setHideButton(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  const location = useLocation();
  return (
    <>
      <CartContextProvider>
        <UserContextProvider>
          <Navbar />
          <SwitchTransition component={null}>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={300}
              unmountOnExit
            >
              <Routes location={location}>
                {/* <Route path="/" element={<Navbar />}>
                 
                </Route> */}
                <Route exact path="/" element={ isLoading ? (
                <Loader />
              ) : (
                <>
                {showComponent && <Homepage /> }
                  
                </>
              )}></Route>
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
                {/* <Route path="/signup" element={<SignUp />}></Route> */}
                <Route path="/login" element={<Login />}></Route>

                <Route path="*" element={<NotFound />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </CSSTransition>
          </SwitchTransition>
        </UserContextProvider>
      </CartContextProvider>
      <PiArrowFatLinesUpFill
        style={{ display: hideButton ? "none" : "block" }}
        className="up-arrow animate__animated animate__backInRight"
        onClick={scrollToTop}
      />
    </>
  );
}

export default App;
