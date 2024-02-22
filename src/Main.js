import React, { useState } from 'react';
import './Main.css';
import ToExternals from './components/ToExternals';

function Main() {
  const [isExternalsOpened, setExternalsOpened] = useState(false)

  const toggleExternals = () => {
    setExternalsOpened((e) => !e)
  }

  return (
    <>
      <Header toggleExternals={toggleExternals} />
      <main>

      </main>
      <Footer />
      <ToExternals isExternalsOpened={isExternalsOpened} toggleExternals={toggleExternals} />
    </>
  );
}

export default Main;
