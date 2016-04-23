import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number'),
  articles: DS.hasMany('article', {async: true}),

  fullName: Ember.computed('firstName', 'lastName', {
    get() {
      return this.get('firstName') + ' ' + this.get('lastName');
    },

    set(key, value) {
      var name = value.split(' ');

      this.set('firstName', name[0]);
      this.set('lastName', name[1]);

      return value;
    }
  }),
});
