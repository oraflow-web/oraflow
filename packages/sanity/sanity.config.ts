import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";
import { PROJECT_ID, DATASET } from "./env";
import { schemas } from "./schemas";

export default defineConfig({
  name: "oraflow",
  title: "OraFlow Studio",
  projectId: PROJECT_ID,
  dataset: DATASET,

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: "sr", title: "Srpski" },
        { id: "de", title: "Deutsch" },
      ],
      schemaTypes: ["post", "category"],
    }),
  ],

  schema: {
    types: schemas,
  },
});
