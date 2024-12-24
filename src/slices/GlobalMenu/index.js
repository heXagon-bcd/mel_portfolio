/**
 * @typedef {import("@prismicio/client").Content.GlobalMenuSlice} GlobalMenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GlobalMenuSlice>} GlobalMenuProps
 * @param {GlobalMenuProps}
 */
const GlobalMenu = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for global_menu (variation: {slice.variation})
      Slices
    </section>
  );
};

export default GlobalMenu;
