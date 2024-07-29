import * as React from "react";
import hero from "@p/public/images/hero.gif";
interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <section>
      <div
        className={`mx-auto flex h-[176px] w-full flex-col bg-[#5CC8E4] bg-cover bg-center md:h-[434px]`}
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <h2 className="mx-auto mt-[2em] text-center text-[22px] font-bold italic text-white md:mt-[200px]">
          What concert are you looking for?
        </h2>
      </div>
    </section>
  );
};

export default Hero;
