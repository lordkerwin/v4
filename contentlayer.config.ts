import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, ""),
  },
};

const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/*.md`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    image: { type: "string" },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Article],
});

export default contentLayerConfig;
