import * as React from "react";
import { MdOutlineQueueMusic } from "react-icons/md";
import Link from "next/link";

interface ICategoryDesktopProps {}

const CategoryDesktop: React.FunctionComponent<ICategoryDesktopProps> = (
  props,
) => {
  return (
    <section className="mt-10 px-5 font-medium text-white md:mt-12 md:px-10">
      <div className="flex justify-center space-y-3 md:space-x-5 md:space-y-0">
        <Link href={`/explore`}>
          <div className="flex h-[50px] w-full items-center justify-center rounded-lg border border-slate-400 bg-white p-4 md:h-[60px] md:w-[300px]">
            <span className="text-base text-black md:text-lg">
              See all the concert
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CategoryDesktop;
