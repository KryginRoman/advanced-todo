const initialState = {
  lists: [],
  colors: [],
  activeListItem: null
}

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_LISTS":
      return {
        ...state,
        lists: action.lists
      }
    case "SET_COLORS":
      return {
        ...state,
        colors: action.colors
      }
    case "EDIT_LIST_TITLE":
      const lists = state.lists.map(list => {
        if (list.id === action.id) {
          return {
            ...list,
            name: action.title
          }
        }
        return list
      })

      return {
        ...state,
        lists
      }
    case "ADD_TODO_ITEM":
      return {
        ...state,
        lists: state.lists.map(list => {
          if (list.id === action.listId) {
            return {
              ...list,
              tasks: [...list.tasks, action.task]
            }
          }
          return list;
        })
      }
    case "REMOVE_TODO_ITEM":
      return {
        ...state,
        lists: state.lists.map(list => {
          if (list.id === action.listId) {
            return {
              ...list,
              tasks: list.tasks.filter(task => task.id !== action.id)
            }
          }
          return list;
        })
      }
    case "SET_ACTIVE_LIST":
      return {
        ...state,
        activeListItem: action.id
      }
    case "TOGGLE_COMPLETE_TODO":
      const newList = state.lists.map(list => {
        if (list.id === action.listId) {
          const tasks = list.tasks.map(task => {
            if (task.id === action.id) {
              return {
                ...task,
                completed: !task.completed
              }
            }
            return task
          })
          return {
            ...list,
            tasks
          }
        }
        return list;
      })
      return {
        ...state,
        lists: newList
      }
    default:
      return state
  }
}

export {
  initialState,
  appReducer
}