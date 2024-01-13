import { Patient as PatientModel } from "../models/Patient";

const Patient = ({patient, setPatient, deletePatient}: {patient: PatientModel, setPatient: Function, deletePatient: Function}) => {
    const { petName, ownerName, email, date, symptoms, id } = patient;

    const handleDelete = () => {
        const confirmDelete = confirm("Desea eliminar este paciente?");

        if(confirmDelete)
            deletePatient(id);
    }

    return(
        <div className="ml-3 mb-3 mr-3 bg-white rounded-xl shadow-md shadow-slate-600 px-5 py-10">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre de la mascota: {''}
                <span className="font-normal normal-case">{petName}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre del propietario: {''}
                <span className="font-normal normal-case">{ownerName}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Correo electrónico: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
                
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
                <span className="font-normal normal-case">{date}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas de la mascota: {''}
                <span className="font-normal normal-case">{symptoms}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button 
                    type="button"
                    onClick={() => setPatient(patient)}
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md">
                        Editar
                </button>
                <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
                    onClick={handleDelete}>
                        Eliminar
                </button>
            </div>
        </div>
    );
}

export default Patient;