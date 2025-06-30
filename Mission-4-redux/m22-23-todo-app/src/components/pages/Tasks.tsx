import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import { AddTaskModal } from "../module/tasks/AddTaskModal";
import TaskCard from "../module/tasks/TaskCard";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  console.log(tasks);

  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <AddTaskModal></AddTaskModal>
      </div>

      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
