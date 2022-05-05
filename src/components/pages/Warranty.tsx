import React, { useState } from 'react';
import { ContentContainer } from '../atoms/ContentContainer';
import DateInput from '../atoms/warranty/DateInput';
import RadioInput from '../atoms/warranty/RadioInput';
import Input from '../atoms/warranty/TextInput';
import WarrantySection from '../atoms/warranty/WarrantySection';
import WarrantyContext from '../util/WarrantyContext';

const Warranty: React.FC = () => {
  const [warrantyState, setWarrantyState] = useState({});
  return (
    <>
      <div className="pb-8 bg-white">
        <ContentContainer>
          <form>
            <div className="flex flex-col max-w-5xl gap-12 pt-12 mx-auto text-xl leading-9 md:pt-24">
              <WarrantyContext.Provider value={{ warrantyState, setWarrantyState }}>
                <WarrantySection title="Contact reference number">
                  <div>
                    <div className="leading-6">
                      To speed up the warranty process, please enter a reference provided by Sunlit
                      Sea service team if you have (either 5 digits phone call ref. staring from B,
                      or email ticket ref.)
                    </div>
                    <Input tag="reference" label="Reference#" />
                  </div>
                </WarrantySection>

                <WarrantySection title="Product Details">
                  <Input tag="product-serial-number" label="Product Serial Number" required />
                  <div />
                  <Input tag="product-model" label="Product Model" />
                  <DateInput tag="installation-date" label="Date of installation" required />
                  <RadioInput
                    tag="accessory"
                    label="Claim an accessory instead of inverter?"
                    horisontal
                  />
                  <Input
                    tag="accessory-specification"
                    label="Specify the accessory you would like to claim"
                  />
                </WarrantySection>

                <WarrantySection title="Claimant Contact Details">
                  <RadioInput
                    tag="claimant-type"
                    label="Type"
                    required
                    choices={[
                      { tag: 'business', label: 'Business' },
                      { tag: 'individual', label: 'Individual' },
                    ]}
                    horisontal
                  />
                  <Input tag="business-name" label="Business name" />
                  <Input tag="abn" label="ABN" />
                  <Input tag="claimant-email" label="Email" pattern="[^\s]+@[^\s]+" />
                </WarrantySection>

                <div className="w-full max-w-md mx-auto">
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full px-2 py-4 ml-3 text-2xl font-medium text-white border border-transparent rounded-md shadow-sm bg-secondary-700 hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                    onClick={() => console.log(warrantyState)}
                  >
                    Send
                  </button>
                </div>
              </WarrantyContext.Provider>
            </div>
          </form>
        </ContentContainer>
      </div>
    </>
  );
};

export default Warranty;
