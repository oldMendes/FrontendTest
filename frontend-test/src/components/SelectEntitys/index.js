import React from "react";

export const SelectEntitys = ({ lista, ...props }) => {
  const options = lista?.map((option, index) => {
    return (
      <option key={index} value={option.NomeFantasia}>
        {" "}
        {option.RazaoSocial}{" "}
      </option>
    );
  });
  return <select {...props}>{options}</select>;
};

export default SelectEntitys;
