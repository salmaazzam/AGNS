import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AdminsContextProvider } from './context/AdminsContext';
import { InstructorsContextProvider } from './context/InstructorsContext';
import { CorporateTraineesContextProvider } from './context/CorporateTraineesContext';
import { CoursesContextProvider } from './context/CoursesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminsContextProvider>
      <InstructorsContextProvider>
        <CorporateTraineesContextProvider>
          <CoursesContextProvider>
    <App />
          </CoursesContextProvider>
        </CorporateTraineesContextProvider>
      </InstructorsContextProvider>
    </AdminsContextProvider>
  </React.StrictMode>
);


