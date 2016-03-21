import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('friend');
  },

  activate() {
    console.log('------activate hook called------');
  },

  deactivate() {
    console.log('------deactivate hook called------');
  },

  resetController: function (controller, isExisting) {
    if (isExisting) {
      // We grab the model from the controller
      var model = controller.get('model');

      // Because we are leaving the route we verify if the model is in the
      // 'isNew' state, which means it wasn't ready to be saved to the backend

      if (model.get('isNew')) {

        // We call DS#destroyRecord which removes it from the store
        model.destroyRecord();
      }
    }
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
