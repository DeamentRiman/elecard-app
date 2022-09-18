import '../App/App.scss';
import { Header } from '../components/Header/index';
import { Main } from '../components/Main/index';
import { Footer } from '../components/Footer/index';

function App() {
  return (
    <div className="AppBody">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
