/**
 * @typedef {import("@prismicio/client").Content.FeatureProjectSlice} FeatureProjectSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureProjectSlice>} FeatureProjectProps
 * @param {FeatureProjectProps}
 */
const FeatureProject = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for feature_project (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FeatureProject;
