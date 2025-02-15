
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskProvider from './context/TaskProvider.jsx'
import AuthProvider from './context/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(

 <AuthProvider>
 <TaskProvider>
    <App />
  </TaskProvider>
 </AuthProvider>
  
   
  
)
