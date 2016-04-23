import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null, // passed in
  articleStates: null, // passed in
  actions: {
    saveArticle() {
      let article = this.get('article');

      if (article.get('hasDirtyAttributes')) {
        this.sendAction('save', article);
      }
    }
  },

  stateChanged: Ember.observer('article.state', function() {
    var article = this.get('article');
    console.log('OMG expensive oporation because article state changed');
  })
});
