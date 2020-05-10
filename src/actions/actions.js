const setLists = lists => {
  return {
    type: "SET_LISTS",
    lists
  }
}

const setColors = colors => {
  return {
    type: "SET_COLORS",
    colors
  }
}

const addListItem = (name, colorId) => {
  return {
    type: "ADD_LIST_ITEM",
    name,
    colorId
  }
}

const removeListItem = id => {
  return {
    type: "REMOVE_LIST_ITEM",
    id
  }
}

const editListTitle = (id, title) => {
  return {
    type: "EDIT_LIST_TITLE",
    id,
    title
  }
}

const addTodoItem = (listId, task) => {
  return {
    type: "ADD_TODO_ITEM",
    listId,
    task
  }
}

const removeTodoItem = (id, listId) => {
  return {
    type: "REMOVE_TODO_ITEM",
    id,
    listId
  }
}

const toggleCompleteTodoItem = (id, listId) => {
  return {
    type: "TOGGLE_COMPLETE_TODO",
    id,
    listId
  }
}

const setActiveList = item => {
  return {
    type: "SET_ACTIVE_LIST",
    item
  }
}

export {
  setLists,
  setColors,
  addListItem,
  removeListItem,
  editListTitle,
  addTodoItem,
  removeTodoItem,
  toggleCompleteTodoItem,
  setActiveList
}