import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import BuzzWords from './pages/buzzwords'
import StarWars from './pages/starwars'
import Emojis from './pages/emojis'
import FortuneCookies from './pages/fortune-cookies'

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">BuzzWords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  )
}

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/colors" component={Colors} />
          <Route path="/buzzwords" component={BuzzWords} />
          <Route path="/starwars" component={StarWars} />
          <Route path="/emojis" component={Emojis} />
          <Route path="/fortune-cookies" component={FortuneCookies} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
