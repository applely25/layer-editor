import { useState } from "react";
import ElementComponent from "./components/ElementConponent";
import elementData from "./dummyData";

function App() {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const dblClickHandler = (id: string) => {
    setSelectedElement(id);
  };
  return (
    <main>
      <div className="canvas">
        {elementData.map((element) => (
          <ElementComponent
            key={element.id}
            element={element}
            dblClickHandler={() => setSelectedElement(element.id)}
            selected={selectedElement === element.id}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
