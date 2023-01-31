// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import readingTime from "reading-time";
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
  }
};
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    tags: {
      type: "list",
      of: { type: "string" }
    },
    image: { type: "string" }
  },
  computedFields
}));
var contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Article]
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-SZT5IIGD.mjs.map
