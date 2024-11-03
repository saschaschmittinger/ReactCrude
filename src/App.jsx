import { useState } from "react";
import ModelForm from "./components/ModelForm";
import Navbar from "./components/Navbar";
import Tablelist from "./components/Tablelist";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("modal mode Add");
    } else {
      console.log("modal mode edit");
    }
  };

  return (
    <>
      <Navbar onOpen={(mode) => handleOpen(mode)} />
      <Tablelist handleOpen={handleOpen} />
      <ModelForm
        isOpen={isOpen}
        onSubmit={handleSubmit}
        onClose={() => setIsOpen(false)}
        mode={modalMode}
      />
    </>
  );
}
