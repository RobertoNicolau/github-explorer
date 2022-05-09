import { createRoot } from "react-dom/client";
import { App } from './App';

const rootSelector = document.getElementById('root');
const root = createRoot(rootSelector);
root.render(<App tab="home"/>);

/* const user = {
    name: 'Roberto',
}
console.log(user.address?.street) */