import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'http://api.ember-cli-101.com',
  namespace: 'api/v2'
});
