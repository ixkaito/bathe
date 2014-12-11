<!DOCTYPE html>
<!--[if lt IE 7]>       <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>>  <![endif]-->
<!--[if IE 7]>          <html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>>         <![endif]-->
<!--[if IE 8]>          <html class="no-js lt-ie9" <?php language_attributes(); ?>>                <![endif]-->
<!--[if gt IE 8]><!-->  <html class="no-js" <?php language_attributes(); ?>>                       <!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta http-equiv="Content-Style-Type" content="text/css" />
<meta http-equiv="Content-Script-Type" content="text/javascript" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title><?php head_title(); ?></title>
<meta name="description" content="<?php meta_description(); ?>" />
<meta name="keywords" content="" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta property="og:type" content="<?php og( 'type' ); ?>" />
<meta property="og:url" content="<?php og( 'url' ); ?>" />
<meta property="og:site_name" content="<?php bloginfo('name' ); ?>" />
<meta property="og:title" content="<?php og( 'title' ); ?>" />
<meta property="og:description" content="<?php og( 'description' ); ?>" />
<meta property="og:image" content="<?php og( 'image' ); ?>" />
<meta property="fb:admins" content="<?php // 1047363919 ?>" />
<?php // <meta property="fb:app_id" content="" /> ?>

<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.ico" />
<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/apple-touch-icon.png" />
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css" type="text/css" media="all" />
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/modernizr-2.6.2.min.js"></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript">window.jQuery || document.write( '<script src="<?php echo get_template_directory_uri(); ?>/assets/js/jquery-1.11.1.min.js"><\/script>' )</script>

<!--[if lt IE 9]>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/selectivizr-min.js"></script>
<![endif]-->

<?php wp_deregister_script( 'jquery' ); ?>
<?php wp_head(); ?>
</head>
<body id="top" <?php body_class(); ?>>

<!--[if lt IE 7]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<div id="container" class="container">
