"use client";
/**
 * @typedef {import("@prismicio/client").Content.OneSlice} OneSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OneSlice>} OneProps
 * @param {OneProps}
 */

import Image from "next/image";

const One = ({ slice }) => {
  console.log("slice project feature", slice.primary.projectfeature1);
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
        {slice.primary.projectfeature1.url && (
          <div className="flex flex-row gap-4 h-auto justify-center items-center">
            <Image
              src={slice.primary.projectfeature1.url}
              width={slice.primary.projectfeature1.dimensions.width}
              height={slice.primary.projectfeature1.dimensions.height}
              alt={slice.primary.projectfeature1.alt}
              className="object-contain"
            />
            <Image
              src={slice.primary.projectfeature2.url}
              width={slice.primary.projectfeature2.dimensions.width}
              height={slice.primary.projectfeature2.dimensions.height}
              alt={slice.primary.projectfeature2.alt}
              className="object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default One;
