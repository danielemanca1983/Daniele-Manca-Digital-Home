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

/**
 * Register Custom Blocks
 */
add_action( 'init', function () {
    $blocks = array(
        'hero',
        'problem',
        'solution',
        'strategic-differentiator',
        'benefits',
        'audience',
        'cta',
        'about-hero',
        'about-story',
        'service-intro',
        'learn-hero',
        'strategy-section',
    );

    foreach ( $blocks as $block ) {
        register_block_type( get_theme_file_path( "/blocks/{$block}/block.json" ) );
    }
} );

/**
 * Enqueue Block Styles
 */
add_action( 'wp_enqueue_scripts', function () {
    $blocks = array(
        'hero',
        'problem',
        'solution',
        'strategic-differentiator',
        'benefits',
        'audience',
        'cta',
        'about-hero',
        'about-story',
        'service-intro',
        'learn-hero',
        'strategy-section',
    );

    foreach ( $blocks as $block ) {
        wp_enqueue_style(
            "daniele-manca-block-{$block}",
            get_theme_file_uri( "/blocks/{$block}/style.css" ),
            array(),
            DANIELE_MANCA_THEME_VERSION
        );
    }
}, 11 );

/**
 * Enqueue Block Scripts
 */
add_action( 'wp_footer', function () {
    if ( is_admin() ) {
        return;
    }

    $blocks = array(
        'hero',
    );

    foreach ( $blocks as $block ) {
        $script_path = get_theme_file_path( "/blocks/{$block}/view.js" );
        if ( file_exists( $script_path ) ) {
            wp_enqueue_script(
                "daniele-manca-block-{$block}",
                get_theme_file_uri( "/blocks/{$block}/view.js" ),
                array(),
                DANIELE_MANCA_THEME_VERSION,
                true
            );
        }
    }
}, 20 );
