import React from 'react';
import { ContentContainer } from '../atoms/ContentContainer';
import { TopPagePoster } from '../molecules/TopPagePoster';
import ApplicationAreaItem from './../atoms/ApplicationAreaItem';
import ProductSpecification from './../atoms/ProductSpecification';
import Roadmap from '../molecules/Roadmap';

const Product: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <TopPagePoster
          image={'/img/product/product_poster.jpg'}
          imageAlt={'Deployment of floating solar panels'}
          headingText="Product"
          subHeadingText={[
            'Sunlit Sea delivers floating solar panels. Below you will find an overview of how we manufacture and deploy our installations.',
          ]}
        />
        <ContentContainer className="flex flex-col py-16 lg:py-32 gap-y-16 lg:gap-y-32">
          <section className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:mr-12 lg:w-1/2 default-heading">
              <h2 className="">Floating Solar Panels</h2>
              <div className="mt-8 default-body">
                Sunlit Sea delivers prefabricated floating solar panel installations. This saves
                time, reduces multiple sources of risk and the amount of personnel needed to
                assemble the modules on site. The floats are delivered as strings, perfectly
                designed to fit a shipping container, which offers effortless handling and quick
                deployment. The system has a built-in wave analysis tool called the Wave Corrected
                Performance Ratio (WCPR) and presents an enlarged ability to calculate loss in power
                production due to wave induced mismatch losses.
              </div>
            </div>
            <div className="flex max-w-[500px] lg:max-w-full mx-auto mt-8 lg:min-h-full lg:w-1/2 lg:mt-0 ">
              <div className="w-full my-auto">
                <img
                  src={'/img/product/panels.jpg'}
                  className="object-contain"
                  alt="Floating solar panels"
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="default-heading lg:text-right ">From manufacturing to deployment</h2>
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="min-h-[300px] lg:min-h-full mt-8 lg:w-1/2">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/Bv4ve25-6_g?modestbranding=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                  className="w-full aspect-video"
                />
              </div>
              <div className="flex flex-col lg:ml-12 lg:w-1/2">
                <div className="mt-8 text-base lg:mt-4 default-body">
                  Our quick manufacturing and deployment process is what makes Sunlit Sea stand out.
                  By pre-assembling the floats they can easily be transported and deployed on water.
                  This leads to easy logistics and low capital binding. Our industry specialists
                  possess up to date expertise of the marine environment, and will consult customers
                  on issues regarding mooring, location and installment. Once set up on either salt
                  og fresh water, the strings are pulled out and towed to site by boat. Multiple
                  strings are then connected to form larger modules. The product is guaranteed to
                  deliver a minimum of 25 years of electricity production.
                </div>
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-12 lg:flex-row">
            <section className="flex flex-col lg:w-1/2 ">
              <h2 className="default-heading">Construction</h2>
              <div className="mt-4 text-base default-body">
                The installation is formed by two aluminum sheets that are welded together to form a
                float. This metal has multiple properties that makes it ideal for the marine
                environment; it is intrinsically robust and conducts heat exceptionally well. It is
                corrosion resistant due to its oxide layering that forms a protective coating and
                holds no magnetic characteristics. To give it enhanced structural integrity the
                aluminum backplate has multiple dimples, a design that furthermore offers increased
                heat reduction properties. The solar panel itself is laminated on top of the float.
                The solution has very good hydrodynamic and aerodynamic properties and can well
                handle rough seas.
              </div>
            </section>
            <section className="flex flex-col lg:w-1/2 ">
              <h2 className="default-heading">Prefabrication</h2>
              <div className="mt-4 text-base 2xl:pl-8 default-body">
                Prefabrication offer a range of advantages for both humans and climate, among
                others:
                <ul className="pl-6">
                  <li className="list-disc ">
                    Faster time to market - lower capital binding and loss of value.
                  </li>
                  <li className="list-disc ">
                    Lesser environmental footprint at installation site.
                  </li>
                  <li className="list-disc">
                    Possible to walk on the surface - safer and easier maintenance and inspection.
                  </li>
                  <li className="list-disc">Lower transport and logistics costs.</li>
                  <li className="list-disc ">Lower installation costs.</li>
                  <li className="list-disc ">Lower maintenance cost.</li>
                  <li className="list-disc ">
                    Environmentally friendly - efficient production and logistics means much lower
                    carbon footprint. Also no flora or fauna pollution at the installation site.
                  </li>
                  <li className="list-disc ">
                    Scalable business model with lower costs and capital binding.
                  </li>
                  <li className="list-disc ">
                    Advanced surveillance for better planning of maintenance and optimization of
                    energy utility.
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="flex flex-col gap-8 sm:gap-12 sm:flex-row">
            <section className="flex flex-col sm:w-1/2 ">
              <h2 className="default-heading">Application areas</h2>
              <div className="mt-4 text-base default-body">
                Thanks to extended longevity and rapid decommissioning our installations are
                applicable for a wide variety of operations, such as dredging, commercial harbors or
                even as a supplement to other energy producing facilities, such as dams. The system
                may feed power into municipal or regional grids for city integrated solar or energy
                intensive industries like data storage centres.
              </div>
            </section>
            <section className="flex flex-col p-2 sm:w-1/2 lg:p-4 xl:p-6 bg-primary-100">
              <h2 className="default-heading">Specification</h2>
              <div className="flex flex-col gap-6 mt-4">
                <ProductSpecification property="Panel weight" value="60kg" />
                <ProductSpecification property="Watt peak per panel" value="537W" />
                <ProductSpecification property="Panel dimensions" value="1.88m x 1.88m" />
                <ProductSpecification property="Distance between panels" value="15cm" />
                <ProductSpecification property="Maximum force on anchor points" value="2kN" />
              </div>
            </section>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <ApplicationAreaItem title="Cottages" image="cottage" />
            <ApplicationAreaItem title="Hydroelectric dams" image="dams" />
            <ApplicationAreaItem title="Desalination" image="desalination" />
            <ApplicationAreaItem title="Marinas" image="marinas" />
            <ApplicationAreaItem title="Dredging" image="dredging" />
            <ApplicationAreaItem title="Deep sea mining" image="deep_sea_mining" />
          </div>
          <Roadmap />
        </ContentContainer>
      </div>
    </>
  );
};

export default Product;
