// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/types";
import type * as prismicClient from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *About → Gallery*
 */
export interface AboutDocumentDataGalleryItem {
  /**
   * Image field in *About → Gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.gallery[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *About → Slice zone → Title → Primary*
 */
export interface AboutDocumentDataBodyTitleSlicePrimary {
  /**
   * Text field in *About → Slice zone → Title → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].title.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Slice for *About → Slice zone*
 */
export type AboutDocumentDataBodyTitleSlice = prismic.Slice<
  "title",
  Simplify<AboutDocumentDataBodyTitleSlicePrimary>,
  never
>;

/**
 * Primary content in *About → Slice zone → Content → Primary*
 */
export interface AboutDocumentDataBodyContentSlicePrimary {
  /**
   * Label field in *About → Slice zone → Content → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].content.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Description field in *About → Slice zone → Content → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].content.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *About → Slice zone → Content → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].content.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Type field in *About → Slice zone → Content → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Left
   * - **API ID Path**: about.body[].content.primary.type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<"Left" | "Right", "filled">;
}

/**
 * Slice for *About → Slice zone*
 */
export type AboutDocumentDataBodyContentSlice = prismic.Slice<
  "content",
  Simplify<AboutDocumentDataBodyContentSlicePrimary>,
  never
>;

/**
 * Primary content in *About → Slice zone → Highlight → Primary*
 */
export interface AboutDocumentDataBodyHighlightSlicePrimary {
  /**
   * Label field in *About → Slice zone → Highlight → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].highlight.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Title field in *About → Slice zone → Highlight → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].highlight.primary.title1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title1: prismic.KeyTextField;
}

/**
 * Item content in *About → Slice zone → Highlight → Items*
 */
export interface AboutDocumentDataBodyHighlightSliceItem {
  /**
   * Image field in *About → Slice zone → Highlight → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].highlight.items.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Slice for *About → Slice zone*
 */
export type AboutDocumentDataBodyHighlightSlice = prismic.Slice<
  "highlight",
  Simplify<AboutDocumentDataBodyHighlightSlicePrimary>,
  Simplify<AboutDocumentDataBodyHighlightSliceItem>
>;

/**
 * Item content in *About → Slice zone → Gallery → Items*
 */
export interface AboutDocumentDataBodyGallerySliceItem {
  /**
   * Image field in *About → Slice zone → Gallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].gallery.items.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Slice for *About → Slice zone*
 */
export type AboutDocumentDataBodyGallerySlice = prismic.Slice<
  "gallery",
  Record<string, never>,
  Simplify<AboutDocumentDataBodyGallerySliceItem>
>;

type AboutDocumentDataBodySlice =
  | AboutDocumentDataBodyTitleSlice
  | AboutDocumentDataBodyContentSlice
  | AboutDocumentDataBodyHighlightSlice
  | AboutDocumentDataBodyGallerySlice;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Gallery field in *About*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.gallery[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  gallery: prismic.GroupField<Simplify<AboutDocumentDataGalleryItem>>;

  /**
   * Slice zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  body: prismic.SliceZone<AboutDocumentDataBodySlice>;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

/**
 * Item in *Collection → Products*
 */
export interface CollectionDocumentDataProductsItem {
  /**
   * Product field in *Collection → Products*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: collection.products[].products_product
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  products_product: prismic.ContentRelationshipField<"produc">;
}

/**
 * Content for Collection documents
 */
interface CollectionDocumentData {
  /**
   * Title field in *Collection*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: collection.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Collection*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: collection.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Products field in *Collection*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: collection.products[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  products: prismic.GroupField<Simplify<CollectionDocumentDataProductsItem>>;
}

/**
 * Collection document from Prismic
 *
 * - **API ID**: `collection`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CollectionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CollectionDocumentData>,
    "collection",
    Lang
  >;

interface CollectionsDocumentData {}

/**
 * Collections document from Prismic
 *
 * - **API ID**: `collections`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CollectionsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CollectionsDocumentData>,
    "collections",
    Lang
  >;

/**
 * Item in *Home → Gallery*
 */
export interface HomeDocumentDataGalleryItem {
  /**
   * Image field in *Home → Gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.gallery[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Gallery field in *Home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.gallery[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  gallery: prismic.GroupField<Simplify<HomeDocumentDataGalleryItem>>;

  /**
   * Collection field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.collection
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  collection: prismic.KeyTextField;

  /**
   * Button field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.button
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button: prismic.KeyTextField;

  /**
   * Collections field in *Home*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: home.collections
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  collections: prismic.ContentRelationshipField<"collections">;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Content for Metadata documents
 */
interface MetadataDocumentData {
  /**
   * Title field in *Metadata*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: metadata.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Metadata*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: metadata.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Image field in *Metadata*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: metadata.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Metadata document from Prismic
 *
 * - **API ID**: `metadata`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MetadataDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MetadataDocumentData>,
    "metadata",
    Lang
  >;

/**
 * Item in *Navigation → List*
 */
export interface NavigationDocumentDataListItem {
  /**
   * Link field in *Navigation → List*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.list[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.ContentRelationshipField;

  /**
   * Text field in *Navigation → List*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.list[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * List field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.list[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  list: prismic.GroupField<Simplify<NavigationDocumentDataListItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

/**
 * Content for Preloader documents
 */
interface PreloaderDocumentData {
  /**
   * Title field in *Preloader*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: preloader.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Preloader document from Prismic
 *
 * - **API ID**: `preloader`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PreloaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PreloaderDocumentData>,
    "preloader",
    Lang
  >;

/**
 * Item in *Product → Highlights*
 */
export interface ProducDocumentDataHighlightsItem {
  /**
   * Icons field in *Product → Highlights*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Arrow
   * - **API ID Path**: produc.highlights[].highlight_icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  highlight_icon: prismic.SelectField<"Arrow" | "Star", "filled">;

  /**
   * Text field in *Product → Highlights*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produc.highlights[].highlight_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  highlight_text: prismic.KeyTextField;
}

/**
 * Item in *Product → Information*
 */
export interface ProducDocumentDataInformationItem {
  /**
   * Label field in *Product → Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produc.information[].informations_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  informations_label: prismic.KeyTextField;

  /**
   * Description field in *Product → Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produc.information[].informations_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  informations_description: prismic.KeyTextField;
}

/**
 * Content for Product documents
 */
interface ProducDocumentData {
  /**
   * Collection field in *Product*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: produc.collection
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  collection: prismic.ContentRelationshipField<"collection">;

  /**
   * Text field in *Product*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: produc.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.TitleField;

  /**
   * Image field in *Product*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: produc.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Model field in *Product*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: produc.model
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  model: prismic.ImageField<never>;

  /**
   * Highlights field in *Product*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: produc.highlights[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  highlights: prismic.GroupField<Simplify<ProducDocumentDataHighlightsItem>>;

  /**
   * Information field in *Product*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: produc.information[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  information: prismic.GroupField<Simplify<ProducDocumentDataInformationItem>>;

  /**
   * Shop it - Text field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produc.link_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField;

  /**
   * Shop it - Link field in *Product*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: produc.link_url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_url: prismic.LinkField;
}

/**
 * Product document from Prismic
 *
 * - **API ID**: `produc`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProducDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ProducDocumentData>, "produc", Lang>;

export type AllDocumentTypes =
  | AboutDocument
  | CollectionDocument
  | CollectionsDocument
  | HomeDocument
  | MetadataDocument
  | NavigationDocument
  | PreloaderDocument
  | ProducDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismicClient.ClientConfig
    ): prismicClient.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismicClient.WriteClientConfig
    ): prismicClient.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismicClient.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataGalleryItem,
      AboutDocumentDataBodyTitleSlicePrimary,
      AboutDocumentDataBodyContentSlicePrimary,
      AboutDocumentDataBodyHighlightSlicePrimary,
      AboutDocumentDataBodyHighlightSliceItem,
      AboutDocumentDataBodyGallerySliceItem,
      AboutDocumentDataBodySlice,
      CollectionDocument,
      CollectionDocumentData,
      CollectionDocumentDataProductsItem,
      CollectionsDocument,
      CollectionsDocumentData,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataGalleryItem,
      MetadataDocument,
      MetadataDocumentData,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataListItem,
      PreloaderDocument,
      PreloaderDocumentData,
      ProducDocument,
      ProducDocumentData,
      ProducDocumentDataHighlightsItem,
      ProducDocumentDataInformationItem,
      AllDocumentTypes,
    };
  }
}
