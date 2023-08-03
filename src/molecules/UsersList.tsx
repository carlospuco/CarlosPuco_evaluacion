import React from 'react';
import UserCard from '../atoms/user-card/UserCard';
import { User } from '../interfaces/User';
import './UsersList.css'

interface UserListProps {
  users: User[] | undefined;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  if (!users || users.length === 0) {
    return <p className='no-loading'>Usuario No Encontrado</p>;
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
