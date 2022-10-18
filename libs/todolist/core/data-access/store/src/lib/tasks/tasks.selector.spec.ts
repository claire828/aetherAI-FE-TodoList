import { getTasksLoaing, getTasks , getCurrMenu } from "./tasks.selector"; 
import { ITask,tasksMenus } from "@monorepo/todolist/core/data-access/models";
import { ITaskState } from "./tasks.reducer";

describe("Selectors", () => {

  const initState:ITaskState<ITask[]> = {
    data:[],
    error:"",
    status:"pending",
    menu: tasksMenus[0]
  }

  it("should select loding correct", () => {
    const isLoading = getTasksLoaing.projector(initState);
    expect(isLoading).toBeFalsy();
  });

  it("should select task correct", () => {
    const tasks = getTasks.projector(initState);
    expect(tasks.length).toEqual(initState.data.length);
  });

  it("should select menu correct", () => {
    const menu = getCurrMenu.projector(initState);
    expect(menu).toEqual(initState.menu);
  });

});