import React from "react";
import { NavigationItem } from "./NavigationItem";
import { BreadcrumbItem } from "./BreadcrumbItem";

const navigationItems = [
  { text: "Donor Programme" },
  { text: "Fertility Preservation" },
  { text: "Advanced Treatments" },
  { text: "Infertility Treatments" },
  { text: "IVF Testing" },
  { text: "About Us" },
  { text: "Talk to Us", isButton: true },
];

const breadcrumbItems = [
  { text: "Home" },
  { text: "IVF Success Rate Calculator" },
  { text: "Result", isActive: true },
];

export const IVFCalculator = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-zinc-800">
      <div className="flex flex-col justify-center items-center px-16 py-2.5 w-full bg-white border-b border-stone-200 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1488px] max-md:max-w-full">
          <div className="flex gap-2 my-auto text-4xl whitespace-nowrap">
            <div className="px-5 py-2 font-semibold leading-none text-white bg-neutral-800 tracking-[2.47px] max-md:pl-5">
              iVF
            </div>
            <div className="self-start font-medium leading-none text-neutral-800">
              Pulse
            </div>
          </div>
          <div className="flex flex-wrap gap-4 cursor-pointer items-center py-2.5 text-base font-medium rounded-[10000px] text-neutral-800 max-md:max-w-full">
            {navigationItems.map((item, index) => (
              <NavigationItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center self-start mt-10 ml-32 text-base text-white max-md:ml-2.5">
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem {...item} />
            {index < breadcrumbItems.length - 1 && (
              <div className="self-stretch my-auto">/</div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center mr-0 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-6 self-stretch">
                <div className="flex my-auto">
                  <div className="shrink-0 my-auto h-px border border-red-400 border-solid w-[120px]" />
                  <div className="flex shrink-0 w-8 h-8 bg-red-400 rounded-full" />
                </div>
                <div className="flex-auto text-5xl font-medium text-white w-[738px] max-md:max-w-full">
                  Your estimated IVF Success Rate is
                </div>
              </div>
              <div className="flex relative flex-col px-16 py-24 mt-28 max-w-full text-7xl font-medium text-white whitespace-nowrap aspect-square w-[292px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/42cc697b32a3c3a4c7dd94a2a5bb26f218ca6a5e9984079ada306022e7427f5e?placeholderIfAbsent=true&apiKey=c8983b7bfcc944da945cfadb31a60a80"
                  alt=""
                  className="object-cover absolute inset-0 size-full"
                />
                64%
              </div>
              <div className="mt-9 text-2xl font-medium text-white">
                With 1 IVF Cycle
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b330eeb8ad25ddf4ce46cea6674d7b552b949cac76ea0872a41dd2685df06d?placeholderIfAbsent=true&apiKey=c8983b7bfcc944da945cfadb31a60a80"
              alt="IVF Success Rate Graph"
              className="object-contain grow mt-4 w-full aspect-[1.49] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
