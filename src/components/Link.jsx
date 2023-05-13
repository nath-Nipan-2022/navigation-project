import useNavigation from "../hooks/useNavigation";
import classNames from "classnames";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      // open page on new tab
      return;
    }
    //prevent default reloading
    e.preventDefault();
    navigate(to);
  };

  const classes = classNames(
    "transition font-medium",
    className,
    // styling active link
    currentPath === to && activeClassName
  );
  return (
    <a href={to} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
