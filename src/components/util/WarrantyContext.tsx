import { createContext } from 'react';
import { WarrantyState } from './WarrantyState';

interface WarrantyContextProps {
  warrantyState: WarrantyState;
  setWarrantyState: React.Dispatch<React.SetStateAction<WarrantyState>>;
}

const WarrantyContext = createContext<WarrantyContextProps>({} as WarrantyContextProps);

export default WarrantyContext;
