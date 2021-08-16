import { Entity } from "../Models/Entity";

export interface EntityState<T extends Entity = Entity> {
  byId?: {
    [id: number]: T;
  };
  selectedId?: number;
  loadingList: boolean;
  loadingOne: boolean;
  errorMessage?: string;
  mappedData?: { [keyword: string]: number[] };
}

export const initialEntityState = {
  loadingList: false,
  loadingOne: false,
};

export const getIds = (entities: Entity[]) => entities?.map((e) => e.id);

export const setErrorMessage = (
  state: EntityState,
  id: number,
  message: string
) => {
  if (state.selectedId !== id) return state;
  return {
    ...state,
    errorMessage: message,
    loadingOne: false,
  };
};

export const select = (state: EntityState, id: number) => {
  return { ...state, selectedId: id, loadingOne: true };
};

export const addMany = (
  state: EntityState,
  entities: Entity[],
  loading?: boolean
) => {
  const loadingListStatus = loading === undefined ? state.loadingOne : loading;
  const entityMap = entities?.reduce((previous, entity) => {
    return { ...previous, [entity?.id]: entity };
  }, {});
  return {
    ...state,
    byId: { ...state.byId, ...entityMap },
    loadingList: loadingListStatus,
  };
};

export const addOne = (
  state: EntityState,
  entity: Entity,
  loading?: boolean
) => {
  const loadingOneStatus = loading === undefined ? state.loadingOne : loading;
  return {
    ...state,
    byId: { ...state.byId, [entity?.id]: entity },
    loadingOne: loadingOneStatus,
  };
};
