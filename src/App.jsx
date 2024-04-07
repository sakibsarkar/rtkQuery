import "./App.css";
import Products from "./components/Products/Products";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="w-scren h-screen flex items-start justify-start">
      <Sidebar />
      <div className="w-[calc(100%-270px)] h-full bg-[#2c3541] px-[20px] py-[50px] overflow-auto">
        <Products />
      </div>
    </div>
  );
}

export default App;
