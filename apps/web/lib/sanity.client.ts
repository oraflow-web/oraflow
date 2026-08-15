import { createClient } from "next-sanity";
import { PROJECT_ID, DATASET } from "@oraflow/sanity";

export const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2024-12-01",
  useCdn: true,
});
