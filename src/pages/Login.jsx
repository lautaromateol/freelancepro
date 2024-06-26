import { useSignIn } from "../features/auth/useSignIn";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Button from "../ui/Button";
import LeftSide from "../ui/LeftSide";

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signIn, isPending } = useSignIn()

  function onSubmit({ email, password }) {
    signIn({ email, password })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <LeftSide />
      <main className="flex items-center justify-center md:min-h-screen bg-tremor-background dark:bg-dark-tremor-background">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
          <h2 className="text-tremor-metric text-tremor-brand dark:text-dark-tremor-brand font-bold">Sign-in to your account</h2>
          <span className="text-tremor-title font-thin text-tremor-brand-emphasis dark:text-dark-tremor-brand-emphasis">Fill out your credentials to enter your account.</span>
          <FormRow>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              register={register}
              condition={{ required: "This field is required" }}
              placeholder="example@mail.com"
              disabled={isPending} />
          </FormRow>
          <FormRow>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              register={register}
              condition={{ required: "This field is required" }}
              disabled={isPending} />
          </FormRow>
          <Link to="/register" className="inline-block text-tremor-label text-tint dark:text-dark-tremor-brand-emphasis underline mt-4">Don&apos;t have an account? Sign-up</Link>
          <Button disabled={isPending} type="submit">Sign-in</Button>
        </form>
      </main>
    </div>
  )
}
