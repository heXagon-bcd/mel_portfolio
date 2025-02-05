"use client";
/**
 * @typedef {import("@prismicio/client").Content.ClientsSlice} ClientsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ClientsSlice>} ClientsProps
 * @param {ClientsProps}
 */
import Image from "next/image";

const Clients = ({ slice }) => {
  console.log("iamge", slice.primary);
  return (
    <section
      className="relative p-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="h-48 bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${slice.primary.bgimage.url})`,
          backgroundSize: "contain",
        }}
      >
        <div className="flex flex-row absolute bottom-0 right-0">
          {slice.primary.clientroster.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  src={item.client.url}
                  width={item.client.dimensions.width}
                  height={item.client.dimensions.height}
                  alt={item.client.alt}
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
