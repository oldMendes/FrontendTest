import React from "react";

export const HealthPlansTable = ({ healthPlansList }) => {
  const rows = healthPlansList?.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.nome_plano_ans}</td>
        <td>{row.operadora}</td>
        <td>{row.plano}</td>
        <td>{row.abrangencia}</td>
        <td>{row.segmentacao}</td>
      </tr>
    );
  });

  return (
    <table className="table table-houver">
      <thead>
        <tr>
          <th scope="col"> Nome do plano </th>
          <th scope="col"> Operadora </th>
          <th scope="col"> Plano </th>
          <th scope="col"> Abrangência </th>
          <th scope="col"> Segmentação </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
export default HealthPlansTable;
