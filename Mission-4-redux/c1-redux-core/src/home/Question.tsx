import { useAppSelector } from "@/redux/hook";

export default function Question() {
  const { value } = useAppSelector((state) => state.quiz);
  console.log(value);
  
  return <div>Question</div>;
}
