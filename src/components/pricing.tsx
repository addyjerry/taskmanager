import { priceCard } from "@/constants/priceCard";
import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <section className="p-15">
      <div className="text-center">
        <h1 className="font-bold text-5xl/snug py-5">Pricing plan</h1>
        <p className="text-xl">
          Flexible Plans for Every Workflow- Choose What Fits You Best
        </p>
      </div>
      <div className="py-10 tex-xl">
        {priceCard.map((card, index) => (
          <div key={index}>
            <span className="justify-center flex py-10">
              <button className="bg-primary text-white p-5 border border-primary">
                Monthly
              </button>
              <button className="bg-white p-5 border border-primary">
                Yearly
              </button>
            </span>
            <div className="flex flex-row text-xl w-full justify-between py-10 ">
              {card.monthly?.map((monthly) => (
                <div
                  key={monthly.plantype}
                  className="border-1 p-5 w-full mx-4"
                >
                  <div className="py-5 text-md">
                    <h2 className="font-bold ">{monthly.plantype}</h2>
                    <p className=" py-1">{monthly.plandescription}</p>
                  </div>
                  <span className="border-y-1 py-5 block">
                    <h2 className="font-bold ">{monthly.plantype}</h2>
                    <p className="text-6xl font-bold py-2 ">
                      {monthly.planprice}
                    </p>
                    <button className="text-white text-lg bg-primary py-2 w-full">
                      Get started
                    </button>
                  </span>
                  <span className="block">
                    <div className="py-10 ">
                      {monthly.packages?.map((pack, index) => (
                        <p
                          key={index}
                          className="flex flex-row text-lg gap-5 py-2"
                        >
                          <Check />
                          {pack.one}
                        </p>
                      ))}
                    </div>
                  </span>
                </div>
              ))}
            </div>
            <div>
              <div className="flex flex-row text-xl w-full justify-between py-10 border-b-1">
                {card.yearly?.map((monthly) => (
                  <div
                    key={monthly.plantype}
                    className="border-1 p-5 w-full mx-4"
                  >
                    <div className="py-5 text-md">
                      <h2 className="font-bold ">{monthly.plantype}</h2>
                      <p className=" py-1">{monthly.plandescription}</p>
                    </div>
                    <span className="border-y-1 py-5 block">
                      <h2 className="font-bold ">{monthly.plantype}</h2>
                      <p className="text-6xl font-bold py-2 ">
                        {monthly.planprice}
                      </p>
                      <button className="text-white text-lg bg-primary py-2 w-full">
                        Get started
                      </button>
                    </span>
                    <span className="block">
                      <div className="py-10 ">
                        {monthly.packages?.map((pack, index) => (
                          <p
                            key={index}
                            className="flex flex-row text-lg gap-5 py-2"
                          >
                            <Check />
                            {pack.one}
                          </p>
                        ))}
                      </div>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
