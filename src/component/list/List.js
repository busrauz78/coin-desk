import React from "react";

const List = ({ rates }) => {
  return (
    <div>
      <table className="highlight responsive-table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Spot</th>
          </tr>
        </thead>

        <tbody>
          {rates.map(function(rate, index) {
            return (
              <tr key={index}>
                <td>{rate.base}</td>
                <td>{rate.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
