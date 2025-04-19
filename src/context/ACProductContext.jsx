import React, { createContext, useContext, useState } from "react";

// Initial AC Remotes Data Object
const acData = [{
      "name": "Game",
      "shelfNumber": "1503",
      "image": "/acphoto/Game_1503.jpg"
},
{
      "name": "Lg 92",
      "shelfNumber": "1",
      "image": "/acphoto/Lg-92_1.jpg"
},
{
      "name": "Lg 15",
      "shelfNumber": "1",
      "image": "/acphoto/Lg-15_1.jpg"
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