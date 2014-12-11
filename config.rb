# run `$ compass compile -e production --force` to force compile for production

http_path = "/"
preferred_syntax = :scss
css_dir = "assets/css"
sass_dir = "assets/_sass"
images_dir = "assets/images"
javascripts_dir = "assets/js"
fonts_dir = "assets/fonts"
relative_assets = true
# sass_options = { :debug_info => true }
output_style = ( environment == :production ) ? :compressed : :expanded # :expanded, :nested, :compact or :compressed
line_comments = ( environment == :production ) ? false : true
