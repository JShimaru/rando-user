import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import UserSummary from './components/UserSummary';
import fetchUser from './services/rando_user';


function App(){

    const [flag, setFlag] = useState(false)

    const [currentUser, setCurrentUser] = useState([])

    useEffect(()=> {      
    refreshUser()
   },[])

    async function refreshUser(){
       try {
        const response = await fetchUser()
        setCurrentUser(response)
        setFlag(true)
       }catch (error) {
        setFlag(false)
          console.error(error)      
       }
     }

   console.log(currentUser)

  return (
    <div className="App">
      <Header />
      <button onClick={refreshUser}>Refresh Users</button>
      <UserSummary randomUser={currentUser} flag={flag} />
    </div>
  );
}

export default App;
