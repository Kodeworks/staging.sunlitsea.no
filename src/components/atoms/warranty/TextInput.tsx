import React, { useContext } from 'react';
import WarrantyContext from '../../util/WarrantyContext';
import WarrantyInput from './WarrantyInput';

interface Props {
  tag: string;
  label: string;
  required?: boolean;
  pattern?: string;
}

const Input: React.FC<Props> = ({ tag, label, required, pattern }) => {
  const { warrantyState, setWarrantyState } = useContext(WarrantyContext);

  return (
    <WarrantyInput tag={tag} label={label} required={!!required}>
      <input
        type="text"
        name={tag}
        id={tag}
        className="block w-full px-2 border-2 border-gray-300 rounded-lg shadow-sm outline-none focus:ring-secondary-700 focus:border-secondary-700 invalid:border-primary-900"
        onChange={(e) => {
          warrantyState[tag] = { required: !!required, data: e.target.value, label: label };
          setWarrantyState(warrantyState);
        }}
        autoComplete="off"
        required={!!required}
        pattern={pattern}
      />
    </WarrantyInput>
  );
};

export default Input;
