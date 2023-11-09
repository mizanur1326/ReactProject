import './App.css';

const person = {
  name: "Mizanur Rahman",
  age: "26",
  email: "mizanur1326@gmail.com"
};



function App() {
  const title = "This is my title";
  const list = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
    ];
  return (
    <div>
      <h2>{title}</h2>
      <p>
        Les't Start Your Journey from Here! <br /> It's coming from app.js
      </p>
      <p>Name : {person.name}</p>
      <p>email : {person.email}</p>

      <table border={1}>
        <th>
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>URL</td>
          </tr>
        </th>

        <tbody>

              {list.map(function (item) {
                return <tr>{item.title}</tr>;
              })}
        </tbody>
      </table>
    </div>
  );
}




export default App;
