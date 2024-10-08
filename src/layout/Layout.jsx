import Header from "./Header";
import Footer from "./Footer";
import AuthPage from "../pages/AuthPage";



function Layout({ children,setShowLoginPage,showLoginPage }) {

  return (
    <div>
      <Header setShowLoginPage={setShowLoginPage} />

      {children}
      {!!showLoginPage && <AuthPage setShowLoginPage={setShowLoginPage} />}
      <Footer />
    </div>
  );
}

export default Layout;
