import Navbar from "../Component/Navbar/Navbar";
import AuthProvider from "../Component/Context/AuthProvider";
import Footer from "../Component/Footer/Footer";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  const isHomePage =
    pathname === "/" ||
    pathname === "/home" ||
    pathname === "/category/:slug" ||
    pathname.includes("/category");

  return (
    <div>
      <div className="h-screen overflow-y-scroll hide-scrollbar">
        <AuthProvider>
          <div className="max-w-screen-xl mx-auto">
            <Navbar />
            <main>{children}</main>
          </div>
          {!isHomePage && <Footer />}
        </AuthProvider>
      </div>
    </div>
  );
}
