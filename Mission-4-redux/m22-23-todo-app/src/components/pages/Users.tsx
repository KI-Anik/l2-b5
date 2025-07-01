import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";
import AddUserModal from "../module/users/AddUserModal";
import UserCard from "../module/users/UserCard";

const Users = () => {
  const users = useAppSelector(selectUser);

  return (
    <div>
      <AddUserModal></AddUserModal>

      <div>
        {users.map((user) => (
          <UserCard
          key={user.id}
          user={user}
          ></UserCard>
        ))}
      </div>
    </div>
  );
};

export default Users;
