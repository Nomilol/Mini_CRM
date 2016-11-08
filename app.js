console.log('Ready');
(function(){
	var app = {

		init : function(){
			app.listeners();
			app.recupInfos();
			app.showInfos();
		},
		listeners : function(){

		},
		recupInfos : function(){
			var urlServer = '/crm.json';
			$.ajax(urlServer)
			.done(app.showInfos);

			
		},
		showInfos : function(response){
			var template = "<ul>{{#customers}}<li>{{first_name}} {{last_name}} {{company}} {{role}} {{phone}} {{email}} {{description}}</li>{{/customers}}</ul>";
			//console.log(template);
			var rendered = Mustache.render(template, response);
			//console.log(rendered);
			$('ul').append(rendered);
			

		},
	}
	//app.init();
})();



// id
// first_name
// last_name
// company
// role
// phone
// email
// description

// var data = {title : 'premier : livre 1', author : 'moi-même'};
// 		var template = 'Title : {{title}} Author : {{author}}';
// 		var output = Mustache.render(template, data);
// 		console.log(output);	

// var data = { books: [ "Javascript: the Good Parts", "Clean Code" ] };
// var template = '{{#books}}<li>{{.}}</li>{{/books}}';
// var output = Mustache.render(template, data);
// $('#example').append(output);







