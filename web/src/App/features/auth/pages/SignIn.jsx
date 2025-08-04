import TextInputField from "@/components/formComponents/TextInputField";
import { Form, Link, useActionData } from "react-router";

export default function SignIn() {
  const { error } = useActionData() || {};
  return (
    <div className="h-dvh w-dvw flex justify-center items-center bg-base-200">
      <Form
        action="/signin"
        method="POST"
        className="card card-border bg-base-100 border-base-300 w-md"
      >
        <div className="card-title border-b-2 border-dashed border-b-base-200 bg-base-100 p-4 text-2xl justify-center font-medium">
          Sign in
        </div>
        <div className="card-body gap-5">
          {/* <input
            type="text"
            name="email"
            className="mb-5 input input-lg w-full focus:outline-none focus:border-b-accent border-0 border-b-2 transition-colors duration-200 bg-base-300/20 focus:bg-transparent font-medium"
            placeholder="email"
          /> */}
          <TextInputField name="email" placeholder="email" className="w-full" />
          <TextInputField
            name="password"
            placeholder="password"
            className="w-full"
          />
          {/* <input
            type="password"
            name="password"
            className="mb-2 input input-lg w-full focus:outline-none focus:border-b-accent border-0 border-b-2 transition-colors duration-200 bg-base-300/20 focus:bg-transparent font-medium"
            placeholder="password"
          /> */}
          {/* <div className="mb-2 w-full flex flex-row justify-end">
            <Link
              to="/forgot"
              className=" link link-hover link-accent py-2 px-4 text-right"
            >
              Forgot Password?
            </Link>
          </div> */}
          <button type="submit" className="btn btn-lg btn-primary">
            Submit
          </button>
          {error && <p className="text-error">{error}</p>}
        </div>
      </Form>
    </div>
  );
}
