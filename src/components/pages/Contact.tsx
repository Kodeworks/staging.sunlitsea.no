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
            <h1 className="mt-12 text-5xl md:mt-24 md:text-6xl font-body">Contact</h1>
            <div className="flex flex-col mt-8 md:flex-row justify-evenly">
              <div className="flex flex-col mx-auto md:pr-8 md:w-1/2">
                <ContactPerson
                  name="Per Lindberg"
                  role="FOUNDER / CEO"
                  image="per.jpg"
                  email="per@sunlitsea.no"
                  phone="+47 970 79 523"
                />

                <ContactPerson
                  name="Eirik Larsen"
                  role="FOUNDER / CFO / CDO"
                  image="eirik.jpg"
                  email="eirik@sunlitsea.no"
                  phone="+47 416 70 269"
                />
              </div>

              <div className="flex flex-col mx-auto text-xl md:pl-8 md:w-5/12 lg:text-2xl xl:w-1/2 xl:text-3xl">
                <div className="mt-2 ">
                  <div className="bg-primary-100 xl:h-[250px] px-4 pt-4 pb-8">
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
                <div className="py-8 mx-auto mt-1 ">
                  <div className=" bg-primary-200 xl:h-[250px] px-4 pt-4 pb-8">
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
                <div className="mt-1 ">
                  <div className="px-4 pt-4 pb-8 bg-primary-100 xl:h-[250px]">
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
