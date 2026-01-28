<?php
/**
 * Strategy Section Block
 * 
 * @param array  $attributes The block attributes.
 * @param string $content    The block content.
 * @param object $block      The block object.
 */

$main_heading = isset( $attributes['mainHeading'] ) ? $attributes['mainHeading'] : '';
$cards = isset( $attributes['cards'] ) ? $attributes['cards'] : array();
?>

<div class="wp-block-daniele-manca-strategy-section py-24 bg-neutral-950">
  <div class="max-w-4xl">
    <h2 class="font-display text-3xl md:text-5xl text-white mb-8 tracking-tight">
      <?php echo wp_kses_post( $main_heading ); ?>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <?php foreach ( $cards as $card ) : ?>
        <?php 
          $color = isset( $card['color'] ) ? sanitize_text_field( $card['color'] ) : 'green';
          $color_class = 'text-' . $color . '-500';
          $number = isset( $card['number'] ) ? $card['number'] : '';
          $title = isset( $card['title'] ) ? $card['title'] : '';
          $description = isset( $card['description'] ) ? $card['description'] : '';
        ?>
        <div class="border border-neutral-800 p-6 bg-black/50">
          <div class="text-4xl font-display <?php echo esc_attr( $color_class ); ?> mb-2">
            <?php echo esc_html( $number ); ?>
          </div>
          <h3 class="text-white font-semibold mb-3">
            <?php echo wp_kses_post( $title ); ?>
          </h3>
          <p class="text-neutral-400 text-sm leading-relaxed">
            <?php echo wp_kses_post( $description ); ?>
          </p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</div>
