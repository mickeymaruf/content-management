import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: 'bg-slate-600 bg-opacity-50 text-slate-200',
        }}
      />
    </Provider>
  )
}

export default App
