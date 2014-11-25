/* enable "title" tooltips http://jqueryui.com/tooltip */
$(function() {
	$( document ).tooltip({
	track: true
	});
});

/* hide and show elements */
function toggle_visibility(id) {
	var e = document.getElementById(id);
	if(e.style.display == 'block') {
		e.style.display = 'none';
	} else {
		e.style.display = 'block';
	}
}

/* set member size */
function show_size_small(id) {
	var e_small = document.getElementById('size-small');
	var e_medium = document.getElementById('size-medium');
	var e_large = document.getElementById('size-large');
	
	e_small.className = 'holisversum-size-active';
	e_medium.className = 'holisversum-size-inactive';
	e_large.className = 'holisversum-size-inactive';
	
	var e = document.getElementById(id);
	e.className = 'member-pic-small';
}
function show_size_medium(id) {
	var e_small = document.getElementById('size-small');
	var e_medium = document.getElementById('size-medium');
	var e_large = document.getElementById('size-large');
	
	e_small.className = 'holisversum-size-inactive';
	e_medium.className = 'holisversum-size-active';
	e_large.className = 'holisversum-size-inactive';

	var e = document.getElementById(id);	
	e.className = 'member-pic-medium';
}
function show_size_large(id) {
	var e_small = document.getElementById('size-small');
	var e_medium = document.getElementById('size-medium');
	var e_large = document.getElementById('size-large');
	
	e_small.className = 'holisversum-size-inactive';
	e_medium.className = 'holisversum-size-inactive';
	e_large.className = 'holisversum-size-active';
	
	var e = document.getElementById(id);
	e.className = 'member-pic-large';
}

/* show element */
function show(id) {
	var e = document.getElementById(id);
	e.style.display = 'block';
}

/* hide element */
function hide(id) {
	var e = document.getElementById(id);
	e.style.display = 'none';
}

/* newsletter anmeldung */
toastr.options = {
  "closeButton": false,
  "debug": false,
  "progressBar": true,
  "positionClass": "toast-top-full-width",
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
function sendMailchimpForm($form) {
	$.ajax({
		type: $form.attr('method'),
		url: $form.attr('action'),
		data: $form.serialize(),
		cache       : false,
		dataType    : 'json',
		contentType: "application/json; charset=utf-8",
		error       : function(err) { toastr.error('Leider war die Anmeldung zum Newsletter nicht erfolgreich, bitte versuche es später noch einmal.'); },
		success     : function(data) {
		  console.log(data);
			if (data.result != "success") {
				toastr.warning('Kann es sein dass du schon registriert bist?');
			} else {
				toastr.success('Vielen Dank für deine Registrierung beim holis-Newsletter! Eine holistische Mail sollte schon in deinem Posteingang gelandet sein.');
			}
		}
	});
}

/* ??? */
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
