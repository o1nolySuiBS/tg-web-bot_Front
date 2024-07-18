import React, {useEffect} from 'react';
import {useTelegram} from "./hooks/useTelegram";


// @ts-ignore
const {onToggleButton, tg} = useTelegram()



function App() {
  useEffect(() => {
  tg.ready()
  }, []);

  return (
    <div className="App">
    <button onClick={onToggleButton}>toggle</button>

    </div>
  );
}

export default App;
