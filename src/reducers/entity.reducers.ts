export interface EntityState<T> {
  byId: {
    [id: number]: T;
  };
}
