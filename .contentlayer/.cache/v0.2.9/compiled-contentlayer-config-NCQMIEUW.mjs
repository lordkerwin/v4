// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, "")
  }
};
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/*.md`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    tags: { type: "object" },
    image: { type: "string" }
  },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Article]
});
export {
  Article,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-NCQMIEUW.mjs.map
