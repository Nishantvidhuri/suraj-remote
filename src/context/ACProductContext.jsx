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
},
{
      "name": "Voltas Onida 10",
      "shelfNumber": "3",
      "image": "/acphoto/Voltas-Onida-10_3.jpg"
},
{
      "name": "Voltas 109",
      "shelfNumber": "3",
      "image": "/acphoto/Voltas-109_3.jpg"
},
{
      "name": "Voltas 159",
      "shelfNumber": "4",
      "image": "/acphoto/Voltas-159_4.jpg"
},
{
      "name": "Voltas 85",
      "shelfNumber": "4",
      "image": "/acphoto/Voltas-85_4.jpg"
},
{
      "name": "Voltas 7",
      "shelfNumber": "4",
      "image": "/acphoto/Voltas-7_4.jpg"
},
{
      "name": "Voltas 67",
      "shelfNumber": "4",
      "image": "/acphoto/Voltas-67_4.jpg"
},
{
      "name": "Voltas 51",
      "shelfNumber": "4",
      "image": "/acphoto/Voltas-51_4.jpg"
},
{
      "name": "Voltas 08",
      "shelfNumber": "4",
      "image": "/acphoto/Voltas-08_4.jpg"
},
{
      "name": "O general 81",
      "shelfNumber": "5",
      "image": "/acphoto/O-general-81_5.jpg"
},
{
      "name": "O general 01",
      "shelfNumber": "5",
      "image": "/acphoto/O-general-01_5.jpg"
},
{
      "name": "Hitachi 21",
      "shelfNumber": "6",
      "image": "/acphoto/Hitachi-21_6.jpg"
},
{
      "name": "Hitachi 157",
      "shelfNumber": "6",
      "image": "/acphoto/Hitachi-157_6.jpg"
},
{
      "name": "Hitachi 20",
      "shelfNumber": "6",
      "image": "/acphoto/Hitachi-20_6.jpg"
},
{
      "name": "Hitachi 208",
      "shelfNumber": "7",
      "image": "/acphoto/Hitachi-208_7.jpg"
},
{
      "name": "Bluestar 171",
      "shelfNumber": "8",
      "image": "/acphoto/Bluestar-171_8.jpg"
},
{
      "name": "Carrier 170",
      "shelfNumber": "9",
      "image": "/acphoto/Carrier-170_9.jpg"
},
{
      "name": "Carrier 100",
      "shelfNumber": "9",
      "image": "/acphoto/Carrier-100_9.jpg"
},
{
      "name": "Voltas 5",
      "shelfNumber": "9",
      "image": "/acphoto/Voltas-5_9.jpg"
},
{
      "name": "Carrier voltas 45",
      "shelfNumber": "10",
      "image": "/acphoto/Carrier-voltas-45_10.jpg"
},
{
      "name": "Carrier 168",
      "shelfNumber": "10",
      "image": "/acphoto/Carrier-168_10.jpg"
},
{
      "name": "Carrier 186",
      "shelfNumber": "11",
      "image": "/acphoto/Carrier-186_11.jpg"
},
{
      "name": "Carrier 37",
      "shelfNumber": "11",
      "image": "/acphoto/Carrier-37_11.jpg"
},
{
      "name": "Carrier 49",
      "shelfNumber": "11",
      "image": "/acphoto/Carrier-49_11.jpg"
},
{
      "name": "Ifb 233",
      "shelfNumber": "12",
      "image": "/acphoto/Ifb-233_12.jpg"
},
{
      "name": "Lloyd 201",
      "shelfNumber": "13",
      "image": "/acphoto/Lloyd-201_13.jpg"
},
{
      "name": "Lloyd 200",
      "shelfNumber": "13",
      "image": "/acphoto/Lloyd-200_13.jpg"
},
{
      "name": "Onida 64",
      "shelfNumber": "14",
      "image": "/acphoto/Onida-64_14.jpg"
},
{
      "name": "Lloyd 79",
      "shelfNumber": "14",
      "image": "/acphoto/Lloyd-79_14.jpg"
},
{
      "name": "Bluestar 66",
      "shelfNumber": "15",
      "image": "/acphoto/Bluestar-66_15.jpg"
},
{
      "name": "Bluestar 30",
      "shelfNumber": "15",
      "image": "/acphoto/Bluestar-30_15.jpg"
},
{
      "name": "Bluestar 191",
      "shelfNumber": "15",
      "image": "/acphoto/Bluestar-191_15.jpg"
},
{
      "name": "Bluestar 32",
      "shelfNumber": "16",
      "image": "/acphoto/Bluestar-32_16.jpg"
},
{
      "name": "Bluestar 183",
      "shelfNumber": "16",
      "image": "/acphoto/Bluestar-183_16.jpg"
},
{
      "name": "Videocon tcl 83",
      "shelfNumber": "17",
      "image": "/acphoto/Videocon-tcl-83_17.jpg"
},
{
      "name": "Godrej",
      "shelfNumber": "17",
      "image": "/acphoto/Godrej_17.jpg"
},
{
      "name": "Samsung 89",
      "shelfNumber": "18",
      "image": "/acphoto/Samsung-89_18.jpg"
},
{
      "name": "Samsung 38",
      "shelfNumber": "18",
      "image": "/acphoto/Samsung-38_18.jpg"
},
{
      "name": "Daikin 78",
      "shelfNumber": "19",
      "image": "/acphoto/Daikin-78_19.jpg"
},
{
      "name": "Samsung 16",
      "shelfNumber": "19",
      "image": "/acphoto/Samsung-16_19.jpg"
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