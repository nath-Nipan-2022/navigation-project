import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import mesh from "./assets/mesh-gradient (1).png";

const App = () => {
  return (
    <div className="">
      <Sidebar />
      <main className=" ml-36 p-4">
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </main>

      <figure className="fixed inset-0 -z-10">
        <img src={mesh} alt="mesh" width={"100%"} />
      </figure>
    </div>
  );
};

export default App;
