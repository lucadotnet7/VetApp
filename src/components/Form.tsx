import { useState, useEffect } from 'react';
import { Patient } from '../models/Patient';
import Error from './shared/Error';
import Input from './shared/Input';

function Form({patients, setPatients, patient, setPatient}: {patients: Array<Patient>, setPatients: Function, patient: Patient, setPatient: Function}) {
    const [petName, setPetName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        setPetName(patient.petName);
        setOwnerName(patient.ownerName);
        setEmail(patient.email);
        setDate(patient.date);
        setSymptoms(patient.symptoms);
    }, [patient]);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        //Form validation
        if([petName, ownerName, email, date, symptoms].includes("")) {
            setError(true);
            return;
        }
        setError(false);

        const id = Date.now().toString() + Math.random().toString().substring(2);
        const newPatient = new Patient(id, petName, ownerName, email, date, symptoms);

        //Add patient to state
        if(patient.id) {
            newPatient.id = patient.id;
            const editedPatients = patients.map(p => p.id === patient.id ? newPatient : p);
            setPatients(editedPatients);
            setPatient(new Patient("", "", "", "", "", ""));
        }
        else {
            setPatients([...patients, newPatient]);
        }

        //Reload form
        setPetName("");
        setOwnerName("");
        setEmail("");
        setDate("");
        setSymptoms("");
    }

    return(
        <div className="md:w-1/2 lg:w-2/5 mb-10 mx-3">
            <h2 className="text-gray-200 text-3xl text-center">
                Seguimiento de Pacientes
            </h2>
            <p className="text-gray-200 mt-5 text-center text-lg mb-10">
                Añade pacientes y {''}
                <span className="text-indigo-400 font-semibold">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md shadow-slate-600 rounded-lg py-10 px-5">
                { 
                    error && 
                    <Error message='Todos los campos son obligatorios' />
                }

                <div className="mb-5">
                    <label
                        htmlFor="pet-name-inp"
                        className="text-gray-800 block font-bold"> Nombre de la mascota (*)</label>
                    <Input 
                        id='pet-name-inp'
                        type='text'
                        placeholder='Ingrese el nombre de la mascota'
                        styles='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="owner-name-inp"
                        className="text-gray-800 block font-bold"> Nombre del propietario (*)</label>
                    <Input 
                        id='owner-name-inp'
                        type='text'
                        placeholder='Ingrese el nombre del propietario'
                        styles='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email-inp"
                        className="text-gray-800 block font-bold"> Correo electrónico (*)</label>

                    <Input
                        id='email-inp'
                        type='email'
                        placeholder='Ingrese el correo electrónico'
                        styles='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="discharge-date-inp"
                        className="text-gray-800 block font-bold"> Fecha de alta (*)</label>

                    <Input
                        id='discharge-date-inp'
                        type='date'
                        placeholder='Ingrese la fecha de alta'
                        styles='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="symptoms-inp"
                        className="text-gray-800 block font-bold"> Síntomas de la mascota (*)</label>
                    <textarea 
                        id="symptoms-inp"
                        placeholder="Ingrese los síntomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        />
                </div>

                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-semibold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={patient.id ? 'Editar paciente' : 'Agregar paciente'} />
            </form>
        </div>
    );
};

export default Form;