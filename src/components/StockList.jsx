import React from "react";

export const StockList = (props) => {
  const { stockList, onClickDelete } = props;
  return (
    <div className="stocklist-area ">
      <p className="title">買い物リスト</p>
      <ul>
        {stockList.map((stock) => {
          return (
            <div className="list-row">
              <li>{stock}</li>
              <button>修正</button>
              <button onClick={onClickDelete}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
