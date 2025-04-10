import elementData from "./dummyData";
const ElementComponent = ({ shape }: { shape: any }) => {
  if (shape.type === "frame") {
    return (
      <div
        key={shape.id}
        className="frame"
        style={{
          left: shape.position.x,
          top: shape.position.y,
          width: shape.width,
          height: shape.height,
          ...shape.style,
        }}
      >
        <div>
          {shape.children.map((child: any) => (
            <ElementComponent shape={child} />
          ))}
        </div>
      </div>
    );
  } else if (shape.type === "text") {
    return (
      <p
        className="text"
        style={{
          left: shape.position.x,
          top: shape.position.y,
          width: shape.width,
          height: shape.height,
          ...shape.style,
        }}
        key={shape.id}
      >
        {shape.text}
      </p>
    );
  } else if (shape.type === "image") {
    return (
      <img
        className="image"
        style={{
          left: shape.position.x,
          top: shape.position.y,
          width: shape.width,
          height: shape.height,
          ...shape.style,
        }}
        key={shape.id}
        src={shape.src}
        alt={shape.id}
      />
    );
  } else {
    return (
      <div
        key={shape.id}
        className={shape.type}
        style={{
          left: shape.position.x,
          top: shape.position.y,
          width: shape.width,
          height: shape.height,
          ...shape.style,
        }}
      ></div>
    );
  }
};

function App() {
  return (
    <div className="container">
      {elementData.map((element) => (
        <ElementComponent shape={element} />
      ))}
    </div>
  );
}

export default App;
