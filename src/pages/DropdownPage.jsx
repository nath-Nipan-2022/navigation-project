import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const [selectedOption, setSelected] = useState("");

  let options = [
    { label: "Watch the Accordion page", path: "/accordion" },
    { label: "Go to the Button page", path:"/buttons" },
    { label: "Head to the Table page", path: "/table" },
  ];

  const handleSelect = (item) => {
    setSelected(item);
    console.log(selectedOption);
  };

  return (
		<div className="mt-4 grid place-items-center gap-4">
			<h2 className="text-lg text-slate-600 p-4 font-semibold ">
				Dropdown Page
      </h2>
      <div>

			<Dropdown
				options={options}
				selectedOption={selectedOption}
				onChange={handleSelect}
        />
        </div>
		</div>
	);
};

export default DropdownPage;
