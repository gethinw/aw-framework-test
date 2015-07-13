import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        //fetch all of the detail-fields to drive the layout,
        //and the contact details to display
        return Ember.RSVP.hash({
            fields: this.store.findAll('detail-field'),
            data: this.store.find('contact', '1')
        });
    }
});
