import { useState } from "react";
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
    <div className="ButtonPage text-black flex p-10 items-center justify-between">
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
  );
}

export default ButtonPage;
