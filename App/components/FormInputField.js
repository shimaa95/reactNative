import React from 'react';
import { useFormikContext } from 'formik';

import AppInputText from './AppInputText';
import ErrorMessage from './ErrorMessage';




function FormInputField({name,...otherprops}) {

    const {touched,errors,setFieldTouched,handleChange} = useFormikContext();
    return (
       <>
        <AppInputText   
        onBlur={()=> setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherprops}
    />
<ErrorMessage  error={errors[name]} visible={touched[name]}/>
</>
    );
}

export default FormInputField;