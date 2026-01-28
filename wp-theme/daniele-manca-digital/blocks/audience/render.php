<?php
/**
 * Audience Block Render
 * Dual-card layout: "The Right Fit" (left, white border, emphasized) vs "Not The Right Fit" (right, reduced opacity with hover)
 */

$main_heading = isset( $attributes['mainHeading'] ) ? sanitize_text_field( $attributes['mainHeading'] ) : 'Qualification with Confidence';
$intro_text = isset( $attributes['introText'] ) ? sanitize_text_field( $attributes['introText'] ) : 'This approach is designed for...';
$good_fit_title = isset( $attributes['goodFitTitle'] ) ? sanitize_text_field( $attributes['goodFitTitle'] ) : 'The Right Fit';
$good_fit_points = isset( $attributes['goodFitPoints'] ) ? (array) $attributes['goodFitPoints'] : array();
$not_fit_title = isset( $attributes['notFitTitle'] ) ? sanitize_text_field( $attributes['notFitTitle'] ) : 'Not The Right Fit';
$not_fit_points = isset( $attributes['notFitPoints'] ) ? (array) $attributes['notFitPoints'] : array();
$not_fit_rec = isset( $attributes['notFitRecommendation'] ) ? sanitize_text_field( $attributes['notFitRecommendation'] ) : 'If you want calm confidence, strategic clarity, and a website you can rely on — this is built for you.';

?>

<section class="wp-block-daniele-manca-audience dm-audience py-24 bg-neutral-950" id="audience">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="font-display text-3xl md:text-4xl text-white mb-4">
            <?php echo esc_html( $main_heading ); ?>
        </h2>
        <p class="text-neutral-500">
            <?php echo esc_html( $intro_text ); ?>
        </p>
    </div>

    <!-- Dual-Card Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        <!-- GOOD FIT CARD (Left) - White border, emphasized, full opacity -->
        <div class="bg-black border border-neutral-800 p-8 md:p-12 relative overflow-hidden group">
            <!-- Top white border accent -->
            <div class="absolute top-0 left-0 w-full h-1 bg-white"></div>
            
            <!-- Card Title with UserCheck Icon -->
            <h3 class="text-white text-xl font-bold mb-8 flex items-center gap-3">
                <!-- UserCheck Icon (SVG) -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7 12a5 5 0 1110 0A5 5 0 017 12z"></path>
                </svg>
                <?php echo esc_html( $good_fit_title ); ?>
            </h3>
            
            <!-- Good Fit Points -->
            <ul class="space-y-4">
                <?php foreach ( $good_fit_points as $point ) : ?>
                    <li class="flex gap-3 text-neutral-300">
                        <div class="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm md:text-base"><?php echo wp_kses_post( $point ); ?></span>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>

        <!-- NOT FIT CARD (Right) - Reduced opacity with hover effect -->
        <div class="bg-neutral-950 border border-neutral-900 p-8 md:p-12 opacity-70 hover:opacity-100 transition-opacity">
            <!-- Card Title with X Icon -->
            <h3 class="text-neutral-400 text-xl font-bold mb-8 flex items-center gap-3">
                <!-- X Icon (SVG) -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <?php echo esc_html( $not_fit_title ); ?>
            </h3>
            
            <!-- Not Fit Points -->
            <ul class="space-y-4">
                <?php foreach ( $not_fit_points as $point ) : ?>
                    <li class="flex gap-3 text-neutral-500">
                        <span class="text-neutral-700">—</span>
                        <span class="text-sm md:text-base"><?php echo wp_kses_post( $point ); ?></span>
                    </li>
                <?php endforeach; ?>
            </ul>
            
            <!-- Recommendation Text -->
            <p class="mt-8 text-white font-medium border-t border-neutral-800 pt-6">
                <?php echo wp_kses_post( $not_fit_rec ); ?>
            </p>
        </div>

    </div>
</section>
                        <p class="text-neutral-400 leading-relaxed">
                            <?php echo wp_kses_post( $description ); ?>
                        </p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
