import React from 'react';
import Button from '@material-ui/core/Button';
interface Props {
  onClick: (props: any) => any;
  text: string;
}

const TextButton: React.FC<Props> = (props) => {
  return (
    <Button onClick={props.onClick} variant="contained" color="primary">
      {props.text}
    </Button>
  );
};

export default TextButton;
