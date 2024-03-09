import { useEffect, useState } from "react";
import "./friends.css";
import Friend from "./Friend";

export default function Friends() {
  // Declare a state to hold the data
  const [friends, setFriends] = useState([]);

  //   useEffect with callback and dependency array
  useEffect(() => {
    //   use fetch to load data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      //   set loaded data to the state
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="box">
      <h3>Friends: {friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
