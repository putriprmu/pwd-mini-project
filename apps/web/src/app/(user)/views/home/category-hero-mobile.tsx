import * as React from "react";
import { MdOutlineQueueMusic } from "react-icons/md";
import { FaMusic } from "react-icons/fa6";
import Link from "next/link";

interface ICategorySectionProps {}

const CategorySection: React.FunctionComponent<ICategorySectionProps> = (
  props,
) => {
  return (
    <section className="block px-5 md:hidden ">
      <div className=" flex h-[120px] w-full gap-5 overflow-hidden overflow-x-auto ">
        <div className=" flex flex-col items-center justify-center ">
          <Link href={`/explore`}>
            <div className="flex h-[20px] w-[300px] items-center justify-center rounded-lg border border-slate-400 bg-white p-4">
              <span className="text-black">See all the concert</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
