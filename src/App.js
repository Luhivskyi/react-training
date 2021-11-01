import React from "react";
import PaintingList from "./components/PaintingList/PaintingList";
import Panel from "./components/Panel/Panel";
import ColorPicKer from "./components/ColorPicker/ColorPicker";
import Notification from "./components/Notification/Notification";
import Layout from "./components/Layout/Layout";
import paintings from "./paintings.json";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const App = () => {
  return (
    <Layout>
      <ColorPicKer options={colorPickerOptions} />
      <Notification text="Все добре!" type="success" />

      <Notification text="Все погано!" type="error" />

      <PaintingList paintings={paintings} />
      <Panel title="Новини!">
        <p>Hello!</p>
      </Panel>
    </Layout>
  );
};

export default App;
