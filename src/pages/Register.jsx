import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Button from "../ui/Button";
import { useSignup } from "../features/auth/useSignup";

export default function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signUp, isPending } = useSignup()

  function onSubmit({ fullName, email, password }) {
    signUp({ fullName, email, password })
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg shadow-md bg-slate-50 p-4 space-y-4">
        {/* <Logo /> */}
        <h2 className="text-tremor-metric text-tremor-brand dark:text-dark-tremor-brand font-bold">Sign-up</h2>
        <span className="text-tremor-title font-thin text-tremor-brand-emphasis dark:text-dark-tremor-brand-emphasis">Fill out your credentials to start creating projects.</span>
        <FormRow>
          <Label htmlFor="fullName">Full Name</Label>
          <Input 
          type="text" 
          id="fullName" 
          register={register} 
          condition={{ required: "This field is required" }}
          placeholder="John Doe"
          disabled={isPending} />
        </FormRow>
        <FormRow>
          <Label htmlFor="email">Email</Label>
          <Input 
          type="email"
           id="email" 
           register={register} 
           condition={{ required: "This field is required" }} 
           placeholder="johndoe@mail.com"
           disabled={isPending} />
        </FormRow>
        <FormRow>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" register={register} condition={{ required: "This field is required" }} disabled={isPending} />
        </FormRow>
        <Link className="inline-block text-tremor-label text-tint underline mt-4" to="/login">Already have an account? Sign-in</Link>
        <Button disabled={isPending} type="submit">Sign-up</Button>
      </form>
    </main>
  )
}
