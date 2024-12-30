"use client";
/**
 * @typedef {import("@prismicio/client").Content.OneSlice} OneSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OneSlice>} OneProps
 * @param {OneProps}
 */

import Image from "next/image";

const One = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="h-screen relative"
    >
      <div>
        <Image
          src={slice.primary.image1.url}
          width={slice.primary.image1.dimensions.width}
          height={slice.primary.image1.dimensions.height}
        />
        <Image
          src={slice.primary.image2.url}
          width={slice.primary.image2.dimensions.width}
          height={slice.primary.image2.dimensions.height}
        />
      </div>
      <Image
        src={slice.primary.image3.url}
        width={slice.primary.image3.dimensions.width}
        height={slice.primary.image3.dimensions.height}
      />
    </section>
  );
};

export default One;
