const CircleImage = ({imgSource, label, description}) => {
  return (
    <div className="flex flex-col items-center gap-y-3 ">
        <div className="rounded-full w-fit m-auto p-2.5 bg-lime-100 shadow-md">
            <img src={imgSource} alt={label} width={70} />
        </div>
        <h2 className="w-3/4 text-center uppercase font-bold text-sm">{label}</h2>
        <p className="text-xs w-11/12 text-justify">{description}</p>
    </div>
  );
};
export default CircleImage;
