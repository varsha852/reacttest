import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button } from "@mui/material";


const validationSchema = yup.object({
    Firstname: yup.string().required('Firstname is required'),
    Lastname: yup.string() .required('Lastname is required'),
    email: yup.string()
                .required('Email is required')
                .email('Email is invalid'),
	PhoneNumber: yup.string("enter your phonenumber")       
});
export const Formikwithmui=()=>{

  const formik = useFormik({
    initialValues: {
        Firstname: '',
        Lastname: '',
        email:'',
        PhoneNumber:'',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        console.log(values)
    },
});

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="Firstname"
          name="Firstname"
          label="Firstname"
          type="text"
          value={formik.values.Firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Firstname && Boolean(formik.errors.Firstname)}
          helperText={formik.touched.Firstname && formik.errors.Firstname}
        />
        <TextField
          fullWidth
          id="Lastname"
          name="Lastname"
          label="Lastname"
          type="text"
          value={formik.values.Lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Lastname && Boolean(formik.errors.Lastname)}
          helperText={formik.touched.Lastname && formik.errors.Lastname}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="PhoneNumber"
          name="PhoneNumber"
          label="PhoneNumber"
          type="number"
          value={formik.values.PhoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.PhoneNumber && Boolean(formik.errors.PhoneNumber)}
          helperText={formik.touched.PhoneNumber && formik.errors.PhoneNumber}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

