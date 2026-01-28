<?php
/**
 * Benefits Block Render
 * 12-column layout: Sticky heading (left col-4) + Benefits grid + Quiet Shift callout (right col-8)
 */

$main_heading = isset( $attributes['mainHeading'] ) ? sanitize_text_field( $attributes['mainHeading'] ) : 'Tangible, Emotional, Strategic';
$heading_highlight = isset( $attributes['headingHighlight'] ) ? sanitize_text_field( $attributes['headingHighlight'] ) : 'Strategic';
$benefits = isset( $attributes['benefits'] ) ? (array) $attributes['benefits'] : array();
$system_outputs = isset( $attributes['systemOutputs'] ) ? (array) $attributes['systemOutputs'] : array();
$quiet_shift_label = isset( $attributes['quietShiftLabel'] ) ? sanitize_text_field( $attributes['quietShiftLabel'] ) : 'The Quiet Shift';
$quiet_shift_text = isset( $attributes['quietShiftText'] ) ? sanitize_text_field( $attributes['quietShiftText'] ) : 'You stop feeling behind — and start feeling secure, confident, and in control again.';

$wrapper_attrs = get_block_wrapper_attributes( array(
    'class' => 'dm-benefits py-24',
) );
?>

<section <?php echo wp_kses_data( $wrapper_attrs ); ?> id="benefits">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- LEFT COLUMN: Sticky Heading (lg:col-span-4) -->
        <div class="lg:col-span-4">
            <h2 class="font-display text-4xl text-white mb-6 sticky top-24">
                <?php 
                    $heading_text = wp_kses_post( $main_heading );
                    if ( ! empty( $heading_highlight ) && strpos( $heading_text, $heading_highlight ) !== false ) {
                        $heading_text = str_replace( 
                            $heading_highlight, 
                            '<span class="text-neutral-500">' . esc_html( $heading_highlight ) . '</span>',
                            $heading_text 
                        );
                    }
                    echo $heading_text;
                ?>
            </h2>
            
            <!-- System Outputs (hidden on mobile) -->
            <div class="hidden lg:block mt-8 text-neutral-600 text-sm font-mono space-y-1">
                <p>SYSTEM OUTPUT:</p>
                <?php foreach ( $system_outputs as $output ) : ?>
                    <p>— <?php echo esc_html( $output ); ?></p>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- RIGHT COLUMN: Benefits Grid + Quiet Shift (lg:col-span-8) -->
        <div class="lg:col-span-8">
            <!-- Benefits Grid (2 columns) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <?php foreach ( $benefits as $benefit ) : ?>
                    <?php
                        $title = isset( $benefit['title'] ) ? sanitize_text_field( $benefit['title'] ) : '';
                        $description = isset( $benefit['description'] ) ? wp_kses_post( $benefit['description'] ) : '';
                    ?>
                    <div class="border-t border-neutral-800 pt-6">
                        <h3 class="text-white text-lg font-medium mb-2"><?php echo esc_html( $title ); ?></h3>
                        <p class="text-neutral-400 leading-relaxed text-sm"><?php echo wp_kses_post( $description ); ?></p>
                    </div>
                <?php endforeach; ?>
                
                <!-- The Quiet Shift Special Box (full-width on right) -->
                <div class="md:col-span-2 mt-8 p-8 border border-white/20 bg-neutral-900/30">
                    <span class="text-xs font-mono text-white uppercase mb-2 block"><?php echo esc_html( $quiet_shift_label ); ?></span>
                    <p class="text-xl md:text-2xl text-white font-display">
                        <?php echo wp_kses_post( $quiet_shift_text ); ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
