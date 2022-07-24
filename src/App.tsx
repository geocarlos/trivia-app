import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import Home from './components/Home';
import Loading from './components/Loading';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { AppContext } from './context/AppContext';

function App() {
  const { state } = useContext(AppContext);
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={state.loading ? <Loading /> : <Home />} />
        <Route path="/quiz/:question" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
