import Header from "../components/Header";
// import MobileMenu from "components/MobileMenu";
import Spinner from "../components/Spinner";
import {
  // useState,
  createContext,
  Suspense,
  useContext,
  useEffect,
  useState,
  // useEffect,
} from "react";
import { Outlet } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "components/Sidebar";


const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export default function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [ isMenuOpen]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  }, [isSuccess]);

  return (
    <ModalContext.Provider
      value={{
        toggleMenu,
        closeMenu,
      }}
    >
      <div className="relative bg-light_brand_primary h-[100vh]">
        <Suspense fallback={<Spinner />}>
          <div className="flex h-screen bg-neutral_disabled overflow-hidden">
            <Sidebar
              isOpen={isSidebarOpen}
              toggle={() => setIsSidebarOpen(!isSidebarOpen)}
            />

            <div className="min-w-[80%] w-full">
              <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
              <main
                className="flex-1 w-full p-4 md:p-4 bg-white overflow-y-auto"
                style={{ height: "calc(100vh - 90px)" }}
              >
                <Outlet />
              </main>
            </div>
          </div>
        </Suspense>
      </div>
    </ModalContext.Provider>
  );
}
