import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from "@material-ui/core";
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';

function App() {
  return (
    <BrowserRouter>

      <Header />
      
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={ Home } exact />
            <Route path="/search" component={ Search } />
            <Route path="/movies" component={ Movies } />
            <Route path="/series" component={ Series } />
          </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation />

    </BrowserRouter>
  );
}

export default App;
