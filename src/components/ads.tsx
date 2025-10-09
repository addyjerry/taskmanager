import React from "react";
import Link from "next/link";

const Ads = () => {
  return (
    <div className="md:px-18 px-3 text-lg py-25 border-b-1">
      <h1 className="text-5xl font bold py-5">Start Your Free Trial Today</h1>
      <p className="py-5">
        Experience seamless project management with our intuitive tool . Sign up
        for a free trial now!
      </p>
      <span className="flex flex-col lg:flex-row gap-5">
        <button className="bg-primary text-white p-3">
          <Link href="/SignUp">Sign Up</Link>
        </button>
        <button className="border-1 p-3">
          <Link href="/SignUp">Request</Link>
        </button>
      </span>
    </div>
  );
};

export default Ads;
