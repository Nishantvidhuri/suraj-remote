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
},
{
      "name": "Ac 14",
      "shelfNumber": "1",
      "image": "/acphoto/Ac-14_1.jpg"
},
{
      "name": "Ac 13",
      "shelfNumber": "1",
      "image": "/acphoto/Ac-13_1.jpg"
},
{
      "name": "Lg 36j",
      "shelfNumber": "1",
      "image": "/acphoto/Lg-36j_1.jpg"
},
{
      "name": "Lg 184",
      "shelfNumber": "2",
      "image": "/acphoto/Lg-184_2.jpg"
},
{
      "name": "Lg 103",
      "shelfNumber": "2",
      "image": "/acphoto/Lg-103_2.jpg"
},
{
      "name": "Lg 107",
      "shelfNumber": "2",
      "image": "/acphoto/Lg-107_2.jpg"
},
{
      "name": "Voltas 9",
      "shelfNumber": "3",
      "image": "/acphoto/Voltas-9_3.jpg"
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