var widgets = require('jupyter-js-widgets');
var _ = require('underscore');


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var HelloModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(_.result(this, 'widgets.DOMWidgetModel.prototype.defaults'), {
        _model_name : 'HelloModel',
        _view_name : 'HelloView',
        _model_module : 'knownet_widget',
        _view_module : 'knownet_widget',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Hello World'
    })
});



var HelloView = widgets.DOMWidgetView.extend({
render: function() {
	this.text_input = document.createElement('input');
	this.text_input.setAttribute('type', 'text');
	this.el.appendChild(this.text_input);
	this.model.on('change:value', this.value_changed, this)
	this.value_changed();
},
events: {
	"change": "handle_text_change"
},

value_changed: function()
{            
	console.debug("Value in model changed")
	this.el.innerHTML = '';
	this.text_input = document.createElement('input');
	this.text_input.setAttribute('type', 'text');
	this.text_input.setAttribute('value', this.model.get('value'));
	this.el.appendChild(this.text_input);
	return HelloView.__super__.update.apply(this);
},


// Callback for when the date is changed.
handle_text_change: function(event) {
	this.model.set('value', event.target.value);
	this.touch();
},

});
    
    
module.exports = {
    HelloModel : HelloModel,
    HelloView : HelloView
};
