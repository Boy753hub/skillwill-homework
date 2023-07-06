import styles from './styles/App.module.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import router from './router'

function App() {
  return (
    <div className={styles.App}>
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;
