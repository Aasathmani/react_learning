import { useState } from "react";
import { TabButton } from "./TabButton";
import { Examples } from "../data";
import { Section } from "./Section";
import { Tabs } from "./Tabs";
export function Example() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedOne) {
    setSelectedTopic(selectedOne);
  }
  let tabContent = <p> Please select any topic?</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="code-div">
        <h3>{Examples[selectedTopic].title}</h3>
        <p>{Examples[selectedTopic].description}</p>
        <pre>
          <code>{Examples[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Example" id="examples">
      <Tabs
      buttonsContainer="ul"
        buttons={
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "probs"}
              onClick={() => handleClick("probs")}
            >
              Probs
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
