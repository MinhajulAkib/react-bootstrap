import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './Components/News/News';

const App = () => {
  const [news, setNews] = useState([])
  useEffect(() =>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=ca0f78879475413da777cf542f0b8224')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
  return (
    <div className="App">
      {
       news.length === 0?
        <Spinner animation="border" />
        :
      <Row xs={1} md={3} className="g-4">
        {
          news.map (nw => <News news = {nw}></News>)
        }
     </Row>
     }
    </div>
  );
}

export default App;
