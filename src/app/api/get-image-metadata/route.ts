import { getPlaiceholder } from "plaiceholder";

const getImageMetadata = async (url: string) => {
  const imageSource = await fetch(
    url.replace(
      process.env.NEXT_PUBLIC_CLIENT_TUS_URL,
      process.env.NEXT_PUBLIC_SERVER_TUS_URL,
    ),
  );
  const imageArrayBuffer = await imageSource.arrayBuffer();

  const imageBuffer = Buffer.from(imageArrayBuffer);

  const {
    metadata: { height, width },
    base64: blurDataUrl,
  } = await getPlaiceholder(imageBuffer, { size: 10 });

  return {
    width,
    height,
    blurDataUrl,
  };
};

const POST = async (request: Request) => {
  const body = await request.json();
  const { url } = body;

  const metadata = await getImageMetadata(url);

  return Response.json(metadata);
};

export { POST };
