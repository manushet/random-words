import './App.css';
import AddWordForm from './components/AddWordForm';
import { useState, useEffect } from 'react';
import WordList from './components/WordList';

function App() {

  const [words, setWords] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }  

  const loadData = () => {
    fetch("https://readu.site/cgi-bin/words-reader.php", { method: "GET" })
    .then(res => {
      //console.log(res);
      if (res.ok) {
        const text = res.text();
        return text;
      }
    })
    .then(text => {
      if (text) {
        let arr = text.split(/\s+/);
        arr = arr.filter(word => word.trim().length > 0);
        shuffleArray(arr);
        setWords(arr);
      }
    })
    .catch(err => console.error(err));
  }

  useEffect(() => {
    loadData();
  }, []);

  const onWordAdd = (word) => {
    fetch("https://readu.site/cgi-bin/words-handler.php", { 
      method: "POST", 
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },      
      body: new URLSearchParams({
        'word': word,
      })
    })
    .then(res => {
      loadData();
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="container">
      <AddWordForm onWordAdd={onWordAdd}/>
      <WordList words={words}/>
    </div>
  );
}

export default App;
