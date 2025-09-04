import { Content } from "@prismicio/client";
import {PrismicRichText, PrismicText, SliceComponentProps} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { CaseStudiesSliceDefaultPrimaryMainCaseStudiesItem, Simplify } from "../../../prismicio-types";
import GreenLine from "../../../public/green_line.png";
import Image from "next/image";
import {KeyTextField} from "@prismicio/types";
import { FaArrowRightLong } from "react-icons/fa6";

/**
 * Props for `CaseStudies`.
 */
export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

const getLeftAlignment = (
  mainCaseStudy: Simplify<CaseStudiesSliceDefaultPrimaryMainCaseStudiesItem>,
  buttonText: KeyTextField
) => {
  return (
    <div className="flex grid grid-cols-3 px-16 mb-12 items-center">
      <div className="col-span-2">
        <PrismicNextImage field={mainCaseStudy.caseStudyNumberImage}/>
        <PrismicNextImage
          field={mainCaseStudy.caseStudyImage}
          className="-mt-16 w-full"
        />
      </div>
      <div className="col-start-3 border border-holidaygreen text-holidaygreen mt-32 rounded-3xl -ml-4 p-8">
        <Image alt="Green Line logo" src={GreenLine.src} height={100} width={100} />
        <h3 className="my-4 text-2xl italic">
          {mainCaseStudy.caseStudyTitle}
        </h3>
        <PrismicRichText
          field={mainCaseStudy.caseStudyContent}
          components={{
            list: ({ children }) => (
              <ul className="list-disc pl-6 space-y-2">{children}</ul>
            ),
            oList: ({ children }) => (
              <ol className="list-decimal pl-6 space-y-2">{children}</ol>
            ),
            listItem: ({ children }) => <li>{children}</li>,
          }}
        />
        <button className="flex flex-row items-center justify-between bg-holidaygreen text-white px-3 py-2 mt-8 w-full">
          {buttonText ?? "VIEW CASE STUDY"}
          <FaArrowRightLong className="fill-white size-7" />
        </button>
      </div>
    </div>
  )
}

const getRightAlignment = (
  mainCaseStudy: Simplify<CaseStudiesSliceDefaultPrimaryMainCaseStudiesItem>,
  buttonText: KeyTextField
) => {
  return (
    <div className="flex grid grid-cols-3 px-16 mb-12 items-center">
      <div className="col-start-1 col-span-1 border border-holidaygreen text-holidaygreen mt-32 rounded-3xl -mr-12 p-8 z-20">
        <Image alt="Green Line logo" src={GreenLine.src} height={100} width={100}/>
        <h3 className="my-4 text-2xl italic">
          {mainCaseStudy.caseStudyTitle}
        </h3>
        <PrismicRichText
          field={mainCaseStudy.caseStudyContent}
          components={{
            list: ({children}) => (
              <ul className="list-disc pl-6 space-y-2">{children}</ul>
            ),
            oList: ({children}) => (
              <ol className="list-decimal pl-6 space-y-2">{children}</ol>
            ),
            listItem: ({children}) => <li>{children}</li>,
          }}
        />
        <button className="flex flex-row items-center justify-between bg-holidaygreen text-white px-3 py-2 mt-8 w-full">
          {buttonText ?? "VIEW CASE STUDY"}
          <FaArrowRightLong className="fill-white size-7"/>
        </button>
      </div>
      <div className="col-span-2 col-start-2">
        <PrismicNextImage field={mainCaseStudy.caseStudyNumberImage} className="ml-auto" />
        <PrismicNextImage
          field={mainCaseStudy.caseStudyImage}
          className="-mt-16 w-full"
        />
      </div>
    </div>
  )
}

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies = ({slice}: CaseStudiesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col my-16 pb-8"
      id={`${slice.primary.key}`}
    >
      <PrismicNextImage field={slice.primary.categoryHeader} className="mb-8" />
      {slice.primary.mainCaseStudies.map((mainCaseStudy, i) => {
        switch (mainCaseStudy.alignment) {
          case "left":
            return (
              <div
                key={`${i}-${mainCaseStudy.caseStudyTitle}`}
              >
                {getLeftAlignment(mainCaseStudy, slice.primary.buttonText)}
              </div>
            );
          case "right":
            return (
              <div
                key={`${i}-${mainCaseStudy.caseStudyTitle}`}
              >
                {getRightAlignment(mainCaseStudy, slice.primary.buttonText)}
              </div>
            )
          default:
            return <></>;
        }
      })}
      <div className="grid grid-cols-2 gap-x-8 px-4">
        {slice.primary.additionalCaseStudyThumbnails.map(image => (
          <PrismicNextImage key={`case_study_thumbnail__${image.thumbnail.url}`} field={image.thumbnail} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
