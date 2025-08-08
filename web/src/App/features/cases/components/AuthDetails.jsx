import { Fragment } from "react";

export default function AuthDetails({ authData }) {
  return (
    <div className="grid grid-cols-[auto_auto] w-fit p-3">
      {Object.entries(authData).map(([id, value]) => (
        <Fragment key={id}>
          <div className="border-b-2 border-b-black dark:border-b-white pr-5">
            {id}:
          </div>
          <div className="border-b-2 border-b-black dark:border-b-white">
            {value}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
