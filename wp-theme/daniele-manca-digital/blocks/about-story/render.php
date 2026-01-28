<?php
/**
 * About Story Block
 * 
 * @param array  $attributes The block attributes.
 * @param string $content    The block content.
 * @param object $block      The block object.
 */

$story_heading = isset( $attributes['storyHeading'] ) ? $attributes['storyHeading'] : '';
$story_paragraphs = isset( $attributes['storyParagraphs'] ) ? $attributes['storyParagraphs'] : array();
$hesitation_items = isset( $attributes['hesitationItems'] ) ? $attributes['hesitationItems'] : array();
$closing_text = isset( $attributes['closingText'] ) ? $attributes['closingText'] : '';
?>

<div class="wp-block-daniele-manca-about-story py-24 bg-neutral-950">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
    <div>
      <h2 class="font-display text-3xl text-white mb-6">
        <?php echo wp_kses_post( $story_heading ); ?>
      </h2>
      <div class="space-y-6 text-neutral-400 leading-relaxed">
        <?php foreach ( $story_paragraphs as $paragraph ) : ?>
          <p>
            <?php echo wp_kses_post( $paragraph ); ?>
          </p>
        <?php endforeach; ?>
      </div>
    </div>
    
    <div class="flex flex-col justify-center space-y-6">
      <div class="bg-black border border-neutral-900 p-8 relative">
        <h3 class="text-neutral-500 font-mono text-sm uppercase mb-4">Internal Hesitation</h3>
        <ul class="space-y-4 text-white font-display text-lg">
          <?php foreach ( $hesitation_items as $item ) : ?>
            <li class="flex gap-4">
              <span class="text-neutral-700"><?php echo esc_html( $item['number'] ); ?></span>
              <span><?php echo wp_kses_post( $item['text'] ); ?></span>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
      <p class="text-sm text-neutral-500 italic">
        <?php echo wp_kses_post( $closing_text ); ?>
      </p>
    </div>
  </div>
</div>
