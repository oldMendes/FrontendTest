import { Select as AntSelect } from 'antd';
import { Field } from 'formik';
import React from 'react';

const Select = ({
  name,
  validate,
  children,
  onChange,
  onBlur,
  ...restProps
}) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <AntSelect
        onChange={(newValue, option) => {
          setFieldValue(name, newValue);
          setTimeout(() => {
            setFieldTouched(name);
          }, 300);
          if (onChange) onChange(newValue, option);
        }}
        onBlur={newValue => {
          setFieldTouched(name);
          if (onBlur) onBlur(newValue);
        }}
        value={value}
        {...restProps}
      >
        {children}
      </AntSelect>
    )}
  </Field>
);

Select.renderOptions = options =>
  options.map(({ label, ...restProps }, index) => (
    <AntSelect.Option key={`select-option-${index}`} {...restProps}>
      {label}
    </AntSelect.Option>
  ));

Select.Option = AntSelect.Option;
Select.OptGroup = AntSelect.OptGroup;

export default Select;
