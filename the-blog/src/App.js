import './App.css';

function App() {
  // These variables stated can also be referred to as Dynamic Values
  const title = 'Welcome to the New Blog';
  const likes = 50;
  // const person = {name: 'yoshi', age: 30}
  const link = 'https://www.google.com';
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        {/* <p>{person}</p> */}
        {/* Outputting a Number */}
        <p>{15}</p>
        {/* Outputting in a string, and the string must be within a "" */}
        <p>{"Hello All"}</p>
        {/* Outputting in array */}
        <p>[1,2,3,4,5]</p>
        {/* Outputting using evaluations */}
        <p>{Math.random() * 35}</p>
        
        {/* Outputting dynamic values as attribute values in element tags */}
        <a href={link}>Google Search</a>
      </div>
    </div>
  );
}

// You export your component created so it can be used elsewhere on another file
export default App;
