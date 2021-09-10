import React, { useContext, useEffect } from "react";

import UserContext from "../context/User/UserContext";

function UserList() {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {users.map((user) => (
        <a
          onClick={() => getProfile(user.id)}
          className="list-group-item list-group-item-action d-flex align-items-center justify-content-start flex-row"
          href="#!"
          key={user.id}
        >
          <img
            className="img-floud pr-4 rounded-circle d-block"
            width="70"
            src={user.avatar}
          />
          <p className="pl-4">{`${user.first_name} ${user.last_name}`}</p>
        </a>
      ))}
    </div>
  );
}

export default UserList;
