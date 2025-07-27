export const Card = ({ title, description, img, alt, color }) => {
  return (
    <div className="shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)] rounded-sm px-6 py-7 h-[222px] relative overflow-hidden xl:max-w-[350px]">
      <div className={`h-[3px] ${color} absolute top-0 left-0 w-full`}></div>
      <h2 className="font-semibold text-[1.25rem]">{title}</h2>
      <p className="text-Grey-400 text-[0.8125rem] xl:text-sm">{description}</p>
      <img
        className="absolute bottom-[28px] right-[24px]"
        src={img}
        alt={alt}
      />
    </div>
  );
};
