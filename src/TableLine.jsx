export default function TableLine(props) {
  return (
    <div className="flex pb-2 font-semibold text-gray-700">
      <div className="pr-1">
        <p>{props.name}</p>
      </div>

      <div className="flex-1 min-w-[28px] flex items-start">
        <span className="block w-full border-black border-b border-dashed -mt-1 print:border-b print:border-dashed">
           
        </span>
      </div>

      <div className="min-w-max pl-1 flex">
        <p className="">R$ {props.price}</p>
      </div>
    </div>
  );
}
