import { asyncTypes } from './asyncTypes';

export const uiActionsAsync = Object.freeze({
  setRouterToLinkAsync: state => ({
    type: asyncTypes.SET_ROUTER_LINK_STATE_ASYNC,
    payload: state,
  }),
});
