import React from "react";
import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 2 },
    { name: "Lime", color: "bg-green-500", score: 1 },
    { name: "Guava", color: "bg-green-500", score: 4 },
  ];

  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-2 m-2 ${fruit.color}`}></div>,
    },
    { label: "Score", render: (fruit) => fruit.score },
  ];
  return (
    <div>
      <Table data={data} config={config}></Table>
    </div>
  );
}

export default TablePage;
