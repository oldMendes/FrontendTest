import { SaveOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import { Field } from 'formik';
import { isArray } from 'lodash';
import React from 'react';

const formatErrorsMessage = errors => (
  <div>
    <ul>
      {errors &&
        isArray(errors) &&
        errors.map((error, index) => <li key={index}>{error}</li>)}
    </ul>
  </div>
);

const SubmitButton = ({
  children,
  showValidationErrors,
  icon = <SaveOutlined />,
  disabled,
  ...restProps
}) => {
  const withButton = (isSubmitting, isValid, values) => (
    <Button
      loading={isSubmitting}
      disabled={
        disabled ||
        !isValid ||
        isSubmitting ||
        Object.values(values).every(v => v === null || v === undefined)
      }
      type="primary"
      htmlType="submit"
      icon={icon}
      {...restProps}
    >
      {children}
    </Button>
  );

  return (
    <Field>
      {({ form: { isSubmitting, values, isValid, errors } }) => (
        <>
          {showValidationErrors && !isValid ? (
            <Popover
              title="Erros de validação"
              content={formatErrorsMessage(Object.values(errors))}
              trigger="hover"
            >
              {withButton(isSubmitting, isValid, values)}
            </Popover>
          ) : (
            withButton(isSubmitting, isValid, values)
          )}
        </>
      )}
    </Field>
  );
};

SubmitButton.propTypes = {};

export default SubmitButton;
