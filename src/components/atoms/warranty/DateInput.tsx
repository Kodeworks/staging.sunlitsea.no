import React, { useContext, useState } from 'react';
import WarrantyContext from '../../util/WarrantyContext';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import WarrantyInput from './WarrantyInput';

interface Props {
  tag: string;
  label: string;
  required?: boolean;
}

const DateInput: React.FC<Props> = ({ tag, label, required }) => {
  const { warrantyState, setWarrantyState } = useContext(WarrantyContext);

  const [date, setDate] = useState<Date | null>(null);
  return (
    <WarrantyInput tag={tag} label={label} required={!!required}>
      <DatePicker
        selected={date}
        dateFormat="dd.MM.yyyy"
        className="block w-full px-2 border-2 border-gray-300 rounded-lg shadow-sm outline-none focus:ring-secondary-700 focus:border-secondary-700 invalid:required:border-primary-900"
        onChange={(date: Date) => {
          setDate(date);
          warrantyState[tag] = {
            required: !!required,
            data: date.toDateString(),
            label: label,
          };
          setWarrantyState(warrantyState);
        }}
        required={!!required}
      />
    </WarrantyInput>
  );
};

export default DateInput;
