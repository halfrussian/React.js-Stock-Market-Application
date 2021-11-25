const { useState, useEffect } = React

// custom hook for mocking API data
const useTypicode = () => {
  const [response, setResponse] = useState(null);

  // only runs once
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setResponse(() => json.map(({id, name, username, email}) => ({id, name, username, email})))
      })
  }, []);

  return response;
};

// AddUser doesn't know what is happening when the
// button is clicked: only sends the current state
// as an argument for the function it received
// in props
const AddUser = (props) => {
  const [name, setName] = useState(null)
  const [userName, setUserName] = useState(null)
  const [email, setEmail] = useState(null)
  
  return (
    <div>
      Name: <input type="text" onInput={(e) => setName(e.target.value)}/><br />
      Username: <input type="text" onInput={(e) => setUserName(e.target.value)}/><br />
      Email: <input type="text" onInput={(e) => setEmail(e.target.value)}/><br />
      <button
        onClick={() => props.addUser({name, userName, email})}
      >
        ADD USER +
      </button>
    </div>
  )
}

// Table doesn't "know" where the data comes from
// API, user created - doesn't matter
const Table = (props) => {
  const headers = Object.keys(props.userList[0])
  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
      {props.userList.map(user => <tr key={user.id}>{Object.values(user).map((val, i) => <td key={user.id + i}>{val}</td>)}</tr>)}
      </tbody>
    </table>
  )
}

// App doesn't know how the custom data is being
// entered or how it is displayed - only knows
// how to update the two lists it handles and
// where to pass them on
const App = () => {
  const apiUsers = useTypicode()
  const [users, setUsers] = useState([])
  
  const addUser = (userData) => {
    setUsers(prevState => [
      ...prevState,
      {
        id: Date.now(),
        ...userData
      }
    ])
  }
  
  return (
    <div>
      <AddUser
        addUser={(userData) => addUser(userData)}
      /><br />
      {
        apiUsers &&
          <Table
            userList={[...apiUsers, ...users]}
          />
      }
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);






  
  
  document.querySelector(".searchButton").addEventListener("click", function () {
    news.search();
  });
  
  
  //When you click enter on your input it searches 
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        news.search();
      }
    });
  
  
  
  //handles the 1st full story click button
  function newWindow() {
        
        const input = document.getElementById("searchBar")
          fetch(
            'https://api.currentsapi.services/v1/latest-news?&keywords='+
             input.value +
            "&apiKey=1YP7UBvFk7kGySFoTP-UlCjC88qsE7PQExPbH10M5JbR3NhM"
          )
          .then(response => response.json())
          .then((data) => {
              window.open(data.news[0].url);
          })
          .catch((error) => console.error("oops:",error));
      }
  
  
  
  //handles the 2nd full story click button
  
  function newWindow2() {
        
        const input = document.getElementById("searchBar")
          fetch(
            'https://api.currentsapi.services/v1/latest-news?&keywords='+
             input.value +
            "&apiKey=1YP7UBvFk7kGySFoTP-UlCjC88qsE7PQExPbH10M5JbR3NhM"
          )
          .then(response => response.json())
          .then((data) => {
              window.open(data.news[1].url);
          })
          .catch((error) => console.error("oops:",error));
      }
  
  //handles the 3rd full story click button
  function newWindow3() {
        
        const input = document.getElementById("searchBar")
          fetch(
            'https://api.currentsapi.services/v1/latest-news?&keywords='+
             input.value +
            "&apiKey=1YP7UBvFk7kGySFoTP-UlCjC88qsE7PQExPbH10M5JbR3NhM"
          )
          .then(response => response.json())
          .then((data) => {
              window.open(data.news[2].url);
          })
          .catch((error) => console.error("oops:",error));
      }