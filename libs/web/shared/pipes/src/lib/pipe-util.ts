export const orderBy = ['descending','ascending','none'] as const;
export type orderByType = typeof orderBy[number];