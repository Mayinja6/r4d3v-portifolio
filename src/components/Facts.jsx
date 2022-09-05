import CountUp from "react-countup";

import { facts } from "../data/About";

const Facts = () => {
  return (
    <section className="mb-10 p-3 sm:p-10">
      <div className="px-4">
        <div className="text-center pb-[30px]">
          <h2 className="section-title-h2 ">Facts</h2>
          <p className="mb-0">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {facts.map((fact, index) => {
            return (
              <div key={index} className="text-center">
                <CountUp
                  start={0}
                  end={fact.factQty}
                  duration={5}
                  decimal=","
                  className="text-[48px] block text-th-primary"
                />
                <p className="p-0 mx-0 mt-0 mb-[20px] text-[14px]">
                  {fact.factTitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facts;
