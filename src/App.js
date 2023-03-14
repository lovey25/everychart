import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import { getData } from "./utils";

import { TypeChooser } from "./lib/helper";

export default function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);
  if (data == null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TypeChooser>{(type) => <Chart type={type} data={data} />}</TypeChooser>
    </>
  );
}
