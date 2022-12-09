import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Spa from "./SPA/spa"
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Spa} />
        </Switch>
      </Router>
    </>
  )
}

export default App
