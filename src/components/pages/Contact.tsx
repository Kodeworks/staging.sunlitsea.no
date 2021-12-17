import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      <div className="flex flex-col pb-8 bg-primary-50">
        <div className="mt-8 text-left ml-44 text-7xl font-body">Contact</div>
        <div className="flex flex-row justify-center mt-4">
          <img className="object-contain" width={'14%'} src={'/img/people/per.jpg'} alt="Per" />
          <div className="flex flex-col ml-4">
            <div className="text-5xl font-body">Per Lindberg</div>
            <div className="text-4xl text-gray-700 font-body">CEO</div>
            <a
              href="mailto:per@sunlitsea.no"
              className="mt-2 text-3xl underline hover:text-support-light"
            >
              per@sunlitsea.no
            </a>
            <div className="mt-2 text-3xl">+47 97079523</div>
            <div className="max-w-md mt-2 text-3xl">
              Per can be contacted regarding this and that.
            </div>
          </div>
          <div className="max-w-md mt-8 ml-32">
            <div className="px-4 py-8 bg-primary-300 rounded-xl">
              <p className="text-5xl text-center font-body">Got a general inquiry?</p>
              <p className="pb-4 mt-4 text-5xl text-center font-body">
                Send an email to{' '}
                <a href="mailto:per@sunlitsea.no" className="underline hover:text-support-light">
                  post@sunlitsea.no
                </a>
                !
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-8">
          <img className="object-contain" width={'14%'} src={'/img/people/eirik.jpg'} alt="Eirik" />
          <div className="flex flex-col ml-4">
            <div className="text-5xl font-body">Eirik Larsen</div>
            <div className="text-4xl text-gray-700 font-body">CFO / CDO</div>
            <a
              href="mailto:eirik@sunlitsea.no"
              className="mt-2 text-3xl underline hover:text-support-light"
            >
              eirik@sunlitsea.no
            </a>
            <div className="mt-2 text-3xl">+47 41670269</div>
            <div className="max-w-md mt-2 text-3xl">
              Eirik can be contacted regarding this and that.
            </div>
          </div>
          <div className="max-w-lg py-8 ml-16">
            <div className="px-4 py-8 bg-secondary-200 rounded-xl">
              <p className="text-4xl font-body">
                Want to get a quote on our floating photovoltaic installations?
              </p>
              <p className="pb-4 mt-4 text-4xl font-body">
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
        </div>
      </div>
    </>
  );
};

export default Contact;
