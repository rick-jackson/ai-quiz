export const splitArray = (
  n: number,
  array: { title: string; subtopics: string[] }[]
) => {
  const result = [];
  const chunkSize = Math.ceil(array.length / n);

  for (let i = 0; i < n; i++) {
    const start = i * chunkSize;
    const end = start + chunkSize;
    result.push(array.slice(start, end));
  }

  return result;
};
