import React from "react";
import { Table, Spinner } from "reactstrap";

function GeneralTable(props) {
  if (props.tableType.length === 0) {
    return <Spinner></Spinner>;
  }
  let keys = Object.keys(props.tableType[0]);

  return (
    <Table responsive striped>
      <thead>
        <tr>
          {keys.map((tableKey, i) => {
            return <th key={i}>{tableKey}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.tableType.map((attribute, i) => {
          return (
            <tr key={i}>
              {keys.map((tableKey, j) => {
                return <td key={j}>{attribute[tableKey]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default GeneralTable;
