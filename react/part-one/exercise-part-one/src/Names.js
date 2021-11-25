import { useState } from "react";
import ClickedNames from "./ClickedNames";

const firstNames = ["David", "Peter", "Max"];

const Names = () => {
  const [fnames, setNames] = useState([]);

  const click = (name) => {
    console.log(name);
    setNames([...fnames, name]);
  };

  return (
    <div>
      <ul>
        {firstNames
          .filter((name) => !fnames.includes(name))
          .map((name) => (
            <li onClick={() => click(name)} key={name}>
              {name}
            </li>
          ))}
      </ul>
      <ClickedNames names={fnames} />
    </div>
  );
};

export default Names;
