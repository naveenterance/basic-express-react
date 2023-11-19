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

  // const handlePostData = () => {
  //   fetch("http://localhost:3000/users", {
  //     method: "POST",

  //     headers: {
  //       "Content-Type": "application/json",
  //       "access-control-allow-origin": "*",
  //       "Access-Control-Allow-Headers": "Content-Type, Authorization",
  //       "Access-Control-Allow-Methods": "*",
  //     },
  //     body: JSON.stringify({
  //       name: "John Doe",
  //       email: "johndoe@example.com",
  //       age: 25,
  //     }),
  //   })
  //   if (response.ok) {
  //     console.log('Value posted to the API successfully!');
  //     // Handle successful response here
  //   } else {
  //     console.error('Failed to post value to the API:', response.status);
  //     // Handle error response here
  //   }
  // } catch (error) {
  //   console.error('Failed to post value to the API:', error);
  //   // Handle other errors here
  // }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://basic-express-node.vercel.app/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          body: JSON.stringify({
            name: "John Doe",
            email: "johndoe@example.com",
            age: 25,
          }),
        }
      );

      if (response.ok) {
        console.log("Value posted to the API successfully!");
        // Handle successful response here
      } else {
        console.error("Failed to post value to the API:", response.status);
        // Handle error response here
      }
    } catch (error) {
      console.error("Failed to post value to the API:", error);
      // Handle other errors here
    }
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
      <button onClick={handleSubmit}>post</button>
    </div>
  );
};

export default App;
