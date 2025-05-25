import { NavLink } from "react-router-dom";

const ImageButton = ({imgSource, label, to, isNav}) => {
  return (
    <div className="relative w-[300px] h-[200px]">
      <img
        src={imgSource}
        alt={label}
        className="w-full h-full object-cover rounded-md shadow-md"
      />
      {
        isNav ?
        <NavLink to={to} className="absolute uppercase bottom-[20%] left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-200 text-black font-bold rounded">
          {label}
        </NavLink>
        :
        <a href={to} className="absolute uppercase bottom-[20%] left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-200 text-black font-bold rounded">{label}</a>
      }
    </div>
  );
};
export default ImageButton;
