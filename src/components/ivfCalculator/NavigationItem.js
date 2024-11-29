import React from "react";

export const NavigationItem = ({ text, isButton }) => {
  if (isButton) {
    return (
      <div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto text-white bg-red-500 rounded-md min-h-[48px] w-[143px]">
        <div className="flex overflow-hidden gap-2 justify-center items-center px-5 py-2">
          <div className="self-stretch my-auto">{text}</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cb21356202245849193a23331f3273960589823585e34666f55325bf02d18d0?placeholderIfAbsent=true&apiKey=c8983b7bfcc944da945cfadb31a60a80"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[0.6]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="gap-2 self-stretch px-2.5 my-auto leading-none rounded-md">
      {text}
    </div>
  );
};
