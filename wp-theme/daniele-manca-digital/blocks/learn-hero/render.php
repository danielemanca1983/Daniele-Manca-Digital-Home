<?php
/**
 * Learn Hero Block
 * 
 * @param array  $attributes The block attributes.
 * @param string $content    The block content.
 * @param object $block      The block object.
 */

$status_text = isset( $attributes['statusText'] ) ? $attributes['statusText'] : '';
$status_color = isset( $attributes['statusColor'] ) ? $attributes['statusColor'] : 'yellow';
$main_heading = isset( $attributes['mainHeading'] ) ? $attributes['mainHeading'] : '';
$intro_text = isset( $attributes['introText'] ) ? $attributes['introText'] : '';
$library_label = isset( $attributes['libraryLabel'] ) ? $attributes['libraryLabel'] : '';
$section_heading = isset( $attributes['sectionHeading'] ) ? $attributes['sectionHeading'] : '';
$section_intro = isset( $attributes['sectionIntro'] ) ? $attributes['sectionIntro'] : '';
$card_items = isset( $attributes['cardItems'] ) ? $attributes['cardItems'] : array();
$highlight_text = isset( $attributes['highlightText'] ) ? $attributes['highlightText'] : '';

$status_color_class = 'bg-' . sanitize_text_field( $status_color ) . '-500';
?>

<div class="wp-block-daniele-manca-learn-hero">
  <!-- Hero Section -->
  <div class="pt-20 pb-24 md:pt-32 md:pb-32">
    <div class="max-w-4xl">
      <div class="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500">
        <span class="w-2 h-2 <?php echo esc_attr( $status_color_class ); ?> rounded-full"></span>
        <span><?php echo esc_html( $status_text ); ?></span>
      </div>
      <h1 class="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight tracking-tight">
        <?php echo wp_kses_post( $main_heading ); ?>
      </h1>
      <p class="text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed">
        <?php echo wp_kses_post( $intro_text ); ?>
      </p>
      <div class="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-400 rounded-full">
        <svg class="w-4 h-4" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
        <span><?php echo esc_html( $library_label ); ?></span>
      </div>
    </div>
  </div>

  <!-- Info Section -->
  <div class="py-24 bg-neutral-950 border-b border-neutral-900">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-5">
        <h2 class="font-display text-3xl text-white mb-6">
          <?php echo wp_kses_post( $section_heading ); ?>
        </h2>
        <p class="text-neutral-400 text-lg leading-relaxed mb-6">
          <?php echo wp_kses_post( $section_intro ); ?>
        </p>
      </div>
      <div class="lg:col-span-7">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <?php foreach ( $card_items as $item ) : ?>
            <div class="border border-neutral-800 p-6 bg-black">
              <h3 class="text-white font-medium mb-2"><?php echo wp_kses_post( $item['title'] ); ?></h3>
              <p class="text-sm text-neutral-500"><?php echo wp_kses_post( $item['description'] ); ?></p>
            </div>
          <?php endforeach; ?>
          <div class="md:col-span-2 border-l-2 border-white pl-6 py-2">
            <p class="text-white font-medium italic">
              <?php echo wp_kses_post( $highlight_text ); ?>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
