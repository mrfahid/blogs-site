import { createClient } from "next-sanity";

const projectId = "x1ula7zh";
const dataset = "production";
const apiVersion = "2024-05-16";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
