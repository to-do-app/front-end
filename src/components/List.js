import React from 'react';
import { Checkbox, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = (props) => {
  const {item, index, doItem, deleteItem} = props
  return (
    <div>
      <Checkbox
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        name="isDone"
        checked={item.isDone}
        onChange={() => doItem(index)}
      />
      <Typography variant="body1" display="inline">
        {item.text}
      </Typography>
      <IconButton aria-label="delete" onClick={() => deleteItem(index)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
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
        deleteItem={deleteItem}
      />
    )
  })
  return (
    <div>
      {htmlList}
    </div>
  )
}

export default List;
