import { useState } from "react";

const loggedInUser = () => {
  return true;
};
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alto="logo"
      src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [title, setTitle] = useState("Food Villa");

  return (
    <div className="header">
      <Title />

      {/* <h1>{title}</h1>
      <button onClick={() => setTitle("New Food App")}>Change tittle</button> */}

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
