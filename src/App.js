import "./style.css";
import Note from "./components/Note";
import Header from "./components/Header";
import Content from "./components/Content";
function App() {
  return (
    <div className="container">
      <Header />
      <div style={{ display: "flex", gap: "4.8rem" }}>
        <Note />
        <Content />
      </div>
    </div>
  );
}

export default App;
