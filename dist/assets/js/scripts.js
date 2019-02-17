


$(document).ready(function() {
	$('.selectpicker').selectpicker();
  	$('#MoreUsersModal').modal('toggle');
	$('.MoreUsersModal .UserList').slimScroll({
		height: '550px',
		railVisible: true,
		alwaysVisible: true,
		wheelStep: 10, 
		allowPageScroll : true,
		color: '#3e4351',
		railColor: '#0e1426',
	});  
});