import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateExpenseForm from "./CreateExpenseForm";

export default function CreateExpense() {
  return (
    <Modal>
      <Modal.Opens opens="create-expense">
        <Button>Add expense</Button>
      </Modal.Opens>
      <Modal.Window window="create-expense">
        <CreateExpenseForm />
      </Modal.Window>
    </Modal>
  )
}
