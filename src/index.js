import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  contacts: [
    {
      id: '1',
      name: 'Адрей',
      surname: 'Сидоров',
      patronymic: 'Михаилович'
    },
    {
      id: '2',
      name: 'Мельникова',
      surname: 'Ксения',
      patronymic: 'Витальевна'

    },
    {
      id: '3',
      name: 'Лебедева',
      surname: 'Екатерина',
      patronymic: 'Сергеевна'
    }
  ],
  isActive: true
}
const reduser = (state = initialState, action) => {
  switch (action.type) {
    case 'addContact':
      return "";
    default:
      return state
  }
}
const store = createStore(reduser)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);