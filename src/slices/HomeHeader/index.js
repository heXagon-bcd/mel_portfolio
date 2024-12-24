/**
 * @typedef {import("@prismicio/client").Content.HomeHeaderSlice} HomeHeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeHeaderSlice>} HomeHeaderProps
 * @param {HomeHeaderProps}
 */

import Image from "next/image";

const HomeHeader = ({ slice }) => {
  console.log(slice.primary.bgimage[0].bgimage.url);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="font-bold mt-8 mb-2 text-center relative">
        {slice.primary.header}
      </div>
      <div
        className="min-h-screen bg-center absolute"
        style={{
          backgroundImage: `url(${slice.primary.bgimage[0].bgimage.url})`,
          backgroundSize: "cover",
        }}
      >
        <div className="relative">
          {slice.primary.images.map((item, index) => {
            return (
              <div key={index} className="">
                <Image
                  index={index}
                  src={item.image.url}
                  alt="header iamge"
                  width={item.image.dimensions.width}
                  height={item.image.dimensions.height}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
