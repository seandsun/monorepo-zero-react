import { useState } from "react";
import { ShowContext } from "./ShowContext";

export const ShowContextProvider = ({children}) => {

  const [show, setShow] = useState(false);

  return (
    <ShowContext value={{show, setShow}}>
      {children}
    </ShowContext>
  );
}