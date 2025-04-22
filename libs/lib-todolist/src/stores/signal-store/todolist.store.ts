import { updateState, withCallState, withDevtools, withGlitchTracking, withUndoRedo } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import {
  addEntities,
  addEntity,
  removeEntities,
  removeEntity,
  setEntities,
  setEntity,
  updateEntities,
  updateEntity,
  withEntities
} from '@ngrx/signals/entities';
import { TaskEntity } from '../models';
import { TodolistState } from '../models/todolist.state';

const initialState: TodolistState = {
  selectedIds: [],
}

export const TodolistSignalStore = signalStore(
  // withDevtools is a helper function that adds the devtools to the store
  withDevtools('todolistRoot', withGlitchTracking()),
  withState(initialState),
  withUndoRedo(),
  // withCallState is a helper function that adds a call state to the store
  withCallState(),
  withEntities<TaskEntity>(),
  withComputed((store) => ({
    todoLists: computed(() => store.entities())
  })),
  withMethods(
    (store) => ({
      fetchAllTask: async () => {
        const url = 'http://localhost:3000/tasks';
        const data = await fetch(url);
        if (!data.ok) {
          throw Error('error');
        }
        return await data.json() as TaskEntity[];
      },

      // addEntity: Adds an entity to the collection.
      // If the entity collection has an entity with the same ID, it is not overridden and no error is thrown.
      addTodo(todo: TaskEntity): void {
        patchState(store, addEntity(todo));
      },

      addTodos(todos: TaskEntity[]): void {
        // updateState is a wrapper around patchState and has an action name as second parameter
        updateState(store, 'AddTodos', addEntities(todos));
      },

      // setEntity: Adds or replaces an entity in the collection.
      Todo(todo: TaskEntity): void {
        patchState(store, setEntity(todo));
      },

      setTodos(todos: TaskEntity[]): void {
        patchState(store, setEntities(todos));
      },

      updateTodoName(updateTodo: TaskEntity): void {
        patchState(store, updateEntity({
          id: updateTodo.id,
          changes: (todo) => ({ ...todo, name: updateTodo.name })
        }));
      },

      deleteTodo(todo: TaskEntity): void {
        // patchState(store, removeEntity(todo.id));
        patchState(store, (state) => {
          return {
            ...removeEntity(todo.id)(state),
            selectedIds: state.selectedIds.filter((selectedId) => selectedId !== todo.id),
          };
        });
      },

      // remove all todos that are empty
      removeEmptyTodos(): void {
        patchState(store, removeEntities(({ name }) => !name));
      },

      // complete all todos
      completeAllTodos(completed: boolean): void {
        patchState(store, updateEntities({
          ids: store.selectedIds(),
          changes: { completed }
        }));
      },

      addSelected(id: string): void {
        patchState(store, {
          selectedIds: [...store.selectedIds(), id]
        });
      },
      removeSelected(id: string): void {
        patchState(store, {
          selectedIds: [...store.selectedIds().filter((selectedId) => selectedId !== id)]
        });
      },

    }),

  ),
  // withEffects (effects)
  withHooks({
    onInit(store) {
      store.fetchAllTask().then(tasks => {
        store.addTodos(tasks);
      }).catch(error => {
        console.error('Failed to fetch tasks:', error);
      });
    }
  }),
);


/*
 https://ngrx.io/guide/signals/signal-store/entity-management
  // update entities by IDs
patchState(
  store,
  updateEntities({ ids: [1, 2], changes: { completed: true } })
);

patchState(
  store,
  updateEntities({
    ids: [1, 2],
    changes: (todo) => ({ completed: !todo.completed }),
  })
);

// update entities by predicate
patchState(
  store,
  updateEntities({
    predicate: ({ text }) => text.endsWith('✅'),
    changes: { text: '' },
  })
);

patchState(
  store,
  updateEntities({
    predicate: ({ text }) => text.endsWith('❓'),
    changes: (todo) => ({ text: todo.text.slice(0, -1) }),
  })
);

*/
