/* hide and show elements */
function toggle_visibility(id) {
	var e = document.getElementById(id);
	if(e.style.display == 'block') {
		e.style.display = 'none';
	} else {
		e.style.display = 'block';
	}
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
  "positionClass": "toast-bottom-full-width"
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
