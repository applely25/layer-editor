interface ElementComponentProps {
  element: {
    id: string;
    type: string;
    position: { x: number; y: number };
    flip: { horizontal: boolean; vertical: boolean };
    text?: string;
    width: number;
    height: number;
    style: Record<string, string | number>;
    children?: Array<any>;
  };
  dblClickHandler: () => void;
  selected: boolean;
}
const ElementConponent = ({
  element,
  dblClickHandler,
  selected,
}: ElementComponentProps) => {
  return (
    <div
      className={`element ${selected ? "selected" : ""}`}
      style={{
        left: element.position.x,
        top: element.position.y,
        width: element.width,
        height: element.height,
      }}
      onDoubleClick={dblClickHandler}
    >
      <div className={`shape ${element.type}`} style={element.style}>
        {selected && (
          <>
            <div className="size left top"></div>
            <div className="size left bottom"></div>
            <div className="size right top"></div>
            <div className="size right bottom"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default ElementConponent;
