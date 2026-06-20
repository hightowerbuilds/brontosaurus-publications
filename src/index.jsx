/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'
import './index.css'

import Home from './pages/Home'
import Landing from './pages/Landing'
import ZineOne from './pages/ZineOne'
import ZineTwo from './pages/ZineTwo'

render(
  () => (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/landing" component={Landing} />
      <Route path="/zine-one" component={ZineOne} />
      <Route path="/zine-two" component={ZineTwo} />
    </Router>
  ),
  document.getElementById('root'),
)
