import React from 'react';
import ChartButton from '../../src/components/atoms/ChartButton';
import TextButton from '../../src/components/atoms/TextButton';
import DeleteButton from '../../src/components/atoms/DeleteButton';

const props = {
  onClick: (): boolean => {
    return true;
  },
  text: 'BUTTON',
};

export const chartButton = () => {
  return <ChartButton {...props}></ChartButton>;
};
export const addButton = () => {
  return <TextButton {...props} text="ADD"></TextButton>;
};
export const removeButton = () => {
  return <TextButton {...props} text="REMOVE"></TextButton>;
};
export const deleteButton = () => {
  return <DeleteButton {...props}></DeleteButton>;
};
export const deleteButtonDisabled = () => {
  return <DeleteButton {...props} disabled={true}></DeleteButton>;
};

export default {
  title: 'atoms',
};
