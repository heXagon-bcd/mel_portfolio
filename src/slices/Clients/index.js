"use client";
/**
 * @typedef {import("@prismicio/client").Content.ClientsSlice} ClientsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ClientsSlice>} ClientsProps
 * @param {ClientsProps}
 */
import Image from "next/image";

const Clients = ({ slice }) => {
  console.log("iamge", slice.primary.bgimage.url);
  return (
    <section
      className=" "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="h-60 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${slice.primary.bgimage.url})`,
        }}
      >
        {slice.primary.clientroster.map((item, index) => (
          <Image
            key={index}
            src={item.client.url}
            width={item.client.dimensions.width}
            height={item.client.dimensions.height}
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
