const Input = (
    {id, type, placeholder, styles, value, onChange}: 
    {id?: string, type?: string, placeholder?: string, styles?: string, value?: any, onChange: React.ChangeEventHandler<HTMLInputElement>}
) => {
    return(
        <input 
            id={id}
            type={type}
            placeholder={placeholder}
            className={styles}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;