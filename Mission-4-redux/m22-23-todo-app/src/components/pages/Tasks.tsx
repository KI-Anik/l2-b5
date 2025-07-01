import { selectTask, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { AddTaskModal } from "../module/tasks/AddTaskModal";
import TaskCard from "../module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  const dispatch = useAppDispatch();

  const handleTabChange = (value : string) => {
    dispatch(updateFilter(value));

  };

  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="all" onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-4 gap-3">
            <TabsTrigger value="all">all</TabsTrigger>
            <TabsTrigger value="low">low</TabsTrigger>
            <TabsTrigger value="medium">medium</TabsTrigger>
            <TabsTrigger value="high">high</TabsTrigger>
          </TabsList>
        </Tabs>
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
