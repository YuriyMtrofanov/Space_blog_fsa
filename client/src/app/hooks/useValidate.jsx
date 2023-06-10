import { useEffect, useState } from "react";

const useValidate = (initData, inputData, validator, config) => {
    const [errors, setErrors] = useState(initData);

    const validate = () => {
        setErrors(validator(inputData, config));
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        validate();
    }, [inputData]);

    const isAbled = Object.keys(errors).length === 0;

    return { errors, isAbled, validate };
};

export default useValidate;
