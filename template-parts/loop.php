<?php if ( have_posts() ) : ?>

	<ul>

		<?php while ( have_posts() ) : the_post(); ?>

			<li>
				<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
				<?php the_content(); ?>
			</li>

		<?php endwhile; ?>

	</ul>

<?php endif;
