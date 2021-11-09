import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

const DeleteButton = ({ onDelete, modalHeader, modalBody }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Modal data-testid="deleteModal" isOpen={openModal}>
        <ModalHeader>{modalHeader}</ModalHeader>
        <ModalBody>{modalBody}</ModalBody>
        <ModalFooter>
          <Button
            className="deleteModalButton"
            data-testid="deleteModalButton"
            color="danger"
            onClick={onDelete}
          >
            Delete
          </Button>{" "}
          <Button onClick={() => setOpenModal(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Button
        data-testid="deleteButton"
        color="danger"
        size="sm"
        onClick={() => setOpenModal(true)}
      >
        Delete
      </Button>
    </>
  );
};

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  modalHeader: PropTypes.string,
  modalBody: PropTypes.string,
};

DeleteButton.defaultProps = {
  modalHeader: "Are you sure?",
  modalBody:
    "Deleting this will remove it from the system. This cannot be undone.",
};

export default DeleteButton;
