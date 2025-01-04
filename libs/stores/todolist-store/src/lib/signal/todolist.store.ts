import { patchState, signalStore, withMethods } from '@ngrx/signals';
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

export const TodolistStore = signalStore(
  withEntities<TaskEntity>(),
  withMethods(
    (store) => ({
      // addEntity: Adds an entity to the collection.
      // If the entity collection has an entity with the same ID, it is not overridden and no error is thrown.
      addTodo(todo: TaskEntity): void {
        patchState(store, addEntity(todo));
      },

      addTodos(todos: TaskEntity[]): void {
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

    })
  )
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