import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import gallery from "./sanity/schemas/gallery";
import profil from "./sanity/schemas/profil";
import project from "./sanity/schemas/project-schema"

export default defineConfig({
  title: "Ranveig M Nilsen 2",
  projectId: "x2eo8s32",
  dataset: "ranveigmnilsen2",
  apiVersion: "2023-03-04",
  basePath: "/admin", 
  plugins: [deskTool()],
  schema: {types: [gallery, profil]}
});
