import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('friends/show').get('articles');
  },
  actions: {
    save(model) {
      model.save();
      return false;
    }
  },

  resetController(controller, isExisting) {
    var model = controller.get('model');
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  }
});
