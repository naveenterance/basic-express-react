import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://basic-express-node.vercel.app/users"
      );
      const info = await response.json();
      setUsers(info);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const handlePostData = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "*",
      },
      body: JSON.stringify({
        name: "John Doe",
        email: "johndoe@example.com",
        age: 25,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
      <button onClick={handlePostData}>post</button>
    </div>
  );
};

export default App;
