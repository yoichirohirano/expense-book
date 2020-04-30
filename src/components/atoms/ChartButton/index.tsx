import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import BarChartIcon from '@material-ui/icons/BarChart';
interface Props {
  onClick: (props: any) => any;
}

const ChartButton: React.FC<Props> = (props) => {
  return (
    <IconButton aria-label="delete" onClick={props.onClick} color="secondary">
      <BarChartIcon />
    </IconButton>
  );
};

export default ChartButton;
