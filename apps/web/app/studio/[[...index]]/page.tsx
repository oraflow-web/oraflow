"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@oraflow/sanity/config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
