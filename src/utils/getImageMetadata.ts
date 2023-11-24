const getImageMetadata = async (url: string) => {
  const img = new Image();
  img.src = url;
  await img.decode();
  return img;
};

export { getImageMetadata };
