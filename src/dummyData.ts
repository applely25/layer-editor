const data = [
  {
    id: "poster_background",
    type: "rectangle",
    position: { x: 0, y: 0 },
    width: "100vw",
    height: "100vh",
    style: {
      background: "#a8dadc", // Light cyan background
    },
  },
  {
    id: "poster_card",
    type: "frame",
    position: { x: "50%", y: "50%" },
    width: 400,
    height: 600,
    style: {
      background: "#f1faee", // Off-white card background
      borderRadius: "15px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      transform: "translate(-50%, -50%)",
      overflow: "hidden", // Clip the wave effects
    },
    children: [
      {
        id: "top_wave",
        type: "rectangle",
        position: { x: 0, y: 0 },
        width: 400,
        height: 80,
        style: {
          background: "linear-gradient(135deg, #8e24aa 30%, #c2185b 70%)", // Purple gradient
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
        },
      },
      {
        id: "profile_image_container",
        type: "frame",
        position: { x: 140, y: 80 },
        width: 120,
        height: 120,
        style: {
          borderRadius: 60,
          overflow: "hidden",
          border: "5px solid #f1faee",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
        children: [
          {
            id: "profile_image",
            type: "image",
            position: { x: 0, y: 0 },
            width: 120,
            height: 120,
            src: "https://avatars.githubusercontent.com/u/102589413?v=4",
            style: {
              objectFit: "cover",
            },
          },
        ],
      },
      {
        id: "name",
        type: "text",
        position: { x: 200, y: 220 },
        text: "000",
        width: "fit-content",
        height: "auto",
        style: {
          fontSize: "2em",
          fontWeight: "bold",
          color: "#457b9d",
          textAlign: "center",
          transform: "translateX(-50%)",
        },
      },
      {
        id: "age",
        type: "text",
        position: { x: 200, y: 250 },
        text: "(바보입니다)",
        width: "fit-content",
        height: "auto",
        style: {
          fontSize: "1.1em",
          color: "#778da9",
          textAlign: "center",
          transform: "translateX(-50%)",
        },
      },
      {
        id: "divider_top",
        type: "rectangle",
        position: { x: 50, y: 290 },
        width: 300,
        height: 2,
        style: {
          background: "#e0e0e0",
        },
      },
      {
        id: "info_label_major",
        type: "text",
        position: { x: 50, y: 320 },
        text: "전공:",
        width: "fit-content",
        height: "auto",
        style: {
          fontSize: "1.1em",
          color: "#1d3557",
          textAlign: "left",
        },
      },
      {
        id: "info_value_major",
        type: "text",
        position: { x: 160, y: 320 },
        text: "컴퓨터 과학", // Example data
        width: "fit-content",
        height: "auto",
        style: {
          fontSize: "1.1em",
          fontWeight: "bold",
          color: "#457b9d",
          textAlign: "left",
        },
      },
      {
        id: "info_label_hobby",
        type: "text",
        position: { x: 50, y: 350 },
        text: "취미:",
        width: "fit-content",
        height: "auto",
        style: {
          fontSize: "1.1em",
          color: "#1d3557",
          textAlign: "left",
        },
      },
      {
        id: "info_value_hobby",
        type: "text",
        position: { x: 160, y: 350 },
        text: "코딩, 독서, 여행", // Example data
        width: "fit-content",
        height: "auto",
        style: {
          fontSize: "1.1em",
          fontWeight: "bold",
          color: "#457b9d",
          textAlign: "left",
        },
      },
      {
        id: "info_label_mbti",
        type: "text",
        position: { x: 50, y: 380 },
        text: "MBTI:",
        width: "fit-content",
        height: "auto",
        style: {
          fontSize: "1.1em",
          color: "#1d3557",
          textAlign: "left",
        },
      },
      {
        id: "info_value_mbti",
        type: "text",
        position: { x: 160, y: 380 },
        text: "INTP", // Example data
        width: "fit-content",
        height: "auto",
        style: {
          fontSize: "1.1em",
          fontWeight: "bold",
          color: "#457b9d",
          textAlign: "left",
        },
      },
      {
        id: "divider_bottom",
        type: "rectangle",
        position: { x: 50, y: 420 },
        width: 300,
        height: 2,
        style: {
          background: "#e0e0e0",
        },
      },
      {
        id: "greeting",
        type: "text",
        position: { x: 200, y: 460 },
        text: "만나서 반갑습니다!",
        width: "fit-content",
        height: "auto",
        style: {
          fontSize: "1.5em",
          color: "#457b9d",
          textAlign: "center",
          fontWeight: "bold",
          transform: "translateX(-50%)",
        },
      },
      {
        id: "message",
        type: "text",
        position: { x: 200, y: 510 },
        text: "새로운 것을 배우고 탐구하는 것을 좋아합니다. 함께 성장하고 발전해 나가고 싶습니다.",
        width: 320,
        height: "auto",
        style: {
          fontSize: "1em",
          color: "#778da9",
          textAlign: "center",
          lineHeight: "1.6",
          transform: "translateX(-50%)",
        },
      },
      {
        id: "bottom_wave",
        type: "rectangle",
        position: { x: 0, y: 520 },
        width: 400,
        height: 80,
        style: {
          background: "linear-gradient(135deg, #c2185b 30%, #8e24aa 70%)", // Reversed purple gradient
          clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)",
        },
      },
    ],
  },
];

export default data;
