import { Form as AntForm } from 'antd';
import { Field } from 'formik';
import React from 'react';

import FormItem from '../FormItem';

const Form = ({ ...props }) => (
  <Field>
    {({ form: { handleReset, handleSubmit } }) => (
      <AntForm
        onReset={handleReset}
        onSubmitCapture={handleSubmit}
        {...props}
      />
    )}
  </Field>
);

Form.Item = FormItem;

export default Form;
