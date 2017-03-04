import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import Root from './components/Route'

let store = createStore(todoApp)

function run() {
  render(
    <Root store={store}/>,
    document.querySelector('#root')
  )
}

// avoid  _registerComponent(...): Target container is not a DOM element.
const loadedStates = ['complete', 'loaded', 'interactive'];
if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
