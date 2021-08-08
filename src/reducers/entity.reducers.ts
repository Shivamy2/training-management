import { Entity } from "../Models/Entity";

export interface EntityState<T extends Entity = Entity> {
  byId: {
    [id: number]: T;
  };
}

export const getIds = (entities: Entity[]) => entities.map((e) => e.id);

export const addMany = (state: EntityState, entities: Entity[]) => {
  const entityMap = entities.reduce((previous, entity) => {
    return { ...previous, [entity.id]: entity };
  }, {});
  return { ...state, byId: { ...state.byId, ...entityMap } };
};

export const addOne = (state: EntityState, entity: Entity) => {
  return { ...state, byId: { ...state.byId, [entity.id]: entity } };
};
