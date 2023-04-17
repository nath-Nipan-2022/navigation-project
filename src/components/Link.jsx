import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e) => {
    //prevent default reloading
    e.preventDefault();

    navigate(to);
  };

  return (
    <a
      className={`m-2 py-2 px-4 font-medium border rounded-md cursor-pointer bg-violet-600 text-blue-50 transition hover:bg-violet-500`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default Link;
