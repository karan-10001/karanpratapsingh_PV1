import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Error = () => {
  return (
    <Layout>
      <div className="h-[90vh] sm:h-[85vh] flex items-center justify-center">
        <div className="w-96 text-center text-gray-100 space-y-2">
          <h1 className="text-8xl font-mono font-bold">404</h1>
          <p className="text-2xl font-semibold">
            Sorry the page can't be found
          </p>
          <p>
            The page you are looking for is being deleted, moved or does not
            exist.
          </p>
          <button className="px-5 py-2 btn-accent font-bold rounded-md">
            <Link className="bg-transparent" to={"/"}>
              Back to Homepage
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
