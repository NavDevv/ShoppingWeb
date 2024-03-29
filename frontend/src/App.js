import Logo from "./components/header/logo";
import Heading from "./components/header/heading";
import Search from "./components/header/searchbar";
import LangSelector from "./components/header/langselector";
import SignInPortal from "./components/header/signinportal";
import ShoppingCart from "./components/header/shoppingcart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Body/hero";
import PopularProducts from "./components/Body/Popular";
import Offers from "./components/Body/offers";
import NewsLetter from "./components/Body/newsLetter";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <MainHeader>
        <Logo></Logo>
        <Heading></Heading>
        <Search></Search>
        <LangSelector> </LangSelector>
        <SignInPortal />
        <ShoppingCart />
      </MainHeader>
      <MainBody>
        <Hero></Hero>
        <PopularProducts />
        <Offers />
        <NewsLetter />
      </MainBody>
      <MainFooter>
        <Footer />
      </MainFooter>
    </div>
  );
}

export default App;

function MainHeader({ children }) {
  return <nav className="header">{children}</nav>;
}

function MainBody({ children }) {
  return <nav className="mainbody">{children}</nav>;
}

function MainFooter({ children }) {
  return <nav className="footer">{children}</nav>;
}
