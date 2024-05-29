import { useSignIn } from "../features/auth/useSignIn";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Button from "../ui/Button";

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signIn, isPending } = useSignIn()

  function onSubmit({email, password}) {
    signIn({email, password})
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg shadow-md bg-slate-50 p-8 space-y-8">
        {/* <Logo /> */}
        <h2 className="text-5xl text-primary font-bold mb-2">Sign-in to your account</h2>
        <span className="text-3xl font-thin text-tint">Fill out your credentials to enter your account.</span>
        <FormRow>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" register={register} condition={{ required: "This field is required" }} disabled={isPending} />
          <div className="h-5 text-danger">
            {errors?.email?.message && <p>{errors.email.message}</p>}
          </div>
        </FormRow>
        <FormRow>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" register={register} condition={{ required: "This field is required" }} disabled={isPending} />
          <div className="h-5 text-danger">
            {errors?.password?.message && <p>{errors.password.message}</p>}
          </div>
        </FormRow>
        <Link to="/register" className="text-xl text-tint underline">Don&apos;t have an account? Sign-up</Link>
        <Button disabled={isPending} type="submit">Sign-in</Button>
      </form>
    </main>
  )
}
