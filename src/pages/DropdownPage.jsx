import { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const [selectedOption, setSelected] = useState("");

  let options = [
    { label: "Go home", value: "home" },
    { label: "Go to the About", value: "about" },
    { label: "Go to the Settings", value: "settings" },
  ];

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <div>
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onChange={handleSelect}
      />
    </div>
  );
};

export default DropdownPage;
