import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import {
  addEntities,
  addEntity,
  removeEntities,
  setEntities,
  setEntity,
  updateAllEntities,
  updateEntity,
  withEntities
} from '@ngrx/signals/entities';
import { TaskEntity } from '../models';
import { TodolistState } from '../models/todolist.state';

const initialState: TodolistState = {
  selectedIds: [],
}

export const TodolistSignalStore = signalStore(
  { providedIn: 'root' },

  // withEffects (effects)
  // withComputed (selector)
  withState(initialState),
  withEntities<TaskEntity>(),
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
        console.log('AddTodos', todos);
        patchState(store, addEntities(todos));
      },

      // setEntity: Adds or replaces an entity in the collection.
      setTodo(todo: TaskEntity): void {
        patchState(store, setEntity(todo));
      },

      setTodos(todos: TaskEntity[]): void {
        patchState(store, setEntities(todos));
      },

      // updateEntity: Updates an entity in the collection.
      // No error is thrown if an entity doesn't exist.
      updateTodo(todo: TaskEntity): void {
        patchState(store, updateEntity({
          id: todo.id,
          changes: () => ({ ...todo })
        }));
      },

      // TODO: 這邊可以調整，變得更加泛型
      updateTodoName(updateTodo: TaskEntity): void {
        patchState(store, updateEntity({
          id: updateTodo.id,
          changes: (todo) => ({ ...todo, name: updateTodo.name })
        }));
      },

      // remove all todos that are empty
      removeEmptyTodos(): void {
        patchState(store, removeEntities(({ name }) => !name));
      },

      // complete all todos
      completeAllTodos(completed: boolean): void {
        patchState(store, updateAllEntities({ completed }));
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
  withHooks({
    onInit(store) {
      console.log('TodolistSignalStore onInit');
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
