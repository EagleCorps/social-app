const getBasename = (filename: string) =>
  /(([^/\\.#? ]+)(\.\w+)*)([?#].+)?$/.exec(filename)?.[2] || filename;

export { getBasename };
