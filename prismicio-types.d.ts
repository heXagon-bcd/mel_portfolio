// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type GlobalnavDocumentDataSlicesSlice = GlobalMenuSlice;

/**
 * Content for globalnav documents
 */
interface GlobalnavDocumentData {
  /**
   * Slice Zone field in *globalnav*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: globalnav.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<GlobalnavDocumentDataSlicesSlice>;
}

/**
 * globalnav document from Prismic
 *
 * - **API ID**: `globalnav`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GlobalnavDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<GlobalnavDocumentData>,
    "globalnav",
    Lang
  >;

type HomeDocumentDataSlicesSlice = GlobalMenuSlice | HomeHeaderSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = GlobalnavDocument | HomeDocument;

/**
 * Item in *GlobalMenu → Default → Primary → menu items*
 */
export interface GlobalMenuSliceDefaultPrimaryMenuItemsItem {
  /**
   * menu items field in *GlobalMenu → Default → Primary → menu items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: global_menu.default.primary.menu_items[].menu_items
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  menu_items: prismic.Repeatable<prismic.LinkField>;
}

/**
 * Primary content in *GlobalMenu → Default → Primary*
 */
export interface GlobalMenuSliceDefaultPrimary {
  /**
   * menu items field in *GlobalMenu → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: global_menu.default.primary.menu_items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_items: prismic.GroupField<
    Simplify<GlobalMenuSliceDefaultPrimaryMenuItemsItem>
  >;
}

/**
 * Default variation for GlobalMenu Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GlobalMenuSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GlobalMenuSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *GlobalMenu*
 */
type GlobalMenuSliceVariation = GlobalMenuSliceDefault;

/**
 * GlobalMenu Shared Slice
 *
 * - **API ID**: `global_menu`
 * - **Description**: GlobalMenu
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GlobalMenuSlice = prismic.SharedSlice<
  "global_menu",
  GlobalMenuSliceVariation
>;

/**
 * Item in *HomeHeader → Default → Primary → images*
 */
export interface HomeHeaderSliceDefaultPrimaryImagesItem {
  /**
   * image field in *HomeHeader → Default → Primary → images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_header.default.primary.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Item in *HomeHeader → Default → Primary → bgimage*
 */
export interface HomeHeaderSliceDefaultPrimaryBgimageItem {
  /**
   * bgimage field in *HomeHeader → Default → Primary → bgimage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_header.default.primary.bgimage[].bgimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bgimage: prismic.ImageField<never>;

  /**
   * bgimage2 field in *HomeHeader → Default → Primary → bgimage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_header.default.primary.bgimage[].bgimage2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bgimage2: prismic.ImageField<never>;
}

/**
 * Primary content in *HomeHeader → Default → Primary*
 */
export interface HomeHeaderSliceDefaultPrimary {
  /**
   * Header field in *HomeHeader → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_header.default.primary.header
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  header: prismic.KeyTextField;

  /**
   * images field in *HomeHeader → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home_header.default.primary.images[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<Simplify<HomeHeaderSliceDefaultPrimaryImagesItem>>;

  /**
   * bgimage field in *HomeHeader → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home_header.default.primary.bgimage[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  bgimage: prismic.GroupField<
    Simplify<HomeHeaderSliceDefaultPrimaryBgimageItem>
  >;
}

/**
 * Default variation for HomeHeader Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HomeHeaderSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HomeHeader*
 */
type HomeHeaderSliceVariation = HomeHeaderSliceDefault;

/**
 * HomeHeader Shared Slice
 *
 * - **API ID**: `home_header`
 * - **Description**: HomeHeader
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeaderSlice = prismic.SharedSlice<
  "home_header",
  HomeHeaderSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      GlobalnavDocument,
      GlobalnavDocumentData,
      GlobalnavDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      GlobalMenuSlice,
      GlobalMenuSliceDefaultPrimaryMenuItemsItem,
      GlobalMenuSliceDefaultPrimary,
      GlobalMenuSliceVariation,
      GlobalMenuSliceDefault,
      HomeHeaderSlice,
      HomeHeaderSliceDefaultPrimaryImagesItem,
      HomeHeaderSliceDefaultPrimaryBgimageItem,
      HomeHeaderSliceDefaultPrimary,
      HomeHeaderSliceVariation,
      HomeHeaderSliceDefault,
    };
  }
}
