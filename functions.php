<?php
/*
================================================================================
	head title
================================================================================
*/
function get_head_title() {
	$title = '';
	if ( is_singular() )
		$title .= wp_title( '|', false, 'right' );
	$title .= get_bloginfo( 'name' );
	return $title;
}

function head_title() {
	echo esc_html( get_head_title() );
}

/*
================================================================================
	meta description
================================================================================
*/
function get_meta_description() {
	if ( is_singular() && have_posts() ):
		while(have_posts()): the_post();
			$description = mb_substr( get_the_excerpt(), 0, 100 );
		endwhile;
	else:
		$description = get_bloginfo( 'description' );
	endif;
	return $description;
}

function meta_description() {
	echo esc_attr( get_meta_description() );
}

/*
================================================================================
	ogp
================================================================================
*/
function get_og( $arg ) {

	if ( $arg === 'type' ):
		$og = is_front_page() ? 'website' : 'article';

	elseif ( $arg === 'url' ):
		$og = is_404() ? home_url() : set_url_scheme( 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] );

	elseif ( $arg === 'title' ):
		if ( is_singular() && have_posts() ):
			while( have_posts() ): the_post();
				$title = the_title( '', '', false );
			endwhile;
		else:
			$title = get_bloginfo( 'name' );
		endif;
		$og = $title;

	elseif ( $arg === 'description' ):
		$og = get_meta_description();

	elseif ( $arg === 'image' ):
		global $post;
		$post_content   = ( ! is_archive() && ! is_front_page() && ! is_home() ) ? $post->post_content : null;
		$search_pattern = '/<img.*?src=(["\'])(.+?)\1.*?>/i';
		if ( has_post_thumbnail() && ! is_archive() && ! is_front_page() && ! is_home() ):
			$image_id   = get_post_thumbnail_id();
			$image      = wp_get_attachment_image_src( $image_id, 'full' );
			$og = $image[0];
		elseif ( preg_match( $search_pattern, $post_content, $imgurl ) && ! is_archive() && ! is_front_page() && ! is_home() ):
			$og = $imgurl[2];
		else:
			$og = get_template_directory_uri() . '/assets/images/og-default.png';
		endif;
	else:
		$og = '';
	endif;

	return $og;

}

function og( $arg ) {
	echo esc_attr( get_og( $arg ) );
}
