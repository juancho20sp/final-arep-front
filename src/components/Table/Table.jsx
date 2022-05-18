import React from 'react';
import './Table.css';

const Table = ({ tableData }) => {
  return (
    <div className='table-container'>
      <h2>Resultados del análisis</h2>
      <table>
        <tbody>
          {!!tableData &&
            Object.keys(tableData).map((objectKey) => (
              <tr key={objectKey}>
                <th>{tableData[objectKey].title}</th>
                <td>{tableData[objectKey].value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
