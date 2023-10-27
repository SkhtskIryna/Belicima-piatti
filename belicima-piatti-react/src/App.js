import Card from "./Card";
import Nav from "./Nav";
const dishes = [
  {
    id: 1,
    name: "Курячий суп",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.fbt_aIZezSujWx3OZv6MgQHaD4%26pid%3DApi&f=1&ipt=8c3460a20c8bba332634f66e2824b0b25fa680ef84aac2e5ba352fd65a2ee9b1&ipo=images",
    score: 4,
    duration: 45,
    price: 4.99,
    calories: 250,
  },
  {
    id: 2,
    name: "Борщ",
    img: "https://images.unian.net/photos/2020_10/1602057485-3102.jpg?0.602735502001281",
    score: 3,
    duration: 60,
    price: 5.99,
    calories: 300,
  },
  {
    id: 3,
    name: 'Салат "Цезар"',
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FbcUhbn4FzzdHw_5bBl9JgHaE8%26pid%3DApi&f=1&ipt=6bb79e99cd7c42dda4b6ae602224aad6bb5bd63aa313e4ea062cb4ad770871b0&ipo=images",
    score: 4,
    duration: 20,
    price: 8.99,
    calories: 350,
  },
  {
    id: 4,
    name: "Паста з томатним соусом",
    img: "http://pastapaolo.com.ua/ru/wp-content/uploads/2012/04/iStock_000016229216Medium.jpg",
    score: 4,
    duration: 30,
    price: 6.49,
    calories: 400,
  },
  {
    id: 5,
    name: "Стейк з яловичини",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eYUP_O3SDs73rtjztpQxQwHaE2%26pid%3DApi&f=1&ipt=8bdcad40266233ddfd1073c6ac424ac79857feba8cb54049695d39866a603d70&ipo=images",
    score: 4,
    duration: 15,
    price: 12.99,
    calories: 600,
  },
  {
    id: 6,
    name: "Риба з картоплею",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cT2tNaX_eVogfJ6586PAwgHaE8%26pid%3DApi&f=1&ipt=cdfaaa5685dd487ca95b3589b4dccdce0c3f17197025ab5a9a06c7bc0795ba87&ipo=images",
    score: 3,
    duration: 40,
    price: 9.99,
    calories: 450,
  },
  {
    id: 7,
    name: "Суп гарбузовий",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ksPcmK2q0cFIlU1zuoJsKQHaEX%26pid%3DApi&f=1&ipt=8bce9a14e818d803e248344fbf6fadbd77d62ed15f72e9ac330727aaa3a12e67&ipo=images",
    score: 4,
    duration: 25,
    price: 4.99,
    calories: 200,
  },
  {
    id: 8,
    name: 'Піца "Маргарита"',
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.c_UJVxleQvrmXjD4nMMTTQHaE7%26pid%3DApi&f=1&ipt=94c35cd6653c44ff1b8917161cd0a9b88dd50e2420e6ec4ad8b5ad9f34d66e78&ipo=images",
    score: 5,
    duration: 35,
    price: 10.99,
    calories: 800,
  },
  {
    id: 9,
    name: 'Салат "Грецький"',
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdekoking.com%2Fwp-content%2Fuploads%2F2017%2F11%2Fgriechischer-salat-selber-zubereiten.jpg&f=1&nofb=1&ipt=a04391059249386da8780b53bd172da8e2a2d698c2e08f9b7ae2478acd64506a&ipo=images",
    score: 4,
    duration: 15,
    price: 7.49,
    calories: 250,
  },
  {
    id: 10,
    name: "Паста з креветками",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fe77yWTlngTI%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=7b6d9442fe21c0ca38a061859a2b0daeeea60c600b62c1cb2fd924109f37f3f2&ipo=images",
    score: 4,
    duration: 25,
    price: 11.49,
    calories: 500,
  },
];

export default function App() {
  return (
    <div>
      <Nav />
      {dishes.map((dish) => (
        <Card
          key={dish.id}
          id={dish.id}
          name={dish.name}
          img={dish.img}
          score={dish.score}
          duration={dish.duration}
          price={dish.price}
          calories={dish.calories}
        />
      ))}
    </div>
  );
}
