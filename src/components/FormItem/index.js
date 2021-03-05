/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import { Form } from 'antd';
import { Field, getIn } from 'formik';
import React from 'react';

export const FormItem = ({
  name,
  showValidateSuccess,
  showInitialErrorAfterTouched = false,
  children,
  validate,
  ...restProps
}) => (
  <Field name={name} validate={validate}>
    {({ form: { errors = {}, touched = {}, initialErrors = {} } }) => {
      const error = getIn(errors, name, undefined);
      const initialError = getIn(initialErrors, name, undefined);
      let isTouched = getIn(touched, name, false);
      if (Array.isArray(isTouched)) {
        isTouched = isTouched.reduce((acc, value) => acc || value, false);
      }
      const hasError = error !== undefined && isTouched;
      const hasInitialError = initialError !== undefined;
      const isValid = !error && isTouched;
      const showHelp =
        hasError ||
        (hasInitialError && (!isTouched || showInitialErrorAfterTouched));

      return (
        <Form.Item
          validateStatus={
            hasError || (hasInitialError && !isTouched)
              ? 'error'
              : isValid && showValidateSuccess
              ? 'success'
              : undefined
          }
          hasFeedback={isValid}
          help={
            showHelp && (
              <>
                {hasError && <li>{error}</li>}
                {hasInitialError &&
                  (!isTouched || showInitialErrorAfterTouched) && (
                    <li>{initialError}</li>
                  )}
              </>
            )
          }
          {...restProps}
        >
          {children}
        </Form.Item>
      );
    }}
  </Field>
);

export default FormItem;
