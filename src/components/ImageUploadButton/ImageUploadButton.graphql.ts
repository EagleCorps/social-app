import { graphql } from "@/graphql";

const ImageUploadButton_ImageFragment = graphql(`
  fragment ImageUploadButton_ImageFragment on Images {
    id
    url
    width
    height
    blurDataUrl
    name
    description
    createdAt
    updatedAt
  }
`);

const CreateImages_Mutation = graphql(`
  mutation CreateImages_Mutation($imageObjects: [ImagesInsertInput!]!) {
    insertImages(objects: $imageObjects) {
      returning {
        id
        ...ImageUploadButton_ImageFragment
      }
    }
  }
`);

export { ImageUploadButton_ImageFragment, CreateImages_Mutation };
