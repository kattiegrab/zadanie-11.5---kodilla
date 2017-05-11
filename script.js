function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);	
		this.$element.addClass('btn');
		this.$element.hover (
			function() {
				$(this).addClass('highlight');
			},
			function() {
				$(this).removeClass('highlight');
			}
		);
	}
};

var btn1 = new Button('Hello!');

var btn2 = new Button('Bye!');

var btn3 = new Button('Have a nice day!');

btn1.create();
btn2.create();
btn3.create();


