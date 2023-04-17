import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

const App = () => {
  return (
    <div className="m-4 p-4">
      <Link to="/accordion">Go to Accordion</Link>
      <Link to="/dropdown">Go to Dropdown</Link>

      <Route path="/accordion">
        <AccordionPage />
      </Route>

      <Route path="/dropdown">
        <DropdownPage />
      </Route>
    </div>
  );
};

export default App;
