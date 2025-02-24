import React, { useState, useEffect } from 'react';

const Task2 = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);  
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>User List</h1>
      
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {loading && <p>Loading...</p>}

      {!loading && filteredUsers.length > 0 ? (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <p><strong>{user.name}</strong></p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No users found.</p>
      )}
    </div>
  );
};

export default Task2;
