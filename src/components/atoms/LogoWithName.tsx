import React from 'react';

interface Props {
  containerClassName: string;
  svgClassName: string;
  textClassName: string;
}

const LogoWithName: React.FC<Props> = ({ containerClassName, svgClassName, textClassName }) => {
  return (
    <a className={`${containerClassName}`} href="/">
      <span className="flex flex-row align-middle">
        <svg
          className={`${svgClassName}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 91 74"
          fill="black"
        >
          <path d="M63.4039 0.63623H27.5962L0.923088 73.3635H13.7116L39.6539 2.81805V73.3635H51.3462V2.81805L77.2885 73.3635H90.0769L63.4039 0.63623Z" />
        </svg>
        <div className={`${textClassName}`}>SUNLIT SEA</div>
      </span>
    </a>
  );
};

export default LogoWithName;
