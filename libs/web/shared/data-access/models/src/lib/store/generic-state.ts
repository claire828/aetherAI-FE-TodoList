export type GenericStoreState = 'pending' | 'loading' | 'success' | 'error';

export interface ICommonState<T>{
  data:T,
  error:string | null,
  status:GenericStoreState
}
