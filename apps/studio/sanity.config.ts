import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { documentInternationalization } from '@sanity/document-internationalization';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'OraFlow',

  projectId: 'awd005lt',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: 'sr', title: 'Serbian' },
        { id: 'de', title: 'German' },
      ],
      schemaTypes: ['post', 'category'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
