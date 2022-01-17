import React from 'react';
import { ContentContainer } from '../atoms/ContentContainer';
import { useSizeContext } from '../util/SizeContext';

interface TopPagePosterProps {
  image: string;
  imageAlt?: string;
  headingText: string;
  subHeadingText: string[];
}

export const TopPagePoster: React.FC<TopPagePosterProps> = (props) => {
  const { smallScreen } = useSizeContext();
  if (smallScreen) {
    return (
      <>
        <div className="relative h-[300px]">
          <img
            src={props.image}
            alt={props.imageAlt}
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
          <div className="h-[300px] w-full sls-top-page-poster__gradient" />
          <div className="absolute w-full bottom-6">
            <ContentContainer>
              <h1 className="text-5xl text-white font-headline">{props.headingText}</h1>
            </ContentContainer>
          </div>
        </div>
        <ContentContainer>
          {props.subHeadingText.map((t, i) => (
            <p className="text-2xl font-headline" key={i}>
              {t}
            </p>
          ))}
        </ContentContainer>
      </>
    );
  } else {
    return (
      <>
        <div className="relative min-h-[400px] md:min-h-[600px] lg:min-h-[800px] xl:min-h-[1008px]">
          <img
            src={props.image}
            alt={props.imageAlt}
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
          <div className="w-full sls-top-page-poster__gradient min-h-[400px] md:min-h-[600px] lg:min-h-[800px] xl:min-h-[1008px]" />
          <div className="absolute bottom-0 w-full xl:bottom-24 lg:bottom-16 md:bottom-12 sm:bottom-4">
            <ContentContainer>
              <h1 className="mt-8 text-6xl text-white font-headline">{props.headingText}</h1>
              {props.subHeadingText.map((t, i) => (
                <p className="text-2xl text-white font-headline" key={i}>
                  {t}
                </p>
              ))}
            </ContentContainer>
          </div>
        </div>
      </>
    );
  }
};
