import { ContactCard } from 'components/ContactCard';
import { ContactCreateForm } from "components/ContactCreateForm";
import { ModalContact } from 'components/ModalContact';
import './App.css';

function App() {
  return (
    <div className="App">
      <ContactCard />
      <ModalContact>
        <ContactCreateForm />
      </ModalContact>
    </div>
  );
}

export default App;
