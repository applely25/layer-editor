const element = [
  {
    id: "1",
    type: "text",
    position: { x: 0, y: 0 },
    flip: { horizontal: false, vertical: false },
    text: "Hello World!",
    width: 100,
    height: 50,
    style: {
      background: "#fff",
      color: "#000",
    },
  },
  {
    id: "2",
    type: "circle", // rectangle, circle, line
    position: { x: 100, y: 100 },
    flip: { horizontal: false, vertical: false },
    width: 100,
    height: 100,
    style: {
      background: "#f00",
      color: "#000",
    },
  },
  {
    id: "3",
    type: "frame",
    position: { x: 500, y: 500 },
    flip: { horizontal: false, vertical: false },
    width: 100,
    height: 100,
    style: {
      background: "#0ff",
      color: "#000",
    },
    children: [
      {
        id: "4",
        type: "text",
        position: { x: 10, y: 40 },
        flip: { horizontal: false, vertical: false },
        text: "Hello Frame!",
        style: {
          background: "#fff",
          color: "#000",
        },
      },
    ],
  },
  {
    id: "5",
    type: "image",
    position: { x: 200, y: 200 },
    flip: { horizontal: false, vertical: false },
    width: 100,
    height: 100,
    style: {
      background: "#0f0",
      color: "#000",
    },
    src: "https://avatars.githubusercontent.com/u/102589413?v=4",
  },
];

export default element;
