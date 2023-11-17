const products = [
  {
    id: 0,
    title: "Affogato",
    price: 195,
  },
  {
    id: 1,
    title: "Espresso",
    price: 50,
  },
  {
    id: 2,
    title: "Mocha",
    price: 180,
  },
  {
    id: 3,
    title: "Flat White",
    price: 170,
  },
  {
    id: 4,
    title: "Cappuccino",
    price: 205,
  },
  {
    id: 5,
    title: "Palazzo",
    price: 145,
  },
  {
    id: 6,
    title: "Cortado",
    price: 210,
  },
  {
    id: 7,
    title: "Ristretto",
    price: 195,
  },
  {
    id: 8,
    title: "Americano",
    price: 170,
  },
];

let cart = [];

function addToCart(id) {
  cart.push({ ...products[id] });
  console.log(cart);
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}
let finalTotal = 0;
function displaycart() {
  let total = 0;
  let j = 0;
  if (cart.length == 0) {
    document.getElementById("totalPrice").innerHTML = "PHP " + 0 + ".00";
    document.getElementById(
      "orders"
    ).innerHTML = `<div style="text-align: center"><p>"Your cart is empty"</p></div>`;
  } else {
    document.getElementById("orders").innerHTML = cart
      .map((items) => {
        let { title, price } = items;
        total = total + price;
        finalTotal = total;
        document.getElementById("totalPrice").innerHTML =
          "PHP " + total + ".00";
        return (
          `<div class='orders-container'>
                  <p style='font-size: 1rem;'>${title}</p>
                  <h2 style='font-size: 1rem;'>PHP ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
let receipt = "";
function displayReceipt() {
  if (cart.length === 0) {
    alert(
      "There's no orders in your cart. Please add a product first before placing your order."
    );
  } else {
    cart.map((items) => {
      let { title } = items;
      receipt += `${title} \n`;
    });
    alert(`ORDER RECEIPT: \n${receipt} \n TOTAL: PHP ${finalTotal}`);
    document.getElementById(
      "orders"
    ).innerHTML = `<div style="text-align: center"><p>"Your cart is empty"</p></div>`;
    cart = [];
    displaycart();
    receipt = "";
    finalTotal = 0;
  }
}
