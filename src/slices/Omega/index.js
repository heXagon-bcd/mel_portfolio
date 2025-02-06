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
        {/* Omega container */}
        <Image
          src={slice.primary.image1.url}
          width={slice.primary.image1.dimensions.width}
          height={slice.primary.image1.dimensions.height}
          alt={slice.primary.image1.alt}
        />
        <div className="h-28rem w-28rem rounded-xl border-holidaygreen border">
          <div className="m-10">
            {slice.primary.copy.map((item, index) => (
              <div
                key={index}
                className="gap-2 text-holidaygreen text-xl font-normal"
              >
                <div className="bg-holidaygreen w-28 h-2 mb-6" />
                <p className="text-5xl italic font-sanserif">
                  {slice.primary.header}
                </p>
                <div className="font-poppins p-4">
                  <li className="text-2xl font-normal mt-2">{item.bullet1}</li>
                  <li className="text-2xl font-normal mt-2">{item.bullet2}</li>
                  <li className="text-2xl font-normal mt-2">{item.bullet3}</li>
                </div>
                <div className="bg-holidaygreen flex justify-between w-68 p-2 px-3 font-bold text-white text-xl font-Poppins flex-row">
                  {slice.primary.viewcasestudy}
                  {
                    <Image
                      className="bg-contain w-auto"
                      src={slice.primary.arrow.url}
                      width={slice.primary.arrow.dimensions.width}
                      height={slice.primary.arrow.dimensions.height}
                      alt={slice.primary.arrow.alt}
                    />
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured rpojects */}
        <div className="flex flex-row gap-4 h-auto justify-center items-center">
          {slice.primary.projectfeature1?.url && (
            <Image
              src={slice.primary.projectfeature1.url}
              width={slice.primary.projectfeature1.dimensions.width}
              height={slice.primary.projectfeature1.dimensions.height}
              alt={slice.primary.projectfeature1.alt}
              className="object-contain"
            />
          )}
          {slice.primary.projectfeature2?.url && (
            <Image
              src={slice.primary.projectfeature2.url}
              width={slice.primary.projectfeature2.dimensions.width}
              height={slice.primary.projectfeature2.dimensions.height}
              alt={slice.primary.projectfeature2.alt}
              className="object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default One;
