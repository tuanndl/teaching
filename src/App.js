import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card";

function App() {
  const arr = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ];

  const elmCard = () => {
    return arr.map((item, index) => {
      return <Card key={index} />;
    });
  };

  return (
    <div className={"container"}>
      <div className={"block"}>{elmCard()}</div>
    </div>
  );
}

export default App;
