<?php
/**
 * Theme setup and asset loading.
 */

define( 'DANIELE_MANCA_THEME_VERSION', '0.1.0' );

add_action( 'after_setup_theme', function () {
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'editor-styles' );

    add_editor_style( 'assets/css/theme.css' );
} );

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'daniele-manca-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Manrope:wght@400;600;700&display=swap',
        array(),
        null
    );

    wp_enqueue_style(
        'daniele-manca-theme',
        get_theme_file_uri( 'assets/css/theme.css' ),
        array(),
        DANIELE_MANCA_THEME_VERSION
    );
} );

add_action( 'init', function () {
    register_block_pattern_category(
        'daniele-manca',
        array(
            'label' => __( 'Daniele Manca Sections', 'daniele-manca-digital' ),
        )
    );
} );
