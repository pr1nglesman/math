import './app.css'
import Manage from './Manage.svelte';

const app = new Manage({
  target: document.getElementById('app')!,
})
export default { app };