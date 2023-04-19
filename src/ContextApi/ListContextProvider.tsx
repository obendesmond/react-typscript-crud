import React, { useState, createContext } from "react";
import uuid from "react-uuid";

export interface AppTypes {
  singleList: {
    id: string;
    title: string;
    todos: AppTypes["todo"][];
    editMode: boolean;
  };
  todo: {
    id: string;
    title: string;
    description: string;
    editMode: boolean;
    collapsed: boolean;
  };
  alert: {
    open: boolean;
    content: string;
    action: () => void;
  };
}

interface IProps {
  children: React.ReactNode;
}
interface ListContextTypes {
  list: AppTypes["singleList"][];
  setList?: React.Dispatch<React.SetStateAction<ListContextTypes["list"]>>;
  handleAddNewList: () => void;
  handleSaveListTitle: (title: string, id: string) => void;
  handleListSwitchEditMode: (id: string, value?: boolean) => void;
  handleDeleteList: (id: string) => void;
  handleAddTodo: (id: string) => void;
  handleTodoSwitchEditMode: (id: string) => void;
  handleSaveTodo: (id: string, title?: string, description?: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleCollapseAllTodo: (id: string, value?: boolean) => void;
  handleCollapseTodo: (id: string) => void;
  alert: AppTypes["alert"];
  setAlert?: React.Dispatch<React.SetStateAction<ListContextTypes["alert"]>>;
}

const defaultState = {
  list: [
    {
      id: uuid(),
      title: "Sample List Board Title",
      todos: [],
      editMode: true,
    },
  ],
  handleAddNewList: () => {},
  handleSaveListTitle: () => {},
  handleListSwitchEditMode: () => {},
  handleDeleteList: () => {},
  handleAddTodo: () => {},
  handleTodoSwitchEditMode: () => {},
  handleSaveTodo: () => {},
  handleDeleteTodo: () => {},
  handleCollapseAllTodo: () => {},
  handleCollapseTodo: () => {},
  alert: {
    open: false,
    content: "Sample alert text",
    action: () => {},
  },
};

const ListContext = createContext<ListContextTypes>(defaultState);

const ListContextProvider: React.FC<IProps> = ({ children }) => {
  const { list: defaultList, alert: defaultAlert } = defaultState;
  const [list, setList] = useState<ListContextTypes["list"]>(defaultList);
  const [alert, setAlert] = useState<AppTypes["alert"]>(defaultAlert);

  //   function to add new list to board
  const handleAddNewList = (): void => {
    const oldList = [...list].map(list => {
      list.editMode = false;
      return list;
    });

    const newList = {
      id: uuid(),
      title: "Sample List Board Title",
      todos: [],
      editMode: true,
    };

    setList([...oldList, newList]);
  };

  // function for saving title of a list card (id: list id)
  const handleSaveListTitle = (title: string, id: string): void => {
    const updatedList = list.map(list => {
      if (list.id === id) {
        list.title = title;
        list.editMode = false;
      }
      return list;
    });
    setList(updatedList);
  };

  // function for switching list to editMode (id: list id)
  const handleListSwitchEditMode = (id: string, value?: boolean): void => {
    const updatedList = list.map(list => {
      if (list.id === id) {
        list.editMode = value !== undefined ? value : !list.editMode;
      }
      return list;
    });
    setList(updatedList);
  };

  // function for deleting a List Board (id: list id)
  const handleDeleteList = (id: string): void => {
    const listToDelete = list.find(list => list.id === id);
    setAlert({
      content: `Delete "${listToDelete?.title}?"`,
      open: true,
      action: function () {
        const updatedList = list.filter(list => list.id !== id);
        setAlert({ ...alert, open: false });
        setList(updatedList);
      },
    });
  };

  // function for adding default todo to a list card (id: list id)
  const handleAddTodo = (id: string): void => {
    handleListSwitchEditMode(id, false); // switch off edit mode for list card

    const updatedList = list.map(singleList => {
      if (singleList.id === id) {
        const defaultTodo: AppTypes["todo"] = {
          id: uuid(),
          title: "Sample todo",
          description: "sample description",
          editMode: true,
          collapsed: false,
        };

        let newTodos = singleList.todos.map(todo => {
          todo.editMode = false; // switch off edit mode for other todos
          todo.collapsed = true; // collapse other todos
          return todo;
        });

        newTodos.push(defaultTodo); // add new todo
        singleList.todos = newTodos;
      }

      return singleList;
    });

    setList(updatedList);
  };

  // function for switching todo to edit mode (id: todo id)
  const handleTodoSwitchEditMode = (id: string): void => {
    const updatedList = list.map(list => {
      const updatedTodos = list.todos.map(todo => {
        if (todo.id === id) {
          todo.editMode = !todo.editMode;
        }
        return todo;
      });
      list.todos = updatedTodos;

      return list;
    });
    setList(updatedList);
  };

  // function for editing a specific todo in a list card (id: todo id)
  const handleSaveTodo = (
    id: string,
    title?: string,
    description?: string
  ): void => {
    const updatedList = list.map(list => {
      const updatedTodos = list.todos.map(todo => {
        if (todo.id === id) {
          todo.title = title || todo.title;
          todo.description = description || todo.description;
          todo.editMode = false;
        }
        return todo;
      });
      list.todos = updatedTodos;

      return list;
    });
    setList(updatedList);
  };

  // function for delete todo in a todoList (id: todo id)
  const handleDeleteTodo = (id: string): void => {
    const updatedList = list.map(list => {
      const updatedTodos = list.todos.filter(todo => todo.id !== id);

      list.todos = updatedTodos;

      return list;
    });
    setList(updatedList);
  };

  // function for collpasing all todos (id: list id)
  const handleCollapseAllTodo = (id: string, value?: boolean): void => {
    const updatedList = list.map(list => {
      if (list.id === id) {
        const updatedTodos = list.todos.map(todo => {
          todo.collapsed = value !== undefined ? value : true;
          todo.editMode = false;
          return todo;
        });
        list.todos = updatedTodos;
      }

      return list;
    });
    setList(updatedList);
  };

  //function for collapsing specific todo (id: todo id)
  const handleCollapseTodo = (id: string): void => {
    const updatedList = list.map(list => {
      const updatedTodos = list.todos.map(todo => {
        if (todo.id === id) {
          todo.collapsed = !todo.collapsed;
        }
        return todo;
      });

      list.todos = updatedTodos;
      return list;
    });
    setList(updatedList);
  };

  return (
    <ListContext.Provider
      value={{
        list,
        setList,
        handleAddNewList,
        handleSaveListTitle,
        handleListSwitchEditMode,
        handleDeleteList,
        handleAddTodo,
        handleTodoSwitchEditMode,
        handleSaveTodo,
        handleDeleteTodo,
        handleCollapseAllTodo,
        handleCollapseTodo,
        alert,
        setAlert,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export { ListContextProvider };
export default ListContext;
