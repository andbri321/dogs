import { func } from "prop-types";
import React from "react";

const types = {
    email: {
        regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
        message: 'Preencha um email válido',
    },
    password: {
        regex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
        message: 'A senha tem que ter 1 caracter maísculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.',
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize números apenas.',
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState();

    function validate(){
        if(type===false) return true;
        if(value.length === 0){
            setError('Preencha um valor');
            return false;
        }else if(types[type] && !types[type].regex.test(value)){
            setError(types[type].message);
            return false;
        }else{
            setError(null);
            return true;
        }
    }

    function onChange({ target }){
        if(error) validate(target.value);

        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    };
};

export default useForm;
