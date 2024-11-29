export function YesNoOption({ label }) {
  return (
    <div className="flex gap-6 items-center self-stretch my-auto min-w-[240px]">
      <div className="self-stretch my-auto font-semibold">{label}</div>
      <div className="flex gap-5 items-center self-stretch my-auto whitespace-nowrap">
        <div className="flex gap-3 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d9f872b5a7000c879c166e77c69f7deaa5af717b5443bb1b552ee689485d124?placeholderIfAbsent=true&apiKey=c8983b7bfcc944da945cfadb31a60a80"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <div className="self-stretch my-auto">Yes</div>
        </div>
        <div className="flex gap-3 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbf737c1284c131815f6e27c9e18c590d055b6821c9dc2ad41cd13b4dfdbe55a?placeholderIfAbsent=true&apiKey=c8983b7bfcc944da945cfadb31a60a80"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <div className="self-stretch my-auto">No</div>
        </div>
      </div>
    </div>
  );
}
