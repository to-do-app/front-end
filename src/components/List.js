import React from 'react';

const Item = (props) => {
  const {item, index, doItem, deleteItem} = props
  return (
    <div>
      <input
        name="isDone"
        type="checkbox"
        checked={item.isDone}
        onChange={() => doItem(index)} />
      {item.text}
      <button onClick={() => deleteItem(index)}>
        x
      </button>
    </div>
  )
}

const List = (props) => {
  const {list, doItem, deleteItem} = props
  const htmlList = list.map((item, index) => {
    return (
      <Item
        key={index}
        item={item}
        index={index}
        doItem={doItem}
        deleteItem={deleteItem} />
    )
  })
  return (
    <div>
      {htmlList}
    </div>
  )
}

export default List;
