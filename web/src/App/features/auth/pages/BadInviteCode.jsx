import { Link } from "react-router";

export default function BadInviteCode() {
  return (
    <div className="h-dvh w-dvw flex justify-center items-center bg-base-300">
      <div className="card card-lg bg-base-100 rounded-2xl">
        <div className="card-body">
          <div className="card-title flex flex-col">
            <h1 className="text-3xl">Sorry :(</h1>
            <p>We could not verify your invite link</p>
          </div>
          <p>
            Please check that you didn't accept your invite already or that the
            link is correct
          </p>
          <div className="card-actions justify-end">
            <Link to="/" className="btn btn-primary">
              Go To Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
