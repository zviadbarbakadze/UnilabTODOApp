import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "./Auth";
import deleteIcon from "../assets/delete.svg";
import doneIcon from "../assets/done.svg";

export default function MakeTodoInput() {
  const { todo, setTodo, newTask, setNewTask } = useContext(AuthContext);
  const inputRef = useRef(null);

  const addTask = () => {
    const task = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      taskName: newTask,
      done: false,
    };
    const newTodo = [...todo, task];
    setTodo(newTodo);

    localStorage.setItem("task", JSON.stringify([...todo, task]));
    inputRef.current.value = "";
  };

  const deleteTask = (id) => {
    const newTodoList = todo.filter((task) => task.id !== id);
    localStorage.setItem("task", JSON.stringify([...newTodoList]));
    setTodo(newTodoList);
  };
  const markTaskAsDone = (id) => {
    const updatedTodoList = todo.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    localStorage.setItem("task", JSON.stringify([...updatedTodoList]));
    setTodo(updatedTodoList);
  };

  useEffect(() => {
    const data = localStorage.getItem("task");
    const info = JSON.parse(data);
    if (info !== null && info.length > 0) {
      setTodo(info);
    }
  }, [setTodo]);

  return (
    <>
      <Container>
        <Header>Add Your Daily Tasks</Header>
        <Form>
          <Input
            type="text"
            placeholder="My Tasks"
            onChange={(e) => setNewTask(e.target.value)}
            ref={inputRef}
          />
          <Button onClick={() => addTask()}>Add</Button>
        </Form>

        {todo &&
          todo.map((task) => {
            return (
              <TaskContainer key={task.id} className={task.done ? "done" : ""}>
                <TaskName>{task.taskName}</TaskName>
                <IconContainer>
                  <IconImage
                    src={doneIcon}
                    alt="done"
                    onClick={() => markTaskAsDone(task.id)}
                  />
                  <IconImage
                    src={deleteIcon}
                    alt="delete"
                    onClick={() => deleteTask(task.id)}
                  />
                </IconContainer>
              </TaskContainer>
            );
          })}
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 487px;
  height: 76px;
  background-color: #e6ebff;
  border-radius: 4px;
  font-size: 22px;
  padding: 10px;
  border: none;
  outline: none;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    width: 350px;
  }
  @media (max-width: 500px) {
    width: 250px;
    height: 50px;
  }
`;
const Header = styled.h2`
  color: #000000;
  font-weight: SemiBold;
  font-size: 42px;
  text-align: center;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
const Button = styled.button`
  background-color: #5efc8d;
  width: 108px;
  height: 76px;
  font-size: 32px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 50px;
    font-size: 20px;
    height: 50px;
  }
`;
const Form = styled.form`
  display: flex;
`;

const TaskContainer = styled.div`
  width: 595px;
  height: 54px;
  background-color: #000000;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &.done {
    background-color: #e6ebff;
  }
  @media (max-width: 768px) {
    width: 455px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;
const IconContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
`;
const IconImage = styled.img`
  width: 25px;
  cursor: pointer;
`;
const TaskName = styled.p`
  color: white;
  font-weight: Light;
  font-size: 22px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
