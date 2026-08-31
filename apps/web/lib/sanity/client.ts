import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'awd005lt',
  dataset: 'production',
  apiVersion: '2025-08-31',
  useCdn: true,
});
