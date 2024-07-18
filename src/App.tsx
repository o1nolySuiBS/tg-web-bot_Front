import React, {useEffect} from 'react';

// @ts-ignore
const tg = window.Telegram.WebApp;


function App() {
  useEffect(() => {
  tg.ready()
  }, []);

  const onClose =()=>{
    tg.close()
  }

  return (
    <div className="App">
    work
      <button onClick={onClose}>wtf</button>
    </div>
  );
}

export default App;
