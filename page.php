<?php

get_header();
?>

<?php
/* Start the Loop */
while (have_posts()) :
    the_post();
?>
    <main class=" main">
        <article class="paddingSection max-w" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>


            <h1><?= the_title()  ?> </h1>


            <div>
                <?php the_content() ?>

            </div>

        </article><!-- #post-<?php the_ID(); ?> -->
    </main>
<?php

endwhile; // End of the loop.
?>

<?php
get_footer();

?>