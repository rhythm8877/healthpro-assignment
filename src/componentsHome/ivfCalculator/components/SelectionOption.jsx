export function SelectionOption({ icon, label }) {
  return (
    <div className="flex gap-3 items-center self-stretch my-auto">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
      />
      <div className="self-stretch my-auto">{label}</div>
    </div>
  );
}
