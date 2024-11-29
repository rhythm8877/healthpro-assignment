import * as React from "react";
import { navigationItems } from "./data/navigationItems";
import { ageRanges } from "./data/ageRanges";
import { medicalConditions } from "./data/medicalConditions";
import { NavigationItem } from "./components/NavigationItem";
import { SelectionOption } from "./components/SelectionOption";
import { YesNoOption } from "./components/YesNoOption";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function IVFCalculatorHome() {
  const [selectedAge, setSelectedAge] = useState("");
  const navigate = useNavigate();
  const handleOptionClick = (label) => {
    setSelectedAge(label);
  };

  const SubmitClick =()=>{
    navigate("/result")
  }
  return (
    <div className="flex overflow-hidden flex-col pb-28 bg-stone-50 max-md:pb-24">
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
          <div className="flex cursor-pointer flex-wrap gap-4 items-center py-2.5 text-base font-medium rounded-[10000px] text-neutral-800 max-md:max-w-full">
            {navigationItems.map((item, index) => (
              <NavigationItem key={index} label={item.label} />
            ))}
            <div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto text-white bg-red-500 rounded-md min-h-[48px] w-[143px]">
              <div className="flex overflow-hidden gap-2 justify-center items-center px-5 py-2">
                <div className="self-stretch my-auto">Talk to Us</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cb21356202245849193a23331f3273960589823585e34666f55325bf02d18d0?placeholderIfAbsent=true&apiKey=c8983b7bfcc944da945cfadb31a60a80"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[0.6]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="flex flex-col pt-9 mt-10 ml-32 w-full text-3xl max-w-[1041px] text-neutral-800 max-md:max-w-full">
        <div className="flex gap-4 items-center self-start text-base">
          <div className="self-stretch my-auto">Home</div>
          <div className="self-stretch my-auto text-black">/</div>
          <div className="self-stretch my-auto font-semibold">
            IVF Success Rate Calculator
          </div>
        </div>
        <div className="self-center mt-7 ml-32 font-medium max-md:max-w-full">
          Which age range applies to you?
        </div>
        <div className="flex mt-2 flex-wrap gap-5 justify-center">
        {ageRanges.map((range, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer ${
              selectedAge === range.label
                ? "border-red-500 bg-red-100"
                : "border-gray-300 bg-white"
            }`}
            onClick={() => handleOptionClick(range.label)}
          >
            <img
              src={range.icon}
              alt={range.label}
              className="w-12 h-12 object-contain"
            />
            <span className="text-lg font-medium">{range.label}</span>
          </div>
        ))}
      </div>
      {selectedAge && (
        <div className="mt-4 text-xl text-white">
          You selected: <strong>{selectedAge}</strong>
        </div>
      )}
        <div className="self-center mt-11 ml-32 font-medium max-md:mt-10">
          Number of IVF Cycles?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/99f2d6e71e0b58442dfdd523b767b913e83141db3a266e4c8eea74cd10f367ad?placeholderIfAbsent=true&apiKey=c8983b7bfcc944da945cfadb31a60a80"
          alt="IVF Cycles slider"
          className="object-contain self-center mt-5 ml-32 max-w-full rounded-none aspect-[5.92] w-[372px]"
        />
        <div className="self-end mt-11 mr-40 font-medium max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          Have you undergone these procedures before?
        </div>
        <div className="flex flex-wrap gap-10 items-center self-end mt-6 mr-32 text-xl max-md:mr-2.5 max-md:max-w-full">
          <YesNoOption label="ICSI Procedure:" />
          <YesNoOption label="PGT Testing:" />
        </div>
        <div className="self-end mt-11 mr-44 font-medium max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          Do you have any of these medical conditions?
        </div>
        <div className="flex flex-wrap gap-5 justify-center items-center self-end mt-6 max-w-full text-xl w-[973px]">
          {medicalConditions.map((condition, index) => (
            <SelectionOption
              key={index}
              icon={condition.icon}
              label={condition.label}
            />
          ))}
        </div>
        <button onClick={SubmitClick} className="flex overflow-hidden flex-col justify-center items-center self-center mt-14 ml-32 max-w-full text-base font-medium text-white whitespace-nowrap bg-red-500 rounded-md min-h-[47px] w-[147px] max-md:mt-10">
          <div className="overflow-hidden gap-2 self-stretch px-5 py-2">
            Calculate
          </div>
        </button>
      </form>
    </div>
  );
}
