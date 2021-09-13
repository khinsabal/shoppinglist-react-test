import "./styles.css";
import React, { useState } from "react";
import { InputStock } from "./components/InputStock";
import { StockList } from "./components/StockList";

export const App = () => {
  const [txtStock, settxtStock] = useState([""]);
  const [lstStock, setlstStock] = useState([]);
  const onChangetxtStock = (event) => settxtStock(event.target.value);
  // 「作成」ボタンを押下後、入力した買い物名をリストに追加する。
  const onClickAdd = () => {
    const newStock = [...lstStock, txtStock]; //入力したデータをリストに追加
    setlstStock(newStock);
    settxtStock(""); //入力したデータをクリアする
  };
  // 「削除」ボタンを押下後、選択した行をリストから削除する。
  const onClickDelete = (index) => {
    const newlstStock = [...lstStock]; //リストからデータを設定する
    newlstStock.splice(index, 1); //リストから削除したいindex１行を取り除く
    setlstStock(newlstStock);
  };
  const onClickEdit = (index) => {
    /*const editStock = lstStock.map((stock) => {
      if (index === stock.index) {
        return { ...stock, name: "testing" };
      }
      return stock;
    });
    setlstStock(editStock);*/
  };
  return (
    <>
      <InputStock
        stockText={txtStock}
        onChange={onChangetxtStock}
        onClick={onClickAdd}
      />
      <StockList
        stockList={lstStock}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
      />
    </>
  );
};
