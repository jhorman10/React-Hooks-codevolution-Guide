import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HookDataFetching() {
  const [data, setData] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(''); //set initial state for the input value

  //this useEffect will run after the component is rendered
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => setData(res.data))
      .catch((err) => console.error('Error in HookDataFetching file', err));
  }, []);

  //this useEffect will run only when the id changes
  useEffect(() => {
    id &&
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          setPost(res.data);
        })
        .catch((err) =>
          console.error('Error in HookDataFetching file post by Id', err)
        );
  }, [id]);

  const handlerInputChange = (e) => {
    setId(e.target.value);
  };

  //remember initialize the value using the state value, not the value of the input
  //else in console you will see a message for controlled and uncontrolled input
  return (
    <div>
      <h1>Search by id:</h1>
      <input type="number" value={id} onChange={handlerInputChange} />
      {id ? (
        <div>
          {' '}
          <p> * {post.title} </p>
          <p> - {post.body}</p>{' '}
        </div>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HookDataFetching;
