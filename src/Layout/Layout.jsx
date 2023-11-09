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

  console.log(pathname);

  return (
    <div>
      <div className="h-screen overflow-y-scroll hide-scrollbar">
        <AuthProvider>
          <div className={`${isHomePage ? "" : "max-w-screen-xl"} mx-auto`}>
            <div className="max-w-screen-xl mx-auto">
              <Navbar />
            </div>
            <main>{children}</main>
          </div>
          {!isHomePage && <Footer />}
          {/* <Footer /> */}
        </AuthProvider>
      </div>
    </div>
  );
}
