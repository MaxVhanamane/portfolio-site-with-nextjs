import React from "react";
// import NoteContext from "./NoteContext"
import { createContext, useState } from "react";

// creating context object and exporting it.
export const AlertContext = createContext();

function AlertState(props) {
  const [alert, setAlert] = useState({
    severity: "",
    show: false,
    message: "",
  });

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {/* Provider will give access to all the above states and functions to the components which are in props.children */}
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertState;
