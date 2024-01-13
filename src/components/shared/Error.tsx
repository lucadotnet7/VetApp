const Error = ({message}: {message: string}) => {
    return(
        <div className="bg-red-800 rounded-md mb-3 p-3 text-center">
            <p className="text-white">{message}</p>
        </div>
    );
}

export default Error;