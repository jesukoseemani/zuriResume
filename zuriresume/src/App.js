import GlobalStyles from "./components/Globalstyles";

import {Route, Switch} from "react-router-dom"

import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
     <GlobalStyles />
     
     <Switch>
       <Route path="/" exact>
        <HomePage />
       </Route>
     </Switch>
    
    </>
  );
}

export default App;
