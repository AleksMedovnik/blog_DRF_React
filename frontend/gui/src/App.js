import './App.css';
import 'antd/dist/antd.min.css';
import CustomLayout from './containers/Layout';
import ArticleList from './containers/ArticleListView';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <ArticleList />
      </CustomLayout>
    </div>
  );
}

export default App;
