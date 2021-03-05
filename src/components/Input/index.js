/* eslint-disable no-param-reassign */
import { Input as AntInput } from 'antd';
import InputMask from 'antd-mask-input';
import { Field } from 'formik';
import React from 'react';

export const Input = ({
  name,
  validate,
  mask,
  onChange: $onChange,
  onBlur: $onBlur,
  ...restProps
}) => {
  const ResolvedInput = mask ? InputMask : AntInput;
  return (
    <Field name={name} validate={validate}>
      {({ field: { value, onChange, onBlur } }) => (
        <ResolvedInput
          name={name}
          value={value}
          mask={mask}
          onChange={event => {
            onChange(event);
            if ($onChange) $onChange(event);
          }}
          onBlur={event => {
            onBlur(event);
            if ($onBlur) $onBlur(event);
          }}
          {...restProps}
        />
      )}
    </Field>
  );
};

Input.Search = ({
  name,
  validate,
  mask,
  onChange: $onChange,
  onBlur: $onBlur,
  ...restProps
}) => {
  const ResolvedInput = mask ? InputMask : AntInput;
  return (
    <Field name={name} validate={validate}>
      {({ field: { value, onChange, onBlur } }) => (
        <ResolvedInput.Search
          name={name}
          value={value}
          mask={mask}
          onChange={event => {
            onChange(event);
            if ($onChange) $onChange(event);
          }}
          onBlur={event => {
            onBlur(event);
            if ($onBlur) $onBlur(event);
          }}
          {...restProps}
        />
      )}
    </Field>
  );
};

Input.Password = ({
  name,
  validate,
  mask,
  onChange: $onChange,
  onBlur: $onBlur,
  ...restProps
}) => {
  const ResolvedInput = mask ? InputMask : AntInput;
  return (
    <Field name={name} validate={validate}>
      {({ field: { value, onChange, onBlur } }) => (
        <ResolvedInput.Password
          name={name}
          value={value}
          mask={mask}
          onChange={event => {
            onChange(event);
            if ($onChange) $onChange(event);
          }}
          onBlur={event => {
            onBlur(event);
            if ($onBlur) $onBlur(event);
          }}
          {...restProps}
        />
      )}
    </Field>
  );
};

Input.TextArea = ({
  name,
  validate,
  mask,
  onChange: $onChange,
  onBlur: $onBlur,
  ...restProps
}) => {
  const ResolvedInput = mask ? InputMask : AntInput;
  return (
    <Field name={name} validate={validate}>
      {({ field: { value, onChange, onBlur } }) => (
        <ResolvedInput.TextArea
          name={name}
          value={value}
          mask={mask}
          onChange={event => {
            onChange(event);
            if ($onChange) $onChange(event);
          }}
          onBlur={event => {
            onBlur(event);
            if ($onBlur) $onBlur(event);
          }}
          {...restProps}
        />
      )}
    </Field>
  );
};

// Input.Number = ({ prefix = '', suffix = '', postfix = '', ...props }) => {
//   suffix = suffix === '' ? postfix : suffix;
//   return (
//     <CustomInputNumber
//       formatter={value =>
//         value &&
//         `${prefix}${value.toString().replace(/[^0-9.,]/gim, '')}${suffix}`
//       }
//       parser={value =>
//         value &&
//         value
//           .replace(/[^0-9.,]/gim, '')
//           .replace(suffix, '')
//           .replace(prefix, '')
//       }
//       {...props}
//     />
//   );
// };

export default Input;
