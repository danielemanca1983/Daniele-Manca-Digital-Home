<?php
/**
 * Problem Block Render
 */

$main_heading = isset( $attributes['mainHeading'] ) ? sanitize_text_field( $attributes['mainHeading'] ) : 'Business Risk, Not "Web Design"';
$heading_highlight = isset( $attributes['headingHighlight'] ) ? sanitize_text_field( $attributes['headingHighlight'] ) : 'Web Design';
$narrative_paragraphs = isset( $attributes['narrativeParagraphs'] ) ? (array) $attributes['narrativeParagraphs'] : array();
$concern_title = isset( $attributes['concernTitle'] ) ? sanitize_text_field( $attributes['concernTitle'] ) : 'The Underlying Concern';
$concerns = isset( $attributes['concerns'] ) ? (array) $attributes['concerns'] : array();

$wrapper_attrs = get_block_wrapper_attributes( array(
    'class' => 'dm-problem bg-neutral-950 py-24',
) );
?>

<section <?php echo wp_kses_data( $wrapper_attrs ); ?> id="problem">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        
        <!-- Left Column: The Hook -->
        <div>
            <h2 class="font-display text-3xl md:text-4xl text-white mb-8 tracking-tight">
                <?php 
                    // Replace highlighted text with styled span
                    $heading_output = str_replace(
                        $heading_highlight,
                        '<span class="text-neutral-500">' . esc_html( $heading_highlight ) . '</span>',
                        esc_html( $main_heading )
                    );
                    // Allow line breaks
                    echo wp_kses_post( nl2br( $heading_output ) );
                ?>
            </h2>
            <div class="space-y-6 text-lg text-neutral-400 leading-relaxed">
                <?php foreach ( $narrative_paragraphs as $index => $paragraph ) : ?>
                    <?php if ( 1 === $index ) : ?>
                        <p class="text-white border-l-2 border-white pl-4 italic">
                            <?php echo wp_kses_post( $paragraph ); ?>
                        </p>
                    <?php else : ?>
                        <p>
                            <?php echo wp_kses_post( $paragraph ); ?>
                        </p>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Right Column: The Symptoms -->
        <div class="space-y-8">
            <div class="p-6 border border-neutral-800 bg-black/50 hover:border-neutral-700 transition-colors">
                <div class="flex items-start gap-4">
                    <!-- Warning Icon SVG -->
                    <svg class="w-6 h-6 text-neutral-500 mt-1 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    <div>
                        <h3 class="text-white font-medium mb-2"><?php echo esc_html( $concern_title ); ?></h3>
                        <ul class="space-y-3 text-neutral-400">
                            <?php foreach ( $concerns as $concern ) : ?>
                                <li class="flex gap-2">
                                    <span class="text-neutral-600">—</span>
                                    <span><?php echo wp_kses_post( $concern ); ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-4 text-neutral-300">
                <div class="h-px bg-neutral-800 flex-grow"></div>
                <span class="text-sm font-mono uppercase tracking-widest text-neutral-600">Diagnosis</span>
                <div class="h-px bg-neutral-800 flex-grow"></div>
            </div>
        </div>
    </div>
</section>
