import React from 'react'
import { BrowserRouter ,Route,Switch} from 'react-router-dom'
import CheckList from './components/CheckList'
import Questionnare from './components/Questionnare'
import Home from './components/Home';
import Layout from './layout/Layout';
import './app.css';

export default function App() {
  return (
  <BrowserRouter>
  <Layout>
    <Switch>
    <Route path="/" component={Home} exact/>
      <Route path="/checklist" component={CheckList} exact/>
      <Route path="/questionnare" component={Questionnare} exact/>
    </Switch>
    </Layout>
  </BrowserRouter>
  )
}
