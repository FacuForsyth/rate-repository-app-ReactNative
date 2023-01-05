import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Formik, useField } from 'formik';
import StyledTextInput from "../components/StyledTextInput";
import  StyledText  from "../components/StyledText";
import { loginValidationSchena } from "../validationSchenas/login.js";

const styles = StyleSheet.create({
  form: {
    margin: 12
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  }
});

const initialValues = {
  email: '',
  password: '',
};

const FormikInputValue = ({ name, ...props}) => {
  const [field, meta, helpers] = useField(name)
  //[value, meta(errores), setValue]

  return (
    <>
    <StyledTextInput
      error={meta.error} 
      value={field.value}
      onChangeText={value => helpers.setValue(value)}
      {...props}
    />
    {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

/* const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  console.log(errors);
  return errors;
}; */

export default function LogInPage () {
  return (
    <Formik validationSchema={loginValidationSchena} /* validate={validate} */ initialValues={initialValues} onSubmit={values => console.log(values)}>
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name='email'
              placeholder="E-mail" 
            />
            <FormikInputValue
              name='password'
              placeholder="Password"
              secureTextEntry
             />
            <Button onPress={handleSubmit} title='Log In' />
          </View>
        )
      }}
    </Formik>
  )
};