import { UndoOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Field } from 'formik';
import React from 'react';

const ResetButton = ({
  children,
  onClick,
  customClear,
  icon = <UndoOutlined />,
  hasImage = false,
  ...restProps
}) => {
  return (
    <Field>
      {({ form: { resetForm, values } }) => (
        <Button
          onClick={event => {
            /* eslint no-param-reassign: "error" */
            if (hasImage) values.imagesUrl = [];
            // dispatch(resetTextArea());
            resetForm();
            if (onClick) onClick(event);
          }}
          disabled={Object.values(values).every(
            v => v === null || v === undefined,
          )}
          type="dashed"
          icon={icon}
          {...restProps}
        >
          {children}
        </Button>
      )}
    </Field>
  );
};

export default ResetButton;
