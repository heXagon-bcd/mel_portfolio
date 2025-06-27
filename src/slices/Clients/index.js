"use client";

/**
 * @typedef {import("@prismicio/client").Content.ClientsSlice} ClientsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ClientsSlice>} ClientsProps
 * @param {ClientsProps}
 */
import Image from "next/image";

const Clients = ({ slice }) => {
  return (
    <section
      className="relative p-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        style={{
          backgroundImage: `url(${slice.primary.bgImage.url})`,
        }}
        className="h-48 bg-contain bg-no-repeat bg-[length:100%] lg:bg-[length:60%] "
      >
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 pt-12 sm:pt-20 lg:pt-12 lg:pl-20 items-center justify-items-center">
          {slice.primary.clientRoster.map((item, index) => {
            return (
              <div key={`client_roster_logos_${index}`}>
                <Image
                  src={item.client.url}
                  width={item.client.dimensions.width}
                  height={100}
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
