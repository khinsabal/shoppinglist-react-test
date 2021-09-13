import React from "react";

export const InputStock = (props) => {
  const { stockText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        placeholder="買い物を入力"
        value={stockText}
        onChange={onChange}
      ></input>
      <button onClick={onClick}>作成</button>
    </div>
  );
};
