/**
 * Created by alexcatalisan on 16.11.2017.
 */

export default class ReducerRegistry {
  constructor(initialReducers = {}) {
    this._reducers = {...initialReducers}
    this._emitChange = null
  }
  register(namespace, fieldId, newReducers) {
    this._reducers[namespace][fieldId] = {...this._reducers[namespace][fieldId], ...newReducers};
    if (this._emitChange != null) {
      this._emitChange(this.getReducers())
    }
  }
  getReducers() {
    return {...this._reducers}
  }
  setChangeListener(listener) {
    if (this._emitChange != null) {
      throw new Error('Can only set the listener for a ReducerRegistry once.')
    }
    this._emitChange = listener
  }
};
