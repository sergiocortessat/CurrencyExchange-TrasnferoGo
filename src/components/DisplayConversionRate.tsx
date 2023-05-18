import React from 'react';
import { CheckCircleTwoTone } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import TextBlock from "./UI/TextBlock";

interface DisplayConversionRateProps {
  conversionRate: number;
  className?: string;
  currencyFrom: string;
  currencyTo: string;
}

const DisplayConversionRate: React.FC<DisplayConversionRateProps> = (props) => {
  const { conversionRate, currencyFrom, currencyTo, className = "" } = props;
  return (
    <div className={className}>
      <IconButton className="circle-two-tone">
        <CheckCircleTwoTone />
      </IconButton>
      <TextBlock type='bold'>
         1 {currencyFrom} = {conversionRate} {currencyTo}
      </TextBlock>
    </div>

  );
};

export default DisplayConversionRate;
