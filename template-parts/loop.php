<?php if ( have_posts() ) : ?>

	<ul>

		<?php while ( have_posts() ) : ?>
			<?php the_post(); ?>

			<li>
				<h1 class="text-2xl font-bold hover:underline">
					<a href="<?php the_permalink(); ?>">
						<?php the_title(); ?>
					</a>
				</h1>
				<?php the_content(); ?>
			</li>

		<?php endwhile; ?>

	</ul>

	<?php
endif;
