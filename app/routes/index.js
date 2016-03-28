import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({

  model() {
    return request('http://api.ember-cli-101.com/api/v2/friends').then(function(data) {
      return {
        friendsCount: data.friends.length
      };
    });
  }
});
