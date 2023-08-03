// UserCard.tsx

import React from 'react';
import { User } from '../../interfaces/User';
import './UserCard.css'


interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        <img src={user.avatar} alt="Avatar" className="avatar-image" />
        <p className="avatar-text">Avatar</p>
      </div>
      <div className="user-info">
        <h3>{user.first_name} {user.last_name}</h3>
        <p>Email: {user.email}</p>
        <p>Género: {user.gender}</p>
        <p>Teléfono: {user.phone_number}</p>
        <p>Fecha de nacimiento: {user.date_of_birth}</p>
        <p>Cargo: {user.employment.title}</p>
        <p>Dirección: {user.address.city}, {user.address.street_name}</p>
        <p>Subscripción: {user.subscription.plan}</p>
      </div>
    </div>
  );
};

export default UserCard;
