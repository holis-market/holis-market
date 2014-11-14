<script>
$(document).ready( function () {
	var $form = $('#form-newsletter');
	$('#form-newsletter input[type="submit"]').bind('click', function ( event ) {
		event.preventDefault();
		sendMailchimpForm($form);
	}
	);
});
</script>

<div>
	<div class="content-line-grey"></div>
	<div class="content-header">
		<div class="h1">News</div>
	</div>
	<div class="content-desc bg-yellow">
		<div class="center fg-white" style="padding-left:50px; padding-right:50px;">
			<p>
				Hier findest du die neuesten Berichte, Ergebnisse und Geschichten zum holis market.
				<br><br>
				Du willst aktiv informiert werden über den holis market?
				<br>
				Dann schick' uns einfach deine Kontaktdaten und wir melden uns bei dir, wenn es Neuigkeiten gibt :)
				<br><br>
				<div class="metro">
					<form id="form-newsletter" action="//holis-market.us8.list-manage.com/subscribe/post-json?u=6a203375c1611668d0a2e786c&id=99dc037f98&c=?" method="get">
						<fieldset>
							<div class="input-control" data-role="input-control" style="width:250px;" >
								<input type="text" name="EMAIL" placeholder="E-Mail Adresse"></input>
							</div>
							<div class="input-control" data-role="input-control" style="width:100px;" >
								<input type="text" name="ZIPCODE" placeholder="PLZ"></input>
							</div>
							<div style="position: absolute; left: -5000px;"><input type="text" name="b_6a203375c1611668d0a2e786c_99dc037f98" tabindex="-1" value=""></div>
							<input class="bg-orange" type="submit" value="Ja, ich will auf dem Laufenden bleiben!"></input>
							<div class="clear"></div>
						</fieldset>
					</form>
				</div>
			</p>
			
		</div>
	</div>
	<div class="content-desc-arrow">
		<img src="./images/bg/arrow-yellow.png" style="width:100px;" />
	</div>
	<div class="metro content-breadcrumb">
		<nav class="breadcrumbs">
			<ul>
				<li><a href="#">Home</a></li>
				<li class="active"><a>News</a></li>
			</ul>
		</nav>
	</div> 
	<div class="content-main">
		<div class="left" style="padding:left:100px;padding-right:100px;">
			<?php 
			/* Short and sweet */
			define('WP_USE_THEMES', false);
			require('../../wordpress/wp-blog-header.php');
			?>

			<div class="news">
				<div class="news-header">DER HOLISTISCHE MARKT</div>
				<div class="news-section">
					Nachhaltige Wirtschaftsweise, gesunde und frische Lebensmittel und das Erlebnis beim Einkauf sind die Basis 
					für den holis market. holis steht dabei für holistisch oder ganzheitlich.
				</div>

				<?php
				$posts = get_posts('numberposts=10&order=ASC&orderby=post_title');
				foreach ($posts as $post) : setup_postdata( $post ); ?>
					<!--<?php the_date(); echo "<br />"; ?>-->
					<div class="news-subheader">
						<?php the_title(); ?>
					</div>
					<!--<?php the_excerpt(); ?>--> 
					<div class="news-subsection">
						<?php the_content(); ?>
					</div>
					<?php
				endforeach;
				?>
			</div>
		</div>
	</div>
	<div class="content-line-grey-down"></div>
</div>

