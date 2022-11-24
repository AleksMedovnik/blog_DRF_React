import './App.css';
import 'antd/dist/antd.min.css';
import CustomLayout from './containers/Layout';
import BaseRouter from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
