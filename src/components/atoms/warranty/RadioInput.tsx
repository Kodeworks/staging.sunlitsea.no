import React, { useContext } from 'react';
import WarrantyContext from '../../util/WarrantyContext';
import WarrantyInput from './WarrantyInput';

interface Props {
  choices?: Array<{
    label: string;
    tag: string;
  }>;
  label: string;
  tag: string;
  required?: boolean;
  horisontal?: boolean;
}

const RadioInput: React.FC<Props> = ({ choices, label, tag, required, horisontal }) => {
  const { warrantyState, setWarrantyState } = useContext(WarrantyContext);

  const definedChoices = choices ?? [
    { label: 'Yes', tag: 'yes' },
    { label: 'No', tag: 'no' },
  ];
  return (
    <WarrantyInput tag={tag} label={label} required={!!required}>
      <fieldset className="">
        <div className={'flex gap-x-10' + ' ' + (horisontal ? 'flex-row' : 'flex-col')}>
          {definedChoices.map((choice, id) => {
            return (
              <div className="flex items-center" key={id}>
                <input
                  id={choice.tag}
                  name={tag}
                  type="radio"
                  className="w-4 h-4 border-gray-500"
                  onChange={() => {
                    warrantyState[tag] = { required: !!required, data: choice.tag, label: label };
                    setWarrantyState(warrantyState);
                  }}
                  required={!!required}
                />
                <label htmlFor={choice.tag} className="block ml-2">
                  {choice.label}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </WarrantyInput>
  );
};

export default RadioInput;
