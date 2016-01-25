import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
    {
      get() {
        return !Ember.isEmpty(this.get('model.description'));
      }
    }
  ),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then(() => {
          this.transitionTo('articles');
        });
      } else {
        this.set('errorMessage', 'Description is required');
      }

      return false;
    },
    cancel() {
      this.transitionTo('articles');
    }
  }
});
