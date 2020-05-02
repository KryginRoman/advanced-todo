import axios from 'axios';

const rootPath = 'http://localhost:3001'; //This path depends on which port the json server is running on.

const getLists = () => {
  return axios.get(`${rootPath}/lists?_expand=color&_embed=tasks`)
}

const addListsItem = (name, colorId) => {
  return axios.post(`${rootPath}/lists`, {name, colorId})
}

const removeListsItem = id => {
  return axios.delete(`${rootPath}/lists/${id}`)
}

const getColors = () => {
  return axios.get(`${rootPath}/colors`)
}

const addTodoItem = (listId, text) => {
  return axios.post(`${rootPath}/tasks`, {text, listId, completed: false})
}

const removeTodoItem = id => {
  return axios.delete(`${rootPath}/tasks/${id}`)
}

const updateTodoItem = (id, options) => {
  return  axios.patch(`${rootPath}/tasks/${id}`, options)    
}

const updateListsItem = (id, options) => {
  return  axios.patch(`${rootPath}/lists/${id}`, options)  
}

export default {
  getLists,
  addListsItem,
  removeListsItem,
  getColors,
  addTodoItem,
  removeTodoItem,
  updateTodoItem,
  updateListsItem
}