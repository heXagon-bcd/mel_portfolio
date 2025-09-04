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
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { HomeHeaderSliceDefaultPrimaryImagesItem, Simplify } from "../../../prismicio-types";

// TODO: mobile version...
/**
 * Props for `HomeHeader`.
 */
export type HomeHeaderProps = SliceComponentProps<Content.HomeHeaderSlice>;

const HomeHeader = ({ slice }: HomeHeaderProps) => {
  const renderParallaxImage = (
    item: Simplify<HomeHeaderSliceDefaultPrimaryImagesItem>, index: number,
  ) => {
    if (!item.image?.url) return <></>;

    const key = `parallax_image_${index}`;
    const image = <Image
        src={item.image.url}
        alt={`Header image for ${key}`}
        width={item.image.dimensions?.width ?? 200}
        height={item.image.dimensions?.height ?? 200}
      />;

    switch (index) {
      case 0:
        return (
          <MouseParallaxChild
            key={key}
            className="absolute left-60 top-20 z-10"
            factorX={0.3}
            factorY={0.5}
          >
            {image}
          </MouseParallaxChild>
        );
      case 1:
        return (
          <MouseParallaxChild
            key={key}
            className="absolute top-10 right-96 z-30"
            factorX={0.7}
            factorY={0.8}
          >
            {image}
          </MouseParallaxChild>
        );
      case 2:
        return (
          <MouseParallaxChild
            key={key}
            className="absolute right-10 top-36 z-10"
            factorX={0.2}
            factorY={0.9}
          >
            {image}
          </MouseParallaxChild>
        );
      case 3:
        return (
          <MouseParallaxChild
            key={key}
            className="absolute right-72 top-72"
            factorX={0.9}
            factorY={0.3}
          >
            {image}
          </MouseParallaxChild>
        );
      case 4:
        return (
          <MouseParallaxChild
            key={key}
            className="absolute left-36 top-2/4"
            factorX={0.5}
            factorY={0.2}
          >
            {image}
          </MouseParallaxChild>
        );
      default:
        return <></>;
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-between"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div data-scroll className="font-bold mt-8 text-center">
        {slice.primary.header}
      </div>
      <div className="h-5/6">
        <MouseParallaxContainer globalFactorX={0.3} globalFactorY={0.3}>
          <MouseParallaxChild
            factorX={0.1}
            factorY={0.1}
            className="h-[48rem] relative"
            style={{
              backgroundImage: `url(${slice.primary.bgImage.url})`,
              backgroundSize: "90%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {slice.primary.images.map((item, index) => (
              renderParallaxImage(item, index)
            ))}
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
      <div className="h-1/6 flex items-center justify-center -mt-12">
        {/*TODO: link*/}
        <Image
          src={slice.primary.buttonImage.url!!}
          alt="Button image for header"
          width={130}
          height={130}
        />
      </div>
    </section>
  );
};

export default HomeHeader;
