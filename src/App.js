import * as React from "react";
import { Fragment } from "react";
import Music from "./components/Music";
import Pages from './Pages';


const App = () => {
  return (
    <Fragment>
      <Pages />
      <Music />
    </Fragment>
  );
}

export default App;
