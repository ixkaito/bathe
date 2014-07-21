<?php
/*
================================================================================
	meta title
================================================================================
*/
function get_head_title() {
	$title = '';
	if( is_singular() )
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
	if( is_singular() && have_posts() ):
		while(have_posts()):
			the_post();
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
	og:type
================================================================================
*/
function get_og_type() {
	return is_front_page() ? 'web' : 'article';
}

function og_type() {
	echo esc_attr( get_og_type() );
}

/*
================================================================================
	og:url
================================================================================
*/
function get_og_url() {
	return 'http://' . (is_404() ? home_url() : $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
}

function og_url() {
	echo esc_attr( get_og_url() );
}

/*
================================================================================
	og:title
================================================================================
*/
function get_og_title() {
	if( is_singular() && have_posts() ):
		while(have_posts()):
			the_post();
			$title = the_title('', '', false);
		endwhile;
	else:
		$title = get_bloginfo( 'name' );
	endif;
	return $title;
}

function og_title() {
	echo esc_attr( get_og_title() );
}

/*
================================================================================
	og:description
================================================================================
*/
function get_og_description() {
	return get_meta_description();
}

function og_description() {
	echo esc_attr( get_og_description() );
}

/*
================================================================================
	og:image
================================================================================
*/
function get_og_image() {
	global $post;
	$post_content	= (! is_archive() && ! is_front_page() && ! is_home()) ? $post->post_content : null;
	$search_pattern	= '/<img.*?src=(["\'])(.+?)\1.*?>/i';
	if( has_post_thumbnail() && ! is_archive() && ! is_front_page() && ! is_home() ):
		$image_id	= get_post_thumbnail_id();
		$image		= wp_get_attachment_image_src( $image_id, 'full' );
		return $image[0];
	elseif( preg_match( $search_pattern, $post_content, $imgurl ) && ! is_archive() && ! is_front_page() && ! is_home() ):
		return $imgurl[2];
	else:
		return get_template_directory_uri() . '/assets/images/og-default.png';
	endif;
}

function og_image() {
	echo esc_attr( get_og_image() );
}

// end