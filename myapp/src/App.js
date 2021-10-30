const App = () => {

  const chores = ["Item 1" , "Item 2" , "Item 3"]


  return (
    <div className="App">
      <nav>
      <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Website</a>        
      </nav>
      <div className="container">
      <ul>
          {
            chores.map(chore => <li>{chore}</li>)
          }
        </ul>


      </div>
      <footer>
        <a href="#">Github</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">Linkedin</a>

      </footer>
    </div >
  );
}



export default App;
