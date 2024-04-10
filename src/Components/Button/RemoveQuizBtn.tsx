import React, { memo, useCallback, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { deleteQuizById } from "../../Api/quiz-api";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const RemoveQuizBtn = memo(({ quiz_id }: { quiz_id: number }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const actionHandler = useCallback(() => {
    deleteQuizById(quiz_id)
      .then((data) => {
        console.log(data.result);
      })
      .catch((err) => console.log(err))
      .finally(() => handleClose());
  }, [quiz_id]);

  return (
    <>
      <Button onClick={handleOpen}>Delete quiz</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>Do you really need this?</p>
          <Button onClick={actionHandler}>Yes</Button>
          <Button onClick={handleClose}>No</Button>
        </Box>
      </Modal>
    </>
  );
});
