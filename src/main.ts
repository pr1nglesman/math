import './app.css'
import App from './App.svelte'
import Calculator from './Calculator.svelte'
const app = new App({
  target: document.getElementById('app')!,
})

const calculator = new Calculator({
  target: document.getElementById('calculator-container')!,
})

export default { app, calculator };