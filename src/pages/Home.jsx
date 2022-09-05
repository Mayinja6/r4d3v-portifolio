import HeroImg from "../images/heroBg.jpg";

const Home = () => {
  return (
    <section
      className="w-full h-[100vh] bg-right-top static bg-cover bg-fixed "
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className=" relative w-full h-[100vh] flex  items-center backdrop-blur-md">
        <div className=" mx-auto container pt-[70px] flex  flex-col items-center text-center">
          <h1 className="text-5xl leading-related text-th-preloder">
            Raymond Johns
          </h1>
          <h2 className="text-xl pt-4 leading-6 text-th-preloder">
            I'm a Frontend Developer from San Francisco
          </h2>
          <a
            href="/about"
            className="
      py-3 px-11 inline-block text-xs transition-all font-semibold mt-7 rounded-[50px] bg-[#34b7a7] hover:bg-[#3dc8b7] text-[#fff] uppercase
      "
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
