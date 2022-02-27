import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// 🔴Disney+ Clone - ReactJS Challenge (Learn Redux, React JS, Styled Components, and Firebase) | Day 1 | 3:14:03
