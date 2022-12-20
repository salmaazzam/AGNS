import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AdminsContextProvider } from './context/AdminsContext';
import { InstructorsContextProvider } from './context/InstructorsContext';
import { CorporateTraineesContextProvider } from './context/CorporateTraineesContext';
import { CoursesContextProvider } from './context/CoursesContext';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import {IndividualContextProvider} from './context/IndividualContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthContextProvider>
   <AdminsContextProvider>
      <InstructorsContextProvider>
        <CorporateTraineesContextProvider>
          <CoursesContextProvider>
            <IndividualContextProvider>
    <App />
    </IndividualContextProvider>
          </CoursesContextProvider>
        </CorporateTraineesContextProvider>
      </InstructorsContextProvider>
    </AdminsContextProvider>
   </AuthContextProvider>
  </React.StrictMode>
);