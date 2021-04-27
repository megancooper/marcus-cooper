const Card = ({...rest}) => (
  <div
    className="w-full h-52 mt-2 rounded shadow-sm bg-white hover:bg-gray-100 cursor-pointer"
    {...rest}
  />
);

export default Card;
