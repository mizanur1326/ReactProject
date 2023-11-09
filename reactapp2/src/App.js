import './App.css';

function getTitle(title){
  return title;
}

const number = [5, 10, 15, 20, 25];
function App() {
  const title = "React";
  return (
    <div className="App">
      <h1>{getTitle("Hey")} World</h1>
      <Search/>
      <hr />
      <h2>Numbers from array</h2>
      {number.map(function(num){
        return <span>{num}</span>
      })}
      <hr />
      <h2>Numbers from array by ol li default</h2>
      <List/>

      <hr />

    </div>
  );
}

function List(){
  return (
    <ol>
      {number.map(function(num){
        return<li>{num}</li>
      })}
    </ol>
  )
};

function Search(){
  return (
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    </div>
  )
}
export default App;
