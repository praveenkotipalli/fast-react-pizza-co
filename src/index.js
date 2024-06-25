import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <div className="header">
      <h1>Fast React Pizza. Co</h1>
    </div>
  );
}

function Pizza(props) {
  // const data = pizzaData.map((el) => el);
  // console.log(data);
  return (
    <li className={props.pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}
          {props.pizzaObj.soldOut ? "" : "💲"}
        </span>
      </div>
    </li>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {/* <Pizza
        name="Pizza Spinaci"
        photoName="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price="12"
      /> */}
      {numPizzas > 0 ? (
        <>
          <p>
            Aunthentic Italian cuisine. {numPizzas} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((el) => (
              <Pizza
                key={el.name}
                pizzaObj={el}
                // name={el.name}
                // photoName={el.photoName}
                // ingredients={el.ingredients}
                // price={el.price}
              />
            ))}
            ;
          </ul>
        </>
      ) : (
        <p>Wr're still working on our menu. Please come back later 🙂</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// {pizzaData.map((el) => (
//   <div className="pizza">
//     <img
//       className={el.soldOut ? "" : "sold-out"}
//       src={el.photoName}
//       alt={el.name}
//     />
//     <h3>{el.name}</h3>
//     <p>{el.ingredients}</p>
//     <span>{el.price}</span>
//   </div>
// ))}
// ;

function Footer() {
  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour = 12;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // hour >= openHour && hour <= closeHour
  //   ? alert("We're OPEN !")
  //   : alert("We're CLOSED");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you b/w {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online
      </p>
      <button className="btn">Order now</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
// export default index;
