import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [allSelected, setAllSelected] = useState([]);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const handleSingleSelection = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  const handleMultipleSelection = (id) => {
    if (allSelected.includes(id)) {
      setAllSelected(allSelected.filter((item) => item !== id));
    } else {
      setAllSelected([...allSelected, id]);
    }
  };

  return (
    <>
      <button
        className="bg-orange-400 p-2 m-2 radius-2 flex flex-col justify-center flex-wrap content-center"
        onClick={() => {
         setMultipleSelection((prev) => !prev);
         setSelected(null);
         setAllSelected([]);
        }}
      >
        Enable/Disable MulipleSelection
      </button>
      <div className="flex flex-col justify-center flex-wrap content-center">
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <div className="w-[750px]" key={item.id}>
                <div
                  className="flex m-2 p-2 bg-blue-400"
                  onClick={() => {
                    if (multipleSelection) {
                      handleMultipleSelection(item.id);
                    } else {
                      handleSingleSelection(item.id);
                    }
                  }}
                >
                  <h3 className="font-mono">{item?.question}</h3>
                  <span className="content-end items-end">+</span>
                </div>
                {multipleSelection ? (
                  allSelected.includes(item.id) ? (
                    <div className="p-1 bg-blue-200 m-[0.45rem]">
                      <p className="font-mono">{item?.answer}</p>
                    </div>
                  ) : null
                ) : selected === item.id ? (
                  <div className="p-1 bg-blue-200 m-[0.45rem]">
                    <p className="font-mono">{item?.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
      </div>
    </>
  );
}
