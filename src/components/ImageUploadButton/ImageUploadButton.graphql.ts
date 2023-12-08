import { graphql } from "@/graphql";

const ImageUploadButton_ImageFragment = graphql(`
  fragment ImageUploadButton_ImageFragment on Images {
    id
    url
    altText
    createdAt
    updatedAt
  }
`);

const CreateImage_Mutation = graphql(`
  mutation CreateImage_Mutation(
    $uploaderId: uuid!
    $url: String!
    $altText: String!
    $height: Int
    $width: Int
  ) {
    insertImagesOne(
      object: {
        uploaderId: $uploaderId
        url: $url
        altText: $altText
        width: $width
        height: $height
      }
    ) {
      id
      ...ImageUploadButton_ImageFragment
    }
  }
`);

export { ImageUploadButton_ImageFragment, CreateImage_Mutation };
