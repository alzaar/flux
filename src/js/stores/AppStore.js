import AppDispatcher from '../dispatchers/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import EventEmitter from 'events';
import Assign from 'object-assign';
import AppApi from '../utils/AppApi';


let CHANGE_EVENT = 'event';
let _movies = [];
let _selected = '';


let AppStore = Assign({}, EventEmiiter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(() => {
  let action = payload.action;

  switch(action.actionType) {

  }
  return true;
})

export default AppStore;
