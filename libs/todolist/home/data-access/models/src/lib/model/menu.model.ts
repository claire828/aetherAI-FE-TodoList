export const tasksMenus = [ 'all' , 'active' , 'completed'] as const;
export type tasksMenuType = typeof tasksMenus[number];