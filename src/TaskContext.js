import { useReducer, createContext, useContext } from "react";

const TaskContext = createContext(null);

const TaskReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.splice(action.id, 1);
    default:
      return state;
  }
};

const useTasks = useContext(TaskContext);
export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default useTasks;
