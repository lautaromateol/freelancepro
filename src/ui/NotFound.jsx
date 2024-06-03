import Button from "./Button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="flex flex-col gap-2">
        <h2 className="font-bold text-center text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong">404</h2>
        <h2 className="text-tremor-title text-center text-tremor-content-strong dark:text-dark-tremor-content-strong">Page not Found!</h2>
        <Link to="/dashboard">
          <Button>
            Back to Dashboard
          </Button>
        </Link>
      </section>
    </main>
  )
}
