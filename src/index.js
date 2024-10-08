import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import Checkbox from './components/checkbox';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Checkbox labelActive="Active" labelInactive="Inactive" />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
