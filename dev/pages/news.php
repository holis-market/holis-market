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