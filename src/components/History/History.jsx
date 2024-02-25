// eslint-disable-next-line no-unused-vars
import React from 'react';
import css from "./History.module.css"

console.log(123)

const History = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tac}>
        <tr className={css.tr}>
          <th className={css.par}>Type</th>
          <th className={css.par}>Amount</th>
          <th className={css.par}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency}, index) => (
          <tr key={id} className={index % 2 === 0 ? css.trodd : css.treven}>
            <td className={css.paragraf}>{type}</td>
            <td className={css.paragraf}>{amount}</td>
            <td className={css.paragraf}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default History;
