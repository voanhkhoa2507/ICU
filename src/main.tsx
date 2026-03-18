import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {DemoAuthProvider} from './contexts/DemoAuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DemoAuthProvider>
      <App />
    </DemoAuthProvider>
  </StrictMode>,
);
