import AboutImg from "../images/about.jpg";
import Skills from "../components/Skills";
import Facts from "../components/Facts";
import Testimonials from "../components/Testimonials";

import { aboutTitle, aboutMe } from "../data/About";

const About = () => {
  return (
    <main className="pt-[96px]">
      <section className="mb-10">
        <div className="mx-auto  px-4 sm:px-5 md:px-8 lg:px-10">
          <div className="text-center pb-8">
            <h2 className="section-title-h2">About</h2>
            <p className="pb-0">{aboutTitle}</p>
          </div>

          <div className="lg:flex">
            <div className="lg:flex-auto  lg:w-[33.33333333%] sm:p-10">
              <img
                className="max-w-full h-auto rounded-lg"
                src={AboutImg}
                alt=""
              />
            </div>
            <div className="lg:flex-auto lg:w-[66.66666667%] lg:pl-6 sm:p-10">
              <h3 className="font-bold  text-2xl  color-[#555555]">
                Illustrator &amp; UI/UX Designer
              </h3>
              <p className="italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="lg:grid lg:grid-cols-2 pt-4">
                <ul className="list-none p-0">
                  {aboutMe[0].map((item, index) => {
                    return (
                      <li key={index} className="pb-[10px]">
                        <strong>{item.key}:</strong> {item.value}
                      </li>
                    );
                  })}
                </ul>
                <div>
                  <ul className="list-none p-0">
                    {aboutMe[1].map((item, index) => {
                      return (
                        <li key={index} className="pb-[10px]">
                          <strong>{item.key}:</strong> {item.value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <p className="mb-0">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Facts />
      <Testimonials />
    </main>
  );
};

export default About;
