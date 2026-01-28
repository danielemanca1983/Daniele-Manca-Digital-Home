<?php
/**
 * Hero Block Render
 */

$status = isset( $attributes['status'] ) ? sanitize_text_field( $attributes['status'] ) : 'Calm Authority, Broader Reach';
$headline = isset( $attributes['headline'] ) ? wp_kses_post( $attributes['headline'] ) : 'Turn Your Website Into a Real Business Asset — Not a Source of Stress';
$highlighted_text = isset( $attributes['highlightedText'] ) ? sanitize_text_field( $attributes['highlightedText'] ) : 'Business Asset';
$subheading = isset( $attributes['subheading'] ) ? wp_kses_post( $attributes['subheading'] ) : '';
$button_text = isset( $attributes['buttonText'] ) ? sanitize_text_field( $attributes['buttonText'] ) : 'Book a Strategy Consultation';
$button_url = isset( $attributes['buttonUrl'] ) ? esc_url( $attributes['buttonUrl'] ) : '#cta';
$disclaimer = isset( $attributes['disclaimerText'] ) ? sanitize_text_field( $attributes['disclaimerText'] ) : '';
$min_height = isset( $attributes['minHeight'] ) ? sanitize_html_class( $attributes['minHeight'] ) : '90vh';

$wrapper_attrs = get_block_wrapper_attributes( array(
    'class' => 'dm-hero pt-32 pb-24 md:pt-48 md:pb-32',
    'style' => '--min-height: ' . esc_attr( $min_height ) . ';',
) );
?>

<section <?php echo wp_kses_data( $wrapper_attrs ); ?>>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        
        <!-- Main Headline Area -->
        <div class="col-span-1 lg:col-span-8 lg:pr-12">
            <div class="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500">
                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span><?php echo esc_html( $status ); ?></span>
            </div>
            
            <h1 class="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.1] mb-8">
                <?php echo wp_kses_post( str_replace( $highlighted_text, '<span class="text-neutral-500">' . $highlighted_text . '</span>', $headline ) ); ?>
            </h1>
        </div>

        <!-- Subhead & CTA Area -->
        <div class="col-span-1 lg:col-span-4 flex flex-col justify-end border-l border-neutral-900/0 lg:border-neutral-900 lg:pl-12">
            <p class="text-neutral-400 mb-10 text-lg leading-relaxed">
                <?php echo wp_kses_post( $subheading ); ?>
            </p>
            
            <div class="flex flex-col gap-4">
                <a href="<?php echo esc_attr( $button_url ); ?>" class="group flex items-center justify-between w-full max-w-sm bg-white text-black px-6 py-4 rounded-none hover:bg-neutral-200 transition-all duration-300">
                    <span class="font-semibold text-lg"><?php echo esc_html( $button_text ); ?></span>
                    <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                <span class="text-xs text-neutral-600 uppercase tracking-wider font-mono">
                    <?php echo esc_html( $disclaimer ); ?>
                </span>
            </div>
        </div>

    </div>
    
    <!-- Decorative Bottom Element -->
    <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
</section>
