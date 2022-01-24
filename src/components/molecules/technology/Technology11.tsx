import React from 'react';
import TechnologyContent from './TechnologyContent';

const Technology11: React.FC = () => {
  return (
    <>
      <TechnologyContent
        description="Today's solutions for floating solar power are demanding to install and typically
    have just as cumbersome disassembly. Usually only projects that require a very long
    depreciation period are developed (usually 25 years). Removal of the plant has
    approximately the same costs as during installation."
        solution="Sunlit Sea develops a flexible and efficient method of disassembly based on the same
    principles as installation. This means that you can operate with much shorter
    perspectives for an installation, in special cases all the way down to a few weeks of
    operating time. Examples of such short projects can be: dredging,
    construction,downstream or military defense activities."
        images={
          <>
            <img
              className="object-contain mx-auto"
              src={'/img/technology/technology_11.jpg'}
              alt="technology_11"
            />
            <div className="mx-auto">
              Dredging is an example of an industry that requires a lot of energy for a limited
              period of time.
            </div>
          </>
        }
      />
    </>
  );
};

export default Technology11;
