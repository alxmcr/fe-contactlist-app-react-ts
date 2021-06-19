import { ContactCard } from 'components/ContactCard';
import { ModalContainer } from 'components/ModalContainer';
import { useState } from 'react';
import './App.css';


function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="App">
      <ContactCard setShowModal={setShowModal} />
      <ModalContainer showModal={showModal} />
    </div>
  );
}

export default App;
