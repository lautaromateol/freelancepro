/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateExpenseForm from "./CreateExpenseForm";

export default function CreateExpense({userId}) {
  return (
    <Modal>
      <Modal.Opens opens="create-expense">
        <Button>Add expense</Button>
      </Modal.Opens>
      <Modal.Window window="create-expense">
        <CreateExpenseForm userId={userId} />
      </Modal.Window>
    </Modal>
  )
}
