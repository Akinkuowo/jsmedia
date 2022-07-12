// import './components/row.js';
import Row from './components/Row/row';
import request from './ApiRequest/requests';
import './App.css';
import Banner from './components/Banner/banner';
import Nav from './components/Navigation/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <div>
        <Row isLargeRow title="New Movies" fetchUrl={request.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchUrl={request.fetchTreanding}/>
        <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
      </div>
            
    </div>
  );
}

export default App;
