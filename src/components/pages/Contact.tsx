import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Contact: React.FC = () => {
  return (
    <>
      <div className="flex flex-col pb-8 bg-primary-50">
        <div className="w-5/12 pb-4 mt-8 text-left ml-44 text-7xl font-body">Contact</div>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col">
            <div className="flex flex-row justify-center">
              <img className="object-contain h-80" src={'/img/people/per.jpg'} alt="Per" />
              <div className="flex flex-col w-1/2 ml-4">
                <div className="text-5xl font-body">Per Lindberg</div>
                <div className="text-4xl text-gray-700 font-body">CEO</div>
                <a
                  href="mailto:per@sunlitsea.no"
                  className="mt-2 text-3xl underline hover:text-support-light"
                >
                  per@sunlitsea.no
                </a>
                <div className="mt-2 text-3xl">+47 97079523</div>
              </div>
            </div>

            <div className="flex flex-row justify-center mt-4">
              <img className="object-contain h-80" src={'/img/people/eirik.jpg'} alt="Eirik" />
              <div className="flex flex-col w-1/2 ml-4">
                <div className="text-5xl font-body">Eirik Larsen</div>
                <div className="text-4xl text-gray-700 font-body">CFO / CDO</div>
                <a
                  href="mailto:eirik@sunlitsea.no"
                  className="mt-2 text-3xl underline hover:text-support-light"
                >
                  eirik@sunlitsea.no
                </a>
                <div className="mt-2 text-3xl">+47 41670269</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center w-4/12">
            <div className="mx-auto mt-2 text-3xl w-96">
              <div className="py-6 bg-primary-300 rounded-xl">
                <p className="text-center font-body">Got a general inquiry?</p>
                <p className="pb-4 mt-4 text-center font-body">
                  Send an email to{' '}
                  <a href="mailto:post@sunlitsea.no" className="underline hover:text-support-light">
                    post@sunlitsea.no
                  </a>
                  !
                </p>
              </div>
            </div>
            <div className="max-w-lg py-8 mx-auto mt-1 text-3xl ">
              <div className="px-4 py-4 bg-secondary-200 rounded-xl">
                <p className=" font-body">
                  Want to get a quote on our floating photovoltaic installations?
                </p>
                <p className="pb-2 mt-4 font-body">
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
            <div className="mx-auto mt-1 text-3xl w-96">
              <div className="py-6 bg-primary-300 rounded-xl">
                <p className="text-center font-body">Follow us on social media!</p>
                <div className="flex flex-row mt-4 ml-8">
                  <SocialIcon
                    url="https://www.linkedin.com/company/sunlitsea/"
                    fgColor="white"
                    className="transform scale-125"
                  />
                  <SocialIcon
                    url="https://www.youtube.com/channel/UCuDWVcMb3metkdBTk1CSxig"
                    fgColor="white"
                    className="ml-8 transform scale-125 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
