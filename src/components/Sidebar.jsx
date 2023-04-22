import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/" }, // default page
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
  ];

  const renderLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="p-2 px-3 hover:bg-slate-200 hover:text-blue-600"
        activeClassName={" font-bold text-blue-600 border-l-2 border-blue-600"}
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="flex flex-col sticky top-0 left-0 w-36 p-2 bg-slate-100">
      {renderLinks}
    </div>
  );
};

export default Sidebar;
