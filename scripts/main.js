(function) ($) {
    var contacts = [
        {name:01 company:one, address:house1, tel:4592307, email:01@mail.fake, type:sales}
        {name:02 company:two, address:house2, tel:5762389, email:02@mail.fake, type:logistics}
        {name:03 company:three, address:house3, tel:3476702, email:03@mail.fake, type:HR}
        {name:04 company:four, address:house4, tel:7893453, email:04@mail.fake, type:management}
        {name:05 company:five, address:house5, tel:9874353, email:05@mail.fake, type:accounting}
        {name:06 company:six, address:house6, tel:9793233, email:06@mail.fake, type:advertising}
        {name:07 company:seven, address:house7, tel:7863537, email:07@mail.fake, type:ecommerce}
        {name:08 company:eight, address:house8, tel:2435765, email:08@mail.fake, type:snackmaker}
    
    ];
} (jQuery));

var Contact = Backbone.Model.extend({
    defaults: {
        photo:"img/placeholder.jpg"
    }
});

var Directory = Backbone.Collection.extend({
    model: Contact
});

var ContactView = Backbone.View.extend({
    tagName: "article",
    className: "contact-container",
    template: $("#contactTemplate").html(),

    render: function() {
        var tmpl = _.template(this.template);

        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});

var DirectoryView = Backbone.View.extend({
    el: $("contacts"),

    initialize: function() {
        this.collection = new Directory(contacts);
        this.render();
    },

    render: function() {
        _.each(this.collection.models, function (item) {
            that.renderContact(item);
        }, this);
    },

    renderContact: function(item) {
        var contactView = new ContactView({
            model: item
        });
        this.$el.append(contactView.render().el);
    }
});

var directory = new DirectoryView();
