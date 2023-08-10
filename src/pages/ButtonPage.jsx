import React, { useState } from "react";
import {
  MdArrowOutward,
  MdBookmark,
  MdRemoveCircle,
  MdDeleteOutline,
  MdSave,
} from "react-icons/md";
import Button from "../components/Button";

function ButtonPage() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
    console.log(count);
  };

  return (
    <>
      <h2 className="text-lg text-slate-600 p-4 font-semibold ">
					Button Page
				</h2>
    <div className="ButtonPage text-black flex flex-wrap p-4 py-10 items-center gap-4">
      <Button primary rounded onMouseOver={handleClick}>
        <MdBookmark />
        Click Me!
      </Button>
      <Button secondary outline onMouseLeave={handleClick}>
        <MdArrowOutward />
        Buy Now!
      </Button>
      <Button warning rounded outline onClick={handleClick}>
        <MdRemoveCircle />
        Remove
      </Button>
      <Button success outline>
        <MdSave />
        Save
      </Button>
      <Button danger rounded>
        <MdDeleteOutline />
        Delete
      </Button>
      </div>
      </>
  );
}

export default ButtonPage;
