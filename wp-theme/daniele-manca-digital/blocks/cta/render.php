<?php
/**
 * CTA Block Render
 */

$status_text = isset( $attributes['statusText'] ) ? sanitize_text_field( $attributes['statusText'] ) : 'Calm, Clear, Reassuring';
$main_heading = isset( $attributes['mainHeading'] ) ? wp_kses_post( $attributes['mainHeading'] ) : 'Ready to Stop Guessing and Start Feeling Confident?';
$subheading = isset( $attributes['subheading'] ) ? wp_kses_post( $attributes['subheading'] ) : '';
$button_text = isset( $attributes['buttonText'] ) ? sanitize_text_field( $attributes['buttonText'] ) : 'Book Your Strategy Consultation';
$button_url = isset( $attributes['buttonUrl'] ) ? esc_url( $attributes['buttonUrl'] ) : '#';
$disclaimer = isset( $attributes['disclaimerText'] ) ? sanitize_text_field( $attributes['disclaimerText'] ) : '';

$wrapper_attrs = get_block_wrapper_attributes( array(
    'class' => 'dm-cta py-32 bg-white text-black',
) );
?>

<section <?php echo wp_kses_data( $wrapper_attrs ); ?> id="cta">
    <div class="max-w-4xl mx-auto text-center">
        
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">
            <svg class="w-3 h-3" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <?php echo esc_html( $status_text ); ?>
        </div>

        <h2 class="font-display text-4xl md:text-6xl font-medium tracking-tighter mb-8 leading-tight text-black">
            <?php echo wp_kses_post( nl2br( $main_heading ) ); ?>
        </h2>
        
        <p class="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            <?php echo wp_kses_post( $subheading ); ?>
        </p>

        <div class="flex flex-col items-center gap-6">
             <a href="<?php echo esc_attr( $button_url ); ?>" class="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-black hover:bg-neutral-800 transition-all duration-300 w-full sm:w-auto">
                <span><?php echo esc_html( $button_text ); ?></span>
                <svg class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
             </a>
             
             <p class="text-sm text-neutral-500">
                <?php echo esc_html( $disclaimer ); ?>
             </p>
        </div>

    </div>
</section>
