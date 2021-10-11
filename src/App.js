
import { Provider } from 'react-redux';
import FormScreen from './components/formPage';
import store from './Store';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
    <Provider store={store}>
      <div className="App">
        <FormScreen />
       
      </div>
    </Provider>
    <ToastContainer/>
</>
  );
}

export default App;
