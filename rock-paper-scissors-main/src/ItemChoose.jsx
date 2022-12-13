import React from "react";
import Item from "./Item";
import choices from "./choices";

export default function ItemChoose({ setChoosedItem }) {

  return (
    <>
    <div id="bg-triangle-container">
      <img  id="bg-triangle" src="/images/bg-triangle.svg" alt="traingle shape" />
      {choices.map((elem, index) =>
        <Item name={elem.name}
          figure={elem.figure} setChoosedItem={setChoosedItem} index={index}
          key={elem.name}
        />)}
        </div>
    </>
  )
}

