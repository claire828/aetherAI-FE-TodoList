// This tells TypeScript to treat the array as an immutable tuple
export const COLORS = ['blue', 'gray', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo', 'white', 'black'] as const;

// typeof Color retrieves the type of the COLOR constant;
// Adding [number] tells TypeScript to create a union of the tuple’s values
export type Color = typeof COLORS[number];
