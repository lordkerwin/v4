// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Article = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Article'
  title: string
  publishedAt: string
  tags?: string[] | undefined
  summary: string
  /** MDX file body */
  body: MDX
  readingTime: json
  wordCount: number
  slug: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Article
export type DocumentTypeNames = 'Article'

export type NestedTypes = never
export type NestedTypeNames = never


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Article: Article
}

export type NestedTypeMap = {

}

 