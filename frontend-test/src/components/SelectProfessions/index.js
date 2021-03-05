import React from "react";

export const SelectProfessions = ({ lista, ...props }) => {
  const options = lista?.map((option, index) => {
    return (
      <option key={index} value={option.profissao}>
        {" "}
        {option.profissao}{" "}
      </option>
    );
  });
  return <select {...props}>{options}</select>;
};

export default SelectProfessions;
