import { FilePenLine, Trash } from "lucide-react";
import { MainTemplate } from "../../components/MainTemplate";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { addTaskIcon, xIcon } from "../../assets";

export function Tasks() {
  interface tasks {
    texto: string;
    completa: boolean;
  }

  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<tasks[]>(() => {
    const tarefasSalvas = localStorage.getItem("Tarefas");
    return tarefasSalvas
      ? JSON.parse(tarefasSalvas)
      : [
          {
            texto: "",
            completa: false,
          },
        ];
  });
  const [editTask, setEditTask] = useState({
    edit: false,
    task: "",
    completa: false,
  });

  function clearInput() {
    setInput("");
  }

  function addTask() {
    if (!input) {
      alert("Preecher com o nome da tarefa!");
      return;
    }

    if (editTask.edit) {
      handleSaveEditTask();
      return;
    }
    setTasks((tasks) => [
      ...tasks,
      {
        texto: input,
        completa: false,
      },
    ]);
    clearInput();
  }

  function handleEditTask(item: tasks) {
    setInput(item.texto);
    setEditTask({
      edit: true,
      task: item.texto,
      completa: item.completa,
    });
    inputRef.current?.focus();
  }

  function handleSaveEditTask() {
    const findIndexTask = tasks.findIndex(
      (task) => task.texto === editTask.task
    );
    const allTasks = [...tasks];

    allTasks[findIndexTask] = { texto: input, completa: editTask.completa };
    setTasks(allTasks);

    setEditTask({
      edit: false,
      task: "",
      completa: false,
    });

    setInput("");
  }

  function handleDeleteTask(item: string) {
    const tasksWithoutTheDeletedOne = tasks.filter(
      (task) => task.texto !== item
    );
    setTasks(tasksWithoutTheDeletedOne);
    console.log(tasks);
  }

  function handleCheckBox(item: tasks, e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      const checkedTask = tasks.findIndex((task) => task.texto === item.texto);
      const allTasks = [...tasks];
      allTasks[checkedTask] = { texto: item.texto, completa: true };
      setTasks(allTasks);
      return;
    } else {
      const checkedTask = tasks.findIndex((task) => task.texto === item.texto);
      const allTasks = [...tasks];
      allTasks[checkedTask] = { texto: item.texto, completa: false };
      setTasks(allTasks);
      return;
    }
  }

  useEffect(() => {
    if (tasks.length !== 0) {
      localStorage.setItem("Tarefas", JSON.stringify(tasks));
      return;
    }

    localStorage.setItem("Tarefas", JSON.stringify(tasks));
    return;
  }, [tasks]);

  const completedTasksStyle = {
    textDecoration: "line-through",
    opacity: 0.5,
    fontStyle: "italic",
  };

  const notCompletedTaskStyle = {
    textDecoration: "none",
    opacity: 1,
    fontStyle: "none",
  };

  return (
    <MainTemplate>
      <div className={styles.container}>
        <div className={styles.taskInputSection}>
          <div className={styles.taskAddContainer}>
            <input
              type="text"
              className={styles.taskName}
              placeholder="nome da tarefa..."
              maxLength={20}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
              ref={inputRef}
            />
            <span className={styles.xOfTheQuestion}>
              <img onClick={clearInput} src={xIcon} alt="icone de um x" />
            </span>
          </div>
          <img
            src={addTaskIcon}
            alt="icone de adicionar tarefa"
            className={styles.btnAddTask}
            onClick={addTask}
          />
        </div>
        {tasks.length === 0 ? (
          <h4 className={styles.noTaskAdded}>Você não possui tarefas</h4>
        ) : null}

        {tasks &&
          tasks.map((item) => (
            <section key={item.texto} className={styles.tasksSection}>
              <div className={styles.taskContainer}>
                <span className={styles.taskComplete}>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      handleCheckBox(item, e);
                    }}
                    checked={item.completa}
                  />
                </span>
                <h4
                  className={styles.taskTitle}
                  style={
                    item.completa === true
                      ? completedTasksStyle
                      : notCompletedTaskStyle
                  }
                >
                  {item.texto}
                </h4>
                <span onClick={() => handleEditTask(item)}>
                  <FilePenLine className={styles.taskEdit} />
                </span>
                <span onClick={() => handleDeleteTask(item.texto)}>
                  <Trash className={styles.taskDelete} />
                </span>
              </div>
            </section>
          ))}
      </div>
    </MainTemplate>
  );
}
