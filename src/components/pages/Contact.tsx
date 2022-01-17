import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { ContentContainer } from '../atoms/ContentContainer';
import ContactPerson from './../atoms/ContactPerson';

const Contact: React.FC = () => {
  return (
    <>
      <div className="pb-8 bg-white">
        <ContentContainer>
          <div className="flex flex-col ">
            <h1 className="mt-24 text-6xl font-body">Contact</h1>
            <div className="flex flex-row mt-8 justify-evenly">
              <div className="flex flex-col w-1/2 pr-8">
                <ContactPerson
                  name="Per Lindberg"
                  role="FOUNDER / CEO"
                  image="per.jpg"
                  email="per@sunlitsea.no"
                  phone="+47 97079523"
                />

                <ContactPerson
                  name="Eirik Larsen"
                  role="FOUNDER / CFO / CDO"
                  image="eirik.jpg"
                  email="eirik@sunlitsea.no"
                  phone="+47 41670269"
                />
              </div>

              <div className="flex flex-col w-1/2 pl-8">
                <div className="mt-2 text-3xl ">
                  <div className="bg-primary-100 h-[250px] px-4 py-4">
                    <p className="font-bold font-body">Got a general inquiry?</p>
                    <p className="mt-4 ">
                      Send an email to{' '}
                      <a
                        href="mailto:post@sunlitsea.no"
                        className="underline hover:text-support-light"
                      >
                        post@sunlitsea.no
                      </a>
                      !
                    </p>
                  </div>
                </div>
                <div className="py-8 mx-auto mt-1 text-3xl ">
                  <div className=" bg-primary-200 h-[250px] px-4 py-4">
                    <p className="font-bold font-body">
                      Want to get a quote on our floating photovoltaic installations?
                    </p>
                    <p className="mt-4 ">
                      Visit{' '}
                      <a
                        href="https://quote.sunlitsea.no"
                        className="underline hover:text-support-light text-support-dark"
                      >
                        quote.sunlitsea.no
                      </a>{' '}
                      to start the process!
                    </p>
                  </div>
                </div>
                <div className="mt-1 text-3xl ">
                  <div className="px-4 py-4 bg-primary-100 h-[250px]">
                    <p className="font-bold font-body">Follow us on social media!</p>
                    <div className="flex flex-row mt-4 ml-4">
                      <SocialIcon
                        url="https://www.linkedin.com/company/sunlitsea/"
                        fgColor="white"
                        className="scale-125"
                      />
                      <SocialIcon
                        url="https://www.youtube.com/channel/UCuDWVcMb3metkdBTk1CSxig"
                        fgColor="white"
                        className="ml-8 scale-125"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </div>
    </>
  );
};

export default Contact;
