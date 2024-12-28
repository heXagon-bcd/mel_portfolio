/**
 * @typedef {import("@prismicio/client").Content.OneSlice} OneSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OneSlice>} OneProps
 * @param {OneProps}
 */
const One = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for one (variation: {slice.variation}) Slices
    </section>
  );
};

export default One;
