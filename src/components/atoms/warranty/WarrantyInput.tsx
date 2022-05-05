import React, { ReactNode, useContext, useEffect } from 'react';
import WarrantyContext from '../../util/WarrantyContext';

interface Props {
  tag: string;
  label: string;
  required: boolean;
  children: ReactNode;
}

const WarrantyInput: React.FC<Props> = ({ tag, label, required, children }) => {
  const { warrantyState, setWarrantyState } = useContext(WarrantyContext);

  useEffect(() => {
    warrantyState[tag] = { required: required, data: null, label: label };
    setWarrantyState(warrantyState);
  }, []);

  return (
    <div>
      <label htmlFor={tag} className="block pb-1">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>
      {children}
    </div>
  );
};

export default WarrantyInput;
