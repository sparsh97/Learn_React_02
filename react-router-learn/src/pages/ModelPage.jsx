import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
function ModelPage() {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(false);
  };
  const handleClick = () => {
    setShowModal((prev) => !prev);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClick}>
        Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={onClose} actionBar={actionBar}>
      <p>Testing Children</p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu libero maximus, scelerisque est eu, rhoncus lorem. Vivamus consequat magna et lectus commodo, quis vulputate risus mollis. Duis a porta nisi. Donec sapien justo, rhoncus id leo at, posuere suscipit urna. Proin sed interdum lectus. Phasellus ut ligula nec arcu finibus aliquam in eget nulla. Fusce dictum eros a sodales sodales. Donec nunc nisl, dapibus accumsan placerat at, euismod non ex. Integer dictum justo quis nibh varius, ut vehicula libero pulvinar. Sed tincidunt libero id odio rhoncus hendrerit. Donec posuere ut tortor ullamcorper gravida. Morbi tincidunt id purus a tincidunt. Aliquam vel elit quis sem lacinia congue. Nunc at nisl blandit, pellentesque felis non, sodales ante. Proin euismod varius augue ac sagittis.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu libero maximus, scelerisque est eu, rhoncus lorem. Vivamus consequat magna et lectus commodo, quis vulputate risus mollis. Duis a porta nisi. Donec sapien justo, rhoncus id leo at, posuere suscipit urna. Proin sed interdum lectus. Phasellus ut ligula nec arcu finibus aliquam in eget nulla. Fusce dictum eros a sodales sodales. Donec nunc nisl, dapibus accumsan placerat at, euismod non ex. Integer dictum justo quis nibh varius, ut vehicula libero pulvinar. Sed tincidunt libero id odio rhoncus hendrerit. Donec posuere ut tortor ullamcorper gravida. Morbi tincidunt id purus a tincidunt. Aliquam vel elit quis sem lacinia congue. Nunc at nisl blandit, pellentesque felis non, sodales ante. Proin euismod varius augue ac sagittis.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu libero maximus, scelerisque est eu, rhoncus lorem. Vivamus consequat magna et lectus commodo, quis vulputate risus mollis. Duis a porta nisi. Donec sapien justo, rhoncus id leo at, posuere suscipit urna. Proin sed interdum lectus. Phasellus ut ligula nec arcu finibus aliquam in eget nulla. Fusce dictum eros a sodales sodales. Donec nunc nisl, dapibus accumsan placerat at, euismod non ex. Integer dictum justo quis nibh varius, ut vehicula libero pulvinar. Sed tincidunt libero id odio rhoncus hendrerit. Donec posuere ut tortor ullamcorper gravida. Morbi tincidunt id purus a tincidunt. Aliquam vel elit quis sem lacinia congue. Nunc at nisl blandit, pellentesque felis non, sodales ante. Proin euismod varius augue ac sagittis.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu libero maximus, scelerisque est eu, rhoncus lorem. Vivamus consequat magna et lectus commodo, quis vulputate risus mollis. Duis a porta nisi. Donec sapien justo, rhoncus id leo at, posuere suscipit urna. Proin sed interdum lectus. Phasellus ut ligula nec arcu finibus aliquam in eget nulla. Fusce dictum eros a sodales sodales. Donec nunc nisl, dapibus accumsan placerat at, euismod non ex. Integer dictum justo quis nibh varius, ut vehicula libero pulvinar. Sed tincidunt libero id odio rhoncus hendrerit. Donec posuere ut tortor ullamcorper gravida. Morbi tincidunt id purus a tincidunt. Aliquam vel elit quis sem lacinia congue. Nunc at nisl blandit, pellentesque felis non, sodales ante. Proin euismod varius augue ac sagittis.
      </p>
    </div>
  );
}

export default ModelPage;
