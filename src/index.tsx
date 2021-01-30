import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";
import JokeAppView from "./views";
import store from "store/store";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500i,600,700|Roboto+Mono:400,500,700,700i|Roboto:400,500,700,700i&display=swap');
body {
  height:100%;
  box-sizing:border-box;
  margin:0;
  padding:0;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
 
}
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <JokeAppView />
        </div>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
