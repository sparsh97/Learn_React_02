import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
function ModelPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(prev => !prev);
  };
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
}

export default ModelPage;
