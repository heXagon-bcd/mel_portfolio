/**
 * @typedef {import("@prismicio/client").Content.HomeHeaderSlice} HomeHeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeHeaderSlice>} HomeHeaderProps
 * @param {HomeHeaderProps}
 */

import Image from "next/image";

const HomeHeader = ({ slice }) => {
  console.log("hello", slice.primary.bgimage[0].bgimage2.url);

  return (
    <section
      className="w-screen"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="font-bold mt-8 mb-2 text-center relative">
        {slice.primary.header}
      </div>
      <div
        className="min-h-screen bg-center relative z-0"
        style={{
          backgroundImage: `url(${slice.primary.bgimage[0].bgimage.url})`,
          backgroundSize: "cover",
        }}
      >
        <div className="">
          {slice.primary.images.map((item, index) => {
            if (index === 0) {
              return (
                <div key={index} className="absolute top-20 left-28 z-10">
                  <Image
                    index={index}
                    src={item.image.url}
                    alt="header iamge"
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                </div>
              );
            }
            if (index === 1) {
              return (
                <div key={index} className="absolute top-5 right-80">
                  <Image
                    index={index}
                    src={item.image.url}
                    alt="header iamge"
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                </div>
              );
            }
            if (index === 2) {
              return (
                <div key={index} className="absolute right-10 top-36 z-20">
                  <Image
                    index={index}
                    src={item.image.url}
                    alt="header iamge"
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                </div>
              );
            }
            if (index === 3) {
              return (
                <div key={index} className="absolute right-52 top-72 ">
                  <Image
                    index={index}
                    src={item.image.url}
                    alt="header iamge"
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                </div>
              );
            }
            if (index === 4) {
              return (
                <div key={index} className="absolute left-10 bottom-80 ">
                  <Image
                    index={index}
                    src={item.image.url}
                    alt="header iamge"
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                </div>
              );
            }
          })}
        </div>
        <div
          className="h-20 bg-center bottom-0  z-0"
          style={{
            backgroundImage: `url(${slice.primary.bgimage[0].bgimage2.url})`,
            backgroundSize: "cover",
          }}
        />
      </div>
    </section>
  );
};

export default HomeHeader;
