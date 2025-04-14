import { useState } from "react";
import ElementComponent from "./components/ElementConponent";
import elementData from "./dummyData";

function App() {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  return (
    <main>
      <div className="canvas">
        {elementData.map((element) => (
          <ElementComponent
            key={element.id}
            element={element}
            setSelectedElement={setSelectedElement}
            selectedElement={selectedElement}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
