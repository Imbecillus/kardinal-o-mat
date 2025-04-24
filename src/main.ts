import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const appContainer = document.getElementById('app');

if (appContainer) {
  appContainer.innerHTML = '';
}

const app = mount(App, {
  target: appContainer!,
})

export default app
