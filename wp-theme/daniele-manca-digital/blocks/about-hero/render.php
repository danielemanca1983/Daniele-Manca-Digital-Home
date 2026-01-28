<?php
/**
 * About Hero Block
 * 
 * @param array  $attributes The block attributes.
 * @param string $content    The block content.
 * @param object $block      The block object.
 */

$status_text = isset( $attributes['statusText'] ) ? $attributes['statusText'] : 'Who This Is Really For';
$main_heading = isset( $attributes['mainHeading'] ) ? $attributes['mainHeading'] : '';
$intro_text = isset( $attributes['introText'] ) ? $attributes['introText'] : '';
$highlight_text = isset( $attributes['highlightText'] ) ? $attributes['highlightText'] : '';
$closing_text = isset( $attributes['closingText'] ) ? $attributes['closingText'] : '';
?>

<div class="wp-block-daniele-manca-about-hero py-24 md:py-32">
  <div class="max-w-4xl">
    <div class="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500">
      <span class="w-2 h-2 bg-white rounded-full"></span>
      <span><?php echo esc_html( $status_text ); ?></span>
    </div>
    <h1 class="font-display text-4xl md:text-6xl text-white mb-8 leading-tight">
      <?php echo wp_kses_post( $main_heading ); ?>
    </h1>
    <div class="text-lg md:text-xl text-neutral-400 space-y-6 leading-relaxed max-w-2xl">
      <p>
        <?php echo wp_kses_post( $intro_text ); ?>
      </p>
      <p class="text-white font-medium border-l-2 border-white pl-4">
        <?php echo wp_kses_post( $highlight_text ); ?>
      </p>
      <p>
        <?php echo wp_kses_post( $closing_text ); ?>
      </p>
    </div>
  </div>
</div>
