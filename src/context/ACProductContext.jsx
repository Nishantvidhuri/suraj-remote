import React, { createContext, useContext, useState } from "react";

// Initial AC Remotes Data Object
const acData = [{
      "name": "voltas final",
      "shelfNumber": "135",
      "image": "/acphoto/voltas-final_135.jpg"
}];

const ACProductContext = createContext();

export const useACProductContext = () => useContext(ACProductContext);

export const ACProductProvider = ({ children }) => {
  const [acProducts, setACProducts] = useState(acData);

  return (
    <ACProductContext.Provider value={{ acProducts, setACProducts }}>
      {children}
    </ACProductContext.Provider>
  );
}; 