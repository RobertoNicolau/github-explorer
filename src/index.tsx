import { createRoot } from 'react-dom/client';
import {App} from './App';

/* render(<App />, document.getElementById('root')) */

const rootSelector = document.getElementById('root');
const root = createRoot(rootSelector!);
root.render(<App/>);