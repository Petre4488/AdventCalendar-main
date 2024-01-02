import Door1bkg from "./img/1.jpg"
import Door2bkg from "./img/2.jpg"
import Door3bkg from "./img/3.jpg"
import Door4bkg from "./img/4.jpg"
import Door5bkg from "./img/5.jpg"
import Door6bkg from "./img/6.jpg"
import Door7bkg from "./img/7.jpg"
import Door8bkg from "./img/8.jpg"
import Door9bkg from "./img/9.jpg"
import Door10bkg from "./img/10.jpg"

const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  
  export const hatchArray = [
    {
      id: "hatch-1",
      nr: 1,
      img: Door1bkg,
      text:
        "https://shorturl.at/lJPX6",
      open: false
    },
    {
      id: "hatch-2",
      nr: 2,
      img: Door2bkg,
      text:
        "https://shorturl.at/IJLSW",
      open: false
    },
    {
      id: "hatch-3",
      nr: 3,
      img: Door3bkg,
      text:
        "https://shorturl.at/jmpFL",
      open: false
    },
    {
      id: "hatch-4",
      nr: 4,
      img: Door4bkg,
      text:
        "https://shorturl.at/vKNP5",
      open: false
    },
    {
      id: "hatch-5",
      nr: 5,
      img: Door5bkg,
      text:
        "https://shorturl.at/qyGO8",
      open: false
    },
    {
      id: "hatch-6",
      nr: 6,
      img: Door6bkg,
      text:
        "https://t.ly/hH30t",
      open: false
    },
    {
      id: "hatch-7",
      nr: 7,
      img: Door7bkg,
      text:
        "https://t.ly/VS6ig",
      open: false
    },
    {
      id: "hatch-8",
      nr: 8,
      img: Door8bkg,
      text:
        "https://t.ly/cwzry",
      open: false
    },
    {
      id: "hatch-9",
      nr: 9,
      img: Door9bkg,
      text:
        "https://t.ly/j4Epi",
      open: false
    },
    {
      id: "hatch-10",
      nr: 10,
      img: Door10bkg,
      text:
        "https://t.ly/QEX3u",
      open: false
    },
    {
      id: "hatch-11",
      nr: 11,
      img: Door1bkg,
      text:
        "https://rb.gy/eb75ld",
      open: false
    },
    {
      id: "hatch-12",
      nr: 12,
      img: Door2bkg,
      text:
        "https://rb.gy/e6nx2v",
      open: false
    },
    {
      id: "hatch-13",
      nr: 13,
      img: Door3bkg,
      text:
        "https://rb.gy/tbmg44",
      open: false
    },
    {
      id: "hatch-14",
      nr: 14,
      img: Door4bkg,
      text:
        "https://rb.gy/y0opel",
      open: false
    },
    {
      id: "hatch-15",
      nr: 15,
      img: Door5bkg,
      text:
        "https://rb.gy/5cy53o",
      open: false
    },
    {
      id: "hatch-16",
      nr: 16,
      img: Door6bkg,
      text:
        "https://cutt.ly/RwGR4VyN",
      open: false
    },
    {
      id: "hatch-17",
      nr: 17,
      img: Door7bkg,
      text:
        "https://cutt.ly/uwGR40v8",
      open: false
    },
    {
      id: "hatch-18",
      nr: 18,
      img: Door8bkg,
      text:
        "https://cutt.ly/xwGR48eQ",
      open: false
    },
    {
      id: "hatch-19",
      nr: 19,
      img: Door9bkg,
      text:
        "https://rb.gy/54huip",
      open: false
    },
    {
      id: "hatch-20",
      nr: 20,
      img: Door10bkg,
      text:
        "https://rb.gy/t02n7k",
      open: false
    },
    {
      id: "hatch-21",
      nr: 21,
      img: Door1bkg,
      text:
        "https://rb.gy/e2yaat",
      open: false
    },
    {
      id: "hatch-22",
      nr: 22,
      img: Door2bkg,
      text:
        "https://rb.gy/134j27",
      open: false
    },
    {
      id: "hatch-23",
      nr: 23,
      img: Door3bkg,
      text:
        "https://rb.gy/llg3fz",
      open: false
    },
    {
      id: "hatch-24",
      nr: 24,
      img: Door4bkg,
      text:
        "https://tiny.cc/p6hrvz",
      open: false
    },
  ];
  
  export const createCalendar = () => shuffle(hatchArray);