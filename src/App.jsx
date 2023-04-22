import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";

const App = () => {
  return (
    <div className="">
      <Sidebar />

      <Route path="/">
        <DropdownPage />
      </Route>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/buttons">
        <ButtonPage />
      </Route>
    </div>
  );
};

export default App;
