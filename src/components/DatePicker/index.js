import { DatePicker as AntDatePicker } from 'antd';
import { Field } from 'formik';
import moment from 'moment';
import React from 'react';

function disabledDatesLarger(current) {
  return current && current > moment().endOf('day');
}

function disabledDatesSmaller(current) {
  return current && current < moment().endOf('day');
}

const blockDateToDisable = blockLarge => {
  if (blockLarge) {
    return disabledDatesLarger;
  }
  return disabledDatesSmaller;
};

export const DatePicker = ({
  name,
  validate,
  onChange,
  disabledDates = false,
  disableDatesLarger = false,
  ...restProps
}) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }) => (
      <AntDatePicker
        value={value ? moment(value) : undefined}
        onChange={(date, dateString) => {
          setFieldValue(name, date ? date.toISOString() : null);
          setFieldTouched(name, true, false);
          if (onChange) onChange(date, dateString);
        }}
        disabledDate={
          disabledDates ? blockDateToDisable(disableDatesLarger) : undefined
        }
        {...restProps}
      />
    )}
  </Field>
);


export default DatePicker;
