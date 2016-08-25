import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete () {
      this.$().fadeOut("normal", () => {
        this.list.deleteRecord();
        this.list.save();
      });
    }
  }
});
