"use client";
/**
 * @typedef {import("@prismicio/client").Content.HomeHeaderSlice} HomeHeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeHeaderSlice>} HomeHeaderProps
 * @param {HomeHeaderProps}
 */

import Image from "next/image";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const HomeHeader = ({ slice }) => {
  console.log("hello", slice.primary.bgimage.bgiamge2);

  return (
    <section
      className=" h-max relative "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div data-scroll className="font-bold mt-8 mb-2 text-center ">
        {slice.primary.header}
      </div>
      <MouseParallaxContainer globalFactorX={0.3} globalFactorY={0.3}>
        <MouseParallaxChild
          factorX={0.1}
          factorY={0.1}
          className="h-[48rem] relative"
          style={{
            backgroundImage: `url(${slice.primary.bgimage[0].bgimage.url})`,
            backgroundSize: "cover",
          }}
        >
          {slice.primary.images.map((item, index) => {
            if (index === 0) {
              return (
                <MouseParallaxChild
                  key={index}
                  className="absolute left-60 top-20 z-10"
                  factorX={0.3}
                  factorY={0.5}
                >
                  <Image
                    index={index}
                    src={item.image.url}
                    alt="header iamge"
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                </MouseParallaxChild>
              );
            }
            if (index === 1) {
              return (
                <MouseParallaxChild
                  factorX={0.7}
                  factorY={0.8}
                  key={index}
                  className="absolute top-10 right-96 z-30"
                >
                  <Image
                    index={index}
                    src={item.image.url}
                    alt="header iamge"
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                </MouseParallaxChild>
              );
            }
            if (index === 2) {
              return (
                <MouseParallaxChild
                  factorX={0.2}
                  factorY={0.9}
                  key={index}
                  className="absolute right-10 top-36 z-10"
                >
                  <Image
                    index={index}
                    src={item.image.url}
                    alt="header iamge"
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                </MouseParallaxChild>
              );
            }
            if (index === 3) {
              return (
                <MouseParallaxChild
                  factorX={0.9}
                  factorY={0.3}
                  key={index}
                  className="absolute right-72 top-72 "
                >
                  <Image
                    index={index}
                    src={item.image.url}
                    alt="header iamge"
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                </MouseParallaxChild>
              );
            }
            if (index === 4) {
              return (
                <MouseParallaxChild
                  factorX={0.5}
                  factorY={0.2}
                  key={index}
                  className="absolute left-36 top-2/4 "
                >
                  <Image
                    index={index}
                    src={item.image.url}
                    alt="header iamge"
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                </MouseParallaxChild>
              );
            }
          })}
        </MouseParallaxChild>
        {/* <div
          className="w-screen"
          style={{
            backgroundImage: `url(${slice.primary.bgimage[0].bgimage2.url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: 20, // above the child images if you want it in front
          }}
        /> */}
      </MouseParallaxContainer>
    </section>
  );
};

export default HomeHeader;
