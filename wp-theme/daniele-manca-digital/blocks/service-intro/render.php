<?php
/**
 * Service Intro Block
 * 
 * @param array  $attributes The block attributes.
 * @param string $content    The block content.
 * @param object $block      The block object.
 */

$status_text = isset( $attributes['statusText'] ) ? $attributes['statusText'] : '';
$status_color = isset( $attributes['statusColor'] ) ? $attributes['statusColor'] : 'blue';
$main_heading = isset( $attributes['mainHeading'] ) ? $attributes['mainHeading'] : '';
$intro_text = isset( $attributes['introText'] ) ? $attributes['introText'] : '';
$section_heading = isset( $attributes['sectionHeading'] ) ? $attributes['sectionHeading'] : '';
$system_description = isset( $attributes['systemDescription'] ) ? $attributes['systemDescription'] : '';
$system_note = isset( $attributes['systemNote'] ) ? $attributes['systemNote'] : '';

$status_color_class = 'bg-' . sanitize_text_field( $status_color ) . '-500';
?>

<div class="wp-block-daniele-manca-service-intro">
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
      <a href="#cta" class="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-semibold hover:bg-neutral-200 transition-colors">
        Book a Strategy Consultation
        <svg class="w-4 h-4" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  </div>

  <!-- System Section -->
  <div class="py-24 bg-neutral-950 border-b border-neutral-900">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-4">
        <h2 class="font-display text-3xl text-white mb-4">
          <?php echo wp_kses_post( $section_heading ); ?>
        </h2>
      </div>
      <div class="lg:col-span-8 text-lg text-neutral-400 leading-relaxed space-y-6">
        <p>
          <?php echo wp_kses_post( $system_description ); ?>
        </p>
        <div class="pl-6 border-l border-neutral-800">
          <p class="text-sm italic text-neutral-500">
            <?php echo wp_kses_post( $system_note ); ?>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
