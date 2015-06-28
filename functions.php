<?php

/*
 * Get Bathe assets directory.
 */
function get_bathe_assets_directory_uri() {
	return get_template_directory_uri() . '/assets';
}

if ( ! function_exists( 'bathe_setup' ) ) {
/**
 * Sets up theme defaults and registers support fo rvarious WordPress feaures.
 */
function bathe_setup() {
	load_theme_textdomain( 'bathe', get_template_directory() . '/languages' );

	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );
	add_theme_support( 'custom-background', apply_filters( 'bathe_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	register_nav_menus( array(
		'primary' => esc_html__( 'Primary Menu', 'bathe' ),
	) );
}

}
add_action( 'after_setup_theme', 'bathe_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function bathe_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'bathe_content_width', 960 );
}
add_action( 'after_setup_theme', 'bathe_content_width', 0 );

/**
 * Register widget area.
 */
function bathe_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'bathe' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
}
add_action( 'widgets_init', 'bathe_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function bathe_scripts() {

	wp_enqueue_style( 'bathe-style', get_bathe_assets_directory_uri() . '/css/main.css' );

	wp_enqueue_script( 'bathe-navigation', get_bathe_assets_directory_uri() . '/js/main.js', array(), '20150625', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'bathe_scripts' );
