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
			for(var i = 0; i < response.customers.length; i++ ){
				var infosUsers = response.customers[i];
				console.log(infosUsers);
				$('ul').append('<li>' + infosUsers.first_name + infosUsers.last_name + '</li>')
			}
			var data = {infos : infosUsers };
			var template = '{{#infos}}<li>{{infos}}</li>{{/infos}}';
			var output = Mustache.render(template, data);
			$('ul').append(output);		

		},
	}
	app.init();
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







