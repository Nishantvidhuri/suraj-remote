import React, { createContext, useContext, useState } from "react";

// Initial AC Remotes Data Object
const acData = [
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
},
{
      "name": "Samsung 39",
      "shelfNumber": "19",
      "image": "/acphoto/Samsung-39_19.jpg"
},
{
      "name": "Azure 48",
      "shelfNumber": "19",
      "image": "/acphoto/Azure-48_19.jpg"
},
{
      "name": "Bluestar onida 65",
      "shelfNumber": "20",
      "image": "/acphoto/Bluestar-onida-65_20.jpg"
},
{
      "name": "Daikin 296",
      "shelfNumber": "20",
      "image": "/acphoto/Daikin-296_20.jpg"
}
,
{
      "name": "Samsung 144",
      "shelfNumber": "20",
      "image": "/acphoto/Samsung-144_20.jpg"
},
{
      "name": "Ketvinator",
      "shelfNumber": "20",
      "image": "/acphoto/Ketvinator_20.jpg"
},
{
      "name": "Voltas 04",
      "shelfNumber": "21",
      "image": "/acphoto/Voltas-04_21.jpg"
},
{
      "name": "Bluestar voltas 61",
      "shelfNumber": "21",
      "image": "/acphoto/Bluestar-voltas-61_21.jpg"
},
{
      "name": "O general 95",
      "shelfNumber": "22",
      "image": "/acphoto/O-general-95_22.jpg"
},
{
      "name": "O general 03",
      "shelfNumber": "22",
      "image": "/acphoto/O-general-03_22.jpg"
},
{
      "name": "Ifb 110",
      "shelfNumber": "23",
      "image": "/acphoto/Ifb-110_23.jpg"
},
{
      "name": "Godrej 221",
      "shelfNumber": "23",
      "image": "/acphoto/Godrej-221_23.jpg"
},
{
      "name": "Whirlpool 25",
      "shelfNumber": "24",
      "image": "/acphoto/Whirlpool-25_24.jpg"
},
{
      "name": "Whirlpool 175",
      "shelfNumber": "25",
      "image": "/acphoto/Whirlpool-175_25.jpg"
},
{
      "name": "Whirlpool 287",
      "shelfNumber": "25",
      "image": "/acphoto/Whirlpool-287_25.jpg"
},
{
      "name": "Whirlpool 24",
      "shelfNumber": "26",
      "image": "/acphoto/Whirlpool-24_26.jpg"
},
{
      "name": "Whirlpool 73",
      "shelfNumber": "26",
      "image": "/acphoto/Whirlpool-73_26.jpg"
},
{
      "name": "Whirlpool 108",
      "shelfNumber": "26",
      "image": "/acphoto/Whirlpool-108_26.jpg"
},
{
      "name": "Whirlpool 102",
      "shelfNumber": "27",
      "image": "/acphoto/Whirlpool-102_27.jpg"
},
{
      "name": "Whirlpool 218",
      "shelfNumber": "27",
      "image": "/acphoto/Whirlpool-218_27.jpg"
},
{
      "name": "Mitsubishi 136",
      "shelfNumber": "28",
      "image": "/acphoto/Mitsubishi-136_28.jpg"
},
{
      "name": "Haier 50",
      "shelfNumber": "28",
      "image": "/acphoto/Haier-50_28.jpg"
},
{
      "name": "Haier 176",
      "shelfNumber": "29",
      "image": "/acphoto/Haier-176_29.jpg"
},
{
      "name": "Haier 88",
      "shelfNumber": "29",
      "image": "/acphoto/Haier-88_29.jpg"
},
{
      "name": "Videocon 156",
      "shelfNumber": "30",
      "image": "/acphoto/Videocon-156_30.jpg"
},
{
      "name": "Ac 31 godrej",
      "shelfNumber": "30",
      "image": "/acphoto/Ac-31-godrej_30.jpg"
},
{
      "name": "Azure 166",
      "shelfNumber": "31",
      "image": "/acphoto/Azure-166_31.jpg"
},
{
      "name": "Daikin 212",
      "shelfNumber": "31",
      "image": "/acphoto/Daikin-212_31.jpg"
},
{
      "name": "Hitachi 202",
      "shelfNumber": "32",
      "image": "/acphoto/Hitachi-202_32.jpg"
},
{
      "name": "Nepolean 75",
      "shelfNumber": "32",
      "image": "/acphoto/Nepolean-75_32.jpg"
},
{
      "name": "Godrej 227",
      "shelfNumber": "32",
      "image": "/acphoto/Godrej-227_32.jpg"
},
{
      "name": "Voltas onida 11",
      "shelfNumber": "33",
      "image": "/acphoto/Voltas-onida-11_33.jpg"
},
{
      "name": "Mitsubishi 115",
      "shelfNumber": "33",
      "image": "/acphoto/Mitsubishi-115_33.jpg"
},
{
      "name": "Onida 42",
      "shelfNumber": "34",
      "image": "/acphoto/Onida-42_34.jpg"
},
{
      "name": "Tcl 33",
      "shelfNumber": "34",
      "image": "/acphoto/Tcl-33_34.jpg"
},
{
      "name": "Voltas 132",
      "shelfNumber": "34",
      "image": "/acphoto/Voltas-132_34.jpg"
},
{
      "name": "Voltas 178",
      "shelfNumber": "35",
      "image": "/acphoto/Voltas-178_35.jpg"
},
{
      "name": "Panasonic 138",
      "shelfNumber": "36",
      "image": "/acphoto/Panasonic-138_36.jpg"
},
{
      "name": "Panasonic 58",
      "shelfNumber": "36",
      "image": "/acphoto/Panasonic-58_36.jpg"
},
{
      "name": "Panasonic 179",
      "shelfNumber": "36",
      "image": "/acphoto/Panasonic-179_36.jpg"
},
{
      "name": "Electrolux 28",
      "shelfNumber": "37",
      "image": "/acphoto/Electrolux-28_37.jpg"
},
{
      "name": "Electrolux 27",
      "shelfNumber": "37",
      "image": "/acphoto/Electrolux-27_37.jpg"
},
{
      "name": "Electrolux 26",
      "shelfNumber": "37",
      "image": "/acphoto/Electrolux-26_37.jpg"
},
{
      "name": "Daikin 163",
      "shelfNumber": "37",
      "image": "/acphoto/Daikin-163_37.jpg"
},
{
      "name": "Whirlpool 151",
      "shelfNumber": "38",
      "image": "/acphoto/Whirlpool-151_38.jpg"
},
{
      "name": "Neuro 151",
      "shelfNumber": "38",
      "image": "/acphoto/Neuro-151_38.jpg"
},
{
      "name": "Lg 93",
      "shelfNumber": "38",
      "image": "/acphoto/Lg-93_38.jpg"
},
{
      "name": "Azure 34",
      "shelfNumber": "38",
      "image": "/acphoto/Azure-34_38.jpg"
},
{
      "name": "Hitachi 111",
      "shelfNumber": "39",
      "image": "/acphoto/Hitachi-111_39.jpg"
},
{
      "name": "Carrier 106",
      "shelfNumber": "40",
      "image": "/acphoto/Carrier-106_40.jpg"
},
{
      "name": "Daikin",
      "shelfNumber": "37",
      "image": "/acphoto/Daikin_37.jpg"
},
{
      "name": "Hitachi 203",
      "shelfNumber": "40",
      "image": "/acphoto/Hitachi-203_40.jpg"
},
{
      "name": "Voltas 292",
      "shelfNumber": "41",
      "image": "/acphoto/Voltas-292_41.jpg"
},
{
      "name": "Voltas 158",
      "shelfNumber": "41",
      "image": "/acphoto/Voltas-158_41.jpg"
},
{
      "name": "Chroma marq 257",
      "shelfNumber": "41",
      "image": "/acphoto/Chroma-marq-257_41.jpg"
},
{
      "name": "Bluestar 291",
      "shelfNumber": "41",
      "image": "/acphoto/Bluestar-291_41.jpg"
},
{
      "name": "Fan remote",
      "shelfNumber": "42",
      "image": "/acphoto/Fan-remote_42.jpg"
},
{
      "name": "Electrolux",
      "shelfNumber": "42",
      "image": "/acphoto/Electrolux_42.jpg"
},
{
      "name": "Ac 14",
      "shelfNumber": "42",
      "image": "/acphoto/Ac-14_42.jpg"
},
{
      "name": "Ac 298",
      "shelfNumber": "43",
      "image": "/acphoto/Ac-298_43.jpg"
},
{
      "name": "Lg h cool",
      "shelfNumber": "43",
      "image": "/acphoto/Lg-h-cool_43.jpg"
},
{
      "name": "Inverter Mac 125",
      "shelfNumber": "35",
      "image": "/acphoto/Inverter-Mac-125_35.jpg"
},
{
      "name": "Lg 107 a",
      "shelfNumber": "2",
      "image": "/acphoto/Lg-107-a_2.jpg"
},
{
      "name": "Chroma marq Ac 257",
      "shelfNumber": "44",
      "image": "/acphoto/Chroma-marq-Ac-257_44.jpg"
},
{
      "name": "Lg Mac 77",
      "shelfNumber": "44",
      "image": "/acphoto/Lg-Mac-77_44.jpg"
},
{
      "name": "Panasonic Ac 23",
      "shelfNumber": "36",
      "image": "/acphoto/Panasonic-Ac-23_36.jpg"
},
{
      "name": "Ifb",
      "shelfNumber": "44",
      "image": "/acphoto/Ifb_44.jpg"
},
{
      "name": "Ac 17 lg",
      "shelfNumber": "17",
      "image": "/acphoto/Ac-17-lg_17.jpg"
},
{
      "name": "Bluestar Ac 291",
      "shelfNumber": "12",
      "image": "/acphoto/Bluestar-Ac-291_12.jpg"
},
{
      "name": "Ifb ac 91",
      "shelfNumber": "30",
      "image": "/acphoto/Ifb-ac-91_30.jpg"
},
{
      "name": "Bluestar ac 87",
      "shelfNumber": "15",
      "image": "/acphoto/Bluestar-ac-87_15.jpg"
},
{
      "name": "162 50 in 1",
      "shelfNumber": "29",
      "image": "/acphoto/162-50-in-1_29.jpg"
},
{
      "name": "O general 223",
      "shelfNumber": "30",
      "image": "/acphoto/O-general-223_30.jpg"
},
{
      "name": "O general",
      "shelfNumber": "42",
      "image": "/acphoto/O-general_42.jpg"
},
{
      "name": "Voltas 158",
      "shelfNumber": "41",
      "image": "/acphoto/Voltas-158_41.jpg"
},
{
      "name": "Voltas 292",
      "shelfNumber": "41",
      "image": "/acphoto/Voltas-292_41.jpg"
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