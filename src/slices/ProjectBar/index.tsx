"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useState } from "react";

/**
 * Props for `ProjectBar`.
 */
export type ProjectBarProps = SliceComponentProps<Content.ProjectBarSlice>;

/**
 * Component for "ProjectBar" Slices.
 */
// TODO: link to other case studies
const ProjectBar = ({ slice }: ProjectBarProps): JSX.Element => {
  const [currSelection, setCurrSelection] = useState(0);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-row gap-8 ml-auto font-poppins text-holidaygreen font-bold mr-16"
    >
      {slice.primary.projectItems.map((projectItem, i) => (
        <div
          key={`project_bar_label_${projectItem.label}`}
          className={`${currSelection === i && "underline underline-offset-8"} hover:scale-105 transition-transform cursor-pointer`}
          onClick={() => setCurrSelection(i)}
        >
          {projectItem.label}
        </div>
      ))}
    </section>
  );
};

export default ProjectBar;
