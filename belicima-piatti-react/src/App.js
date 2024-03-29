import Card from "./Card";
import Nav from "./components/Nav/Nav";
import Step from "./Step";
import StarRating from "./components/Star-Rating/StarRating";
import ShoppingList from "./components/Shopping-List/Shopping-List";

const ShoppingListExample = [
  {
    product: "Курка",
    price: 105.0,
    calories: 220,
  },
  {
    product: "Овочі",
    price: 80.0,
    calories: 230,
  },
  {
    product: "Спеції",
    price: 15.0,
    calories: 240,
  },
  {
    product: "Соус",
    price: 75.0,
    calories: 250,
  },
];
export default function App() {
  return (
    <div>
      <Nav />
      {/* <StarRating rating={4.1} />
      <StarRating rating={10} />
      <ShoppingList ShoppingList={ShoppingListExample} />
      <Step
        number={1}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />
      <Step
        number={1}
        description={
          "Lorem  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />
      <Step
        number={1}
        description={
          "Lorem Ipsum is PageMaker including versions of Lorem Ipsum."
        }
      /> */}
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
