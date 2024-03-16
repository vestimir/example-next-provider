import React from "react";
import APIContext from "./APIContext";

const useData = (key) => {
  const ctx = React.useContext(APIContext);
  const result = ctx[key];

  return result;
};

export default useData;
