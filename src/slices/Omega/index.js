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
      className="h-screen relative pt-20"
    >
      <div>
        <Image
          src={slice.primary.image1.url}
          width={slice.primary.image1.dimensions.width}
          height={slice.primary.image1.dimensions.height}
          alt={slice.primary.image1.alt}
        />
      </div>
    </section>
  );
};

export default One;
