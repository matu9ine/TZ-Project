import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./src/App";
import { store } from "./src/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

console.log(App);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
