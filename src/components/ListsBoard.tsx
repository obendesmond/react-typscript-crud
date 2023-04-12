import React from "react";
import { AppTypes } from "../App";
import SingleList from "./SingleList";
import uuid from "react-uuid";

interface BoardTypes {
  Iprops: {
    lists: AppTypes["list"];
    setLists: React.Dispatch<React.SetStateAction<AppTypes["list"]>>;
  };
}

const ListsBoard: React.FC<BoardTypes["Iprops"]> = ({ lists, setLists }) => {
  // function for saving title of a list card
  const handleSaveListTitle = (title: string, id: string): void => {
    const updatedList = lists.map(list => {
      if (list.id === id) {
        list.title = title;
        list.editMode = false;
      }
      return list;
    });
    setLists(updatedList);
  };

  // function for switching list to editMode
  const handleListSwitchEditMode = (id: string, value?: boolean): void => {
    const updatedList = lists.map(list => {
      if (list.id === id) {
        list.editMode = value !== undefined ? value : !list.editMode;
      }
      return list;
    });
    setLists(updatedList);
  };

  // function for deleting a List Board
  const handleDeleteList = (id: string): void => {
    const listToDelete = lists.find(list => list.id === id);

    if (window.confirm(`Delete ${listToDelete?.title}?`)) {
      const updatedList = lists.filter(list => list.id !== id);
      setLists(updatedList);
    }
  };

  // function for adding default todo to a list card
  const handleAddTodo = (id: string): void => {
    handleListSwitchEditMode(id, false); // switch off edit mode for list card

    const updatedList = lists.map(list => {
      if (list.id === id) {
        const defaultTodo: AppTypes["todo"] = {
          id: uuid(),
          title: "Sample todo",
          description: "sample description",
          editMode: true,
        };

        let newTodos = list.todos.map(todo => {
          todo.editMode = false; // switch off edit mode for other todos
          return todo;
        });

        newTodos.push(defaultTodo); // add new todo
        list.todos = newTodos;
      }

      return list;
    });

    setLists(updatedList);
  };

  // function for switching todo to edit mode
  const handleTodoSwitchEditMode = (id: string): void => {
    const updatedList = lists.map(list => {
      const updatedTodos = list.todos.map(todo => {
        if (todo.id === id) {
          todo.editMode = !todo.editMode;
        }
        return todo;
      });
      list.todos = updatedTodos;

      return list;
    });
    setLists(updatedList);
  };

  // function for editing a specific todo in a list card
  const handleSaveTodo = (
    id: string,
    title?: string,
    description?: string
  ): void => {
    const updatedList = lists.map(list => {
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
    setLists(updatedList);
  };

  // function for delete todo in a todoList
  const handleDeleteTodo = (id: string): void => {
    const updatedList = lists.map(list => {
      const updatedTodos = list.todos.filter(todo => todo.id !== id);

      list.todos = updatedTodos;

      return list;
    });
    setLists(updatedList);
  };

  const listsMap = lists.map(list => (
    <SingleList
      key={list.id}
      singleList={list}
      saveListTitle={handleSaveListTitle}
      listSwitchEditMode={handleListSwitchEditMode}
      deleteList={handleDeleteList}
      addTodo={handleAddTodo}
      todoSwitchEditMode={handleTodoSwitchEditMode}
      saveTodo={handleSaveTodo}
      deleteTodo={handleDeleteTodo}
    />
  ));

  return <div className={`p-10 flex flex-wrap gap-10`}>{listsMap}</div>;
};

export default ListsBoard;
