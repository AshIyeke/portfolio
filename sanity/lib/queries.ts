import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    description,
    techStack,
    projectUrl,
    githubUrl,
    category,
    publishedAt
  }
`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    gallery,
    description,
    techStack,
    projectUrl,
    githubUrl,
    category,
    publishedAt
  }
`);

export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    image,
    description,
    price,
    category
  }
`);

export const PRODUCT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    image,
    description,
    price,
    category,
    _createdAt
  }
`);
