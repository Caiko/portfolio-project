// "use client";
// import { createContext, useContext, useState } from "react";

// const AppContext = createContext();

// function TextAreaProvider({ children }) {
//   const [title, setTitle] = useState();
//   const [textArea, setTextArea] = useState();

//   const value = { title, setTitle, textArea, setTextArea };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// }

// export const AppProvider = ({ children }) => {
//   return <TextAreaProvider>{children}</TextAreaProvider>;
// };
