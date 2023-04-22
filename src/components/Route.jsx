import useNavigation from "../hooks/useNavigation";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  } else {
    return "";
  }
};

export default Route;
