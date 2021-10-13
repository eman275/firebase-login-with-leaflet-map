import React from 'react';
import { useEffect, useState } from 'react';
import MyMap from './components/MyMap';
import Signin from './components/Signin';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])
  return (
    <div className="App">
      {user ? <MyMap /> : <Signin />}

    </div>
  );
}

export default App;
