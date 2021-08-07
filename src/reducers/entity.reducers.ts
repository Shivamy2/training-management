import { Entity } from "../Models/Entity";

export interface EntityState<T extends Entity> {
  byId: {
    [id: number]: T;
  };
}
