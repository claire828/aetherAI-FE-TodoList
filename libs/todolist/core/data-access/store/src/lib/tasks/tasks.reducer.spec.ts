import * as fromReducer from './tasks.reducer';
import {addTaskSuccess, loadTasksSuccess , deleteTaskSuccess, editTaskSuccess, swichMenu} from "./tasks.action";



describe('BooksReducer', () => {
  const { initState } = fromReducer;
  const task = {
    id:'01',
    name:'testtask',
    complete:false,
    ts:10000000
  };

  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'unknown',
      };
      const state = fromReducer.tasksReducer(initState, action);
      expect(state).toBe(initState);
    });
  });


  describe(`retrieved action`, ()=>{
    it('should loaded all todolist',()=>{
      const newState = {...initState, status:'success', data:[task]};
      const action = loadTasksSuccess({tasks:newState.data});
      const state = fromReducer.tasksReducer(initState, action);
      expect(state).toEqual(newState)
      expect(state).not.toBe(initState);
    });
  });


  describe(`side-effect actions`,()=>{
    beforeEach(()=>{
      const action = loadTasksSuccess({tasks:initState.data});
      fromReducer.tasksReducer(initState, action);
    })

    it(`should add a task`,()=>{
      const defaultState = {...initState,data:[{...task, id:'0123'}, {...task, id:'01234'}]};
      const action = addTaskSuccess({task});
      const state = fromReducer.tasksReducer(defaultState, action);
      const newState = {...defaultState,status:'success', data:[...defaultState.data, task]};
      expect(state).toEqual(newState)
      expect(state).not.toBe(defaultState);
    })


    it(`should remove a task`,()=>{
      const defaultState = {...initState, data:[task]};
      const action = deleteTaskSuccess({id:task.id});
      const state = fromReducer.tasksReducer(defaultState, action);
      const newState = {...defaultState,status:'success',data:[]};
      expect(state).toEqual(newState)
      expect(state).not.toBe(defaultState);
      
    })


    it(`should edit a task`,()=>{
      const newTask = {...task, name:'new task', complete:true };
      const defaultState = {...initState, data:[task]};
      const action = editTaskSuccess({task:newTask});
      const state = fromReducer.tasksReducer(defaultState, action);
      const newState = {...defaultState,status:'success',data:[newTask]};
      expect(state).toEqual(newState);
      expect(state).not.toBe(defaultState);
    })
  })

  describe(`menu action`, ()=>{
    it('should switch menu',()=>{
      const newState = {...initState, menu:'active'};
      const action = swichMenu({menu:'active'});
      const state = fromReducer.tasksReducer(initState, action);
      expect(state).toEqual(newState);
      expect(state).not.toBe(initState);
      expect(state.menu).toEqual('active');
    });
  });

});