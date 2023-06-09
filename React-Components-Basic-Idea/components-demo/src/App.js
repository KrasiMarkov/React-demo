
import './App.css';
import { Header } from './Header';
import { BookList } from './BookList';
import { Timer } from './Timer';
import { Clicker } from './Clicker';
import { Counter } from './Counter';

function App() {

  let books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Header title="Hello from JSX"/>
        <Clicker/>
        <Clicker/>
        <Counter/>
        <BookList books={books}/>
        <Timer start={1}/>
        <Timer start={15}/>
        <Timer start={30}/>
      </header>
    </div>
  );
}

export default App;
