import React from 'react';

interface Props {
  fill: string;
}

const LogoSvg: React.FC<Props> = ({ fill }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 220 22"
      xmlSpace="preserve"
    >
      <g>
        <polygon
          fill={fill}
          points="18.3,1.3 8.9,1.3 1.8,20.7 5.1,20.7 12,1.9 12,20.7 15.2,20.7 15.2,1.9 22.1,20.7 25.5,20.7 	"
        />
        <g>
          <path
            fill={fill}
            d="M47,21c-5.2,0-7.9-3.6-8.3-7.1H42c0.2,2.5,2.3,4.5,5,4.5c2.5,0,4.3-1.1,4.3-2.9c0-1.6-1.2-2.4-3.7-3l-2.8-0.7
			c-3.8-0.9-5.7-2.7-5.7-5.4c0-3.3,3.2-5.5,7.1-5.5c5,0,7.5,2.7,7.8,6.1h-3.3c-0.2-2.3-2.2-3.4-4.5-3.4c-2.2,0-3.8,1-3.8,2.6
			c0,1.3,1,1.9,3.9,2.6l2.8,0.7c3.7,0.8,5.5,2.8,5.5,5.8C54.6,18.6,51.5,21,47,21z"
          />
          <path
            fill={fill}
            d="M67.8,21c-4.7,0-7.5-2.6-7.5-8V1.3h3.2v12.1c0,3.4,1.6,5,4.3,5s4.3-1.6,4.3-5V1.3h3.2V13
			C75.3,18.4,72.5,21,67.8,21z"
          />
          <path fill={fill} d="M98.5,20.7h-6.3L85.3,1.9v18.8h-3.2V1.3h6.3l6.9,18.8V1.3h3.2V20.7z" />
          <path fill={fill} d="M117.4,20.7h-11.6V1.3h3.2v16.8h8.5V20.7z" />
          <path fill={fill} d="M122.5,20.7V1.3h3.2v19.4H122.5z" />
          <path fill={fill} d="M131.4,1.3h15.8v2.6h-6.3v16.8h-3.2V3.9h-6.3V1.3z" />
          <path
            fill={fill}
            d="M169,21c-5.2,0-7.9-3.6-8.3-7.1h3.3c0.2,2.5,2.3,4.5,5,4.5c2.5,0,4.3-1.1,4.3-2.9c0-1.6-1.2-2.4-3.7-3
			l-2.8-0.7c-3.8-0.9-5.7-2.7-5.7-5.4c0-3.3,3.2-5.5,7.1-5.5c5,0,7.5,2.7,7.8,6.1h-3.3c-0.2-2.3-2.2-3.4-4.5-3.4
			c-2.2,0-3.8,1-3.8,2.6c0,1.3,1,1.9,3.9,2.6l2.8,0.7c3.7,0.8,5.5,2.8,5.5,5.8C176.7,18.6,173.5,21,169,21z"
          />
          <path
            fill={fill}
            d="M194.9,20.7h-11.8V1.3h11.6v2.6h-8.4v5.5h8.1V12h-8.1v6.1h8.6L194.9,20.7L194.9,20.7z"
          />
          <path
            fill={fill}
            d="M205.8,1.3h6.1l6.4,19.4H215l-1.8-5.5h-8.8l-1.8,5.5h-3.3L205.8,1.3z M205.3,12.6h7l-3.5-10.7L205.3,12.6z"
          />
        </g>
      </g>
    </svg>
  );
};

export default LogoSvg;
