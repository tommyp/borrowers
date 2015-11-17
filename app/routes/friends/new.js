import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('friend');
  },

  actions: {
    save() {
      console.log('+-- save action in new route');
      return true;
    },

    cancel() {
      console.log('+-- cancel action in new route');
      return true;
    }
  }

});
