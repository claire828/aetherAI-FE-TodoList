export const orderBy = ['decending','ascending','none'] as const;
export type orderByType = typeof orderBy[number];