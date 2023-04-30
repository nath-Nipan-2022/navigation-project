import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/" }, // default page
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];

  const renderLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="p-2 px-3 border-l-2 border-gray-200 hover:text-blue-500 hover:border-blue-600"
        activeClassName={"font-bold  text-blue-500 border-blue-900"}
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="flex flex-col fixed top-4 left-0 w-36 p-2">
      {renderLinks}
    </div>
  );
};

export default Sidebar;
