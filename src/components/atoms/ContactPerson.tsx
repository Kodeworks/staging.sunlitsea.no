import React from 'react';

interface Props {
  name: string;
  image: string;
  role: string;
  email: string;
  phone: string;
}

const ContactPerson: React.FC<Props> = ({ name, image, role, email, phone }) => {
  return (
    <>
      <div className="flex flex-row pb-4">
        <img
          className="object-contain h-[270px] lg:h-[335px] xl:h-[400px]"
          src={'/img/about/' + image}
          alt={name}
        />
        <div className="flex flex-col ml-4 text-xl lg:text-2xl">
          <div className="text-3xl lg:text-4xl font-body">{name.toUpperCase()}</div>
          <div className="text-gray-700  font-body">{role.toUpperCase()}</div>
          <a href={'mailto:' + email} className="mt-2 underline hover:text-support-light">
            {email}
          </a>
          <div className="mt-1">{phone}</div>
        </div>
      </div>
    </>
  );
};

export default ContactPerson;
