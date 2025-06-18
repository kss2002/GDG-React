import { useState, useEffect } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <h1>사용자 리스트</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}
              <br />({user.email})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
