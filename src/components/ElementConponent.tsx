import { useEffect } from "react";

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
  setSelectedElement: React.Dispatch<React.SetStateAction<string | null>>;
  selectedElement: string | null;
}
const ElementConponent = ({
  element,
  setSelectedElement,
  selectedElement,
}: ElementComponentProps) => {
  const dblClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setSelectedElement(element.id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".element")) {
        setSelectedElement(null);
      }
    };
    if (selectedElement === element.id) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
  return (
    <div
      className={`element ${selectedElement === element.id ? "selected" : ""}`}
      style={{
        left: element.position.x,
        top: element.position.y,
        width: element.width,
        height: element.height,
      }}
      onDoubleClick={(e) => dblClickHandler(e)}
    >
      {element.type === "text" ? (
        <p className={`shape ${element.type}`} style={element.style}>
          {selectedElement === element.id && (
            <>
              <div className="size left top"></div>
              <div className="size left bottom"></div>
              <div className="size right top"></div>
              <div className="size right bottom"></div>
            </>
          )}
          {element.text}
        </p>
      ) : (
        <div className={`shape ${element.type}`} style={element.style}>
          {selectedElement === element.id && (
            <>
              <div className="size left top"></div>
              <div className="size left bottom"></div>
              <div className="size right top"></div>
              <div className="size right bottom"></div>
            </>
          )}
          {element.type === "frame" &&
            element.children?.map((child) => (
              <ElementConponent
                key={child.id}
                element={child}
                setSelectedElement={setSelectedElement}
                selectedElement={selectedElement}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default ElementConponent;
