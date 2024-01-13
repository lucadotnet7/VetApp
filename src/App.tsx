import { useState, useEffect } from 'react';
import './App.css'
import Form from './components/Form';
import Header from './components/Header'
import PatientsList from './components/PatientsList';
import { Patient as PatientModel } from './models/Patient';

function App() {
  const [patients, setPatients] = useState(Array<PatientModel>());
  const [patient, setPatient] = useState(new PatientModel("", "", "", "", "", ""));

  useEffect(() => {
    const getPatients = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')!);
      if(patientsLS != null && patientsLS.length > 0)
        setPatients(patientsLS);
    }

    getPatients();
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id: string) => {
    const updatedPatients = patients.filter(p => p.id !== id);
    setPatients(updatedPatients);
  }

  return (
    <div className='container mx-auto mt-10'>
      <Header
      />
      <div className='mt-12 md:flex'>
        <Form 
          patients={patients}
          setPatients={setPatients}
          setPatient={setPatient}
          patient={patient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App;