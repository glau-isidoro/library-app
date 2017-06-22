import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('invitation');
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('headerMessage', 'Coming Soon');
  },

  actions: {

    saveInvitation(newInvitation) {
      newInvitation.save().then((response) => {
        debugger
        this.controller.set('responseMessageTxt', `Thank you! We saved your` +
          ` email address with the following id: ${response.get('id')}`);
        this.controller.set('responseMessage', true);
      });
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }

      this.controller.set('responseMessage', false);
    }

  }

});
