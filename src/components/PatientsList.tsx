import { Patient as PatientModel } from "../models/Patient";
import Patient from './Patient';

function PatientsList({patients, setPatient, deletePatient}: {patients: Array<PatientModel>, setPatient: Function, deletePatient: Function}) {
    return(
        <div className="md:w-1/2 lg:w-3/5">
            {patients && patients.length ? (
                <>
                    <h2 className="text-gray-200 text-3xl text-center">
                        Listado de Pacientes
                    </h2>
                    <p className="text-xl text-gray-200 mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-400 font-bold">Pacientes y Citas</span>
                    </p>

                    <div className="md:h-screen overflow-y-scroll">
                        {
                            patients.map(p => 
                                <Patient 
                                    key={p?.id}
                                    patient={p}
                                    deletePatient={deletePatient}
                                    setPatient={setPatient}/>)
                        }
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-gray-200 text-3xl text-center">
                        No hay pacientes registrados
                    </h2>
                    <p className="text-xl text-gray-200 mt-5 mb-10 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-400 font-bold">y se agregarán al listado</span>
                    </p>
                </>
            )}
        </div>
    );
};

export default PatientsList;