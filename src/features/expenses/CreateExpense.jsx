/* eslint-disable react/prop-types */
import { useUser } from "../auth/useUser";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import CreateExpenseForm from "./CreateExpenseForm";

export default function CreateExpense() {

  const { user, isPending } = useUser()

  if(isPending) return <Spinner />

  return (
    <Modal>
      <Modal.Opens opens="create-expense">
        <Button>Add expense</Button>
      </Modal.Opens>
      <Modal.Window window="create-expense">
        <CreateExpenseForm userId={user.id} />
      </Modal.Window>
    </Modal>
  )
}
