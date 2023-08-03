import React from 'react';
import UserCard from '../atoms/user-card/UserCard';
import { User } from '../interfaces/User';

interface UserDetailsProps {
    user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="user-details">
      <UserCard user={user} />
    </div>
  );
};

export default UserDetails;
