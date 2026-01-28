<?php
/**
 * Solution Block Render
 * Centered intro + 3 principle cards with icons + footer tagline with white dot separators
 */

$main_heading = isset( $attributes['mainHeading'] ) ? sanitize_text_field( $attributes['mainHeading'] ) : 'Clear, Grounded Relief';
$intro_text = isset( $attributes['introText'] ) ? wp_kses_post( $attributes['introText'] ) : '';
$secondary_text = isset( $attributes['secondaryText'] ) ? wp_kses_post( $attributes['secondaryText'] ) : '';
$principles = isset( $attributes['principles'] ) ? (array) $attributes['principles'] : array();
$tagline_items = isset( $attributes['taglineItems'] ) ? (array) $attributes['taglineItems'] : array();

// Icon map (simple SVG implementations)
$icon_map = array(
    'compass' => '<svg class="w-10 h-10 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 003 16.382V5.618a1 1 0 01.553-.894l5.447-2.724m0 0L9 3m6-1l5.447 2.724A1 1 0 0021 5.618v10.764a1 1 0 01-.553.894l-5.447 2.724M9 20V9m6 11v-9m6-5l-5.447-2.724A1 1 0 0015 5.618V3m0 0L9 1"></path></svg>',
    'shield-check' => '<svg class="w-10 h-10 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    'bar-chart' => '<svg class="w-10 h-10 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>'
);
?>

<section class="wp-block-daniele-manca-solution dm-solution py-24 md:py-32" id="solution">
    <!-- Centered Intro Section -->
    <div class="max-w-4xl mx-auto text-center mb-20">
        <h2 class="font-display text-4xl md:text-5xl text-white mb-6 tracking-tight">
            <?php echo esc_html( $main_heading ); ?>
        </h2>
        <p class="text-xl text-neutral-400 mb-6">
            <?php echo wp_kses_post( $intro_text ); ?>
        </p>
        <p class="text-lg text-neutral-500">
            <?php echo wp_kses_post( $secondary_text ); ?>
        </p>
    </div>

    <!-- 3-Column Card Grid with Icons -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900 mb-16">
        <?php foreach ( $principles as $principle ) : ?>
            <?php
                $title = isset( $principle['title'] ) ? sanitize_text_field( $principle['title'] ) : '';
                $description = isset( $principle['description'] ) ? wp_kses_post( $principle['description'] ) : '';
                $icon_type = isset( $principle['icon'] ) ? sanitize_text_field( $principle['icon'] ) : 'compass';
                $icon_html = isset( $icon_map[ $icon_type ] ) ? $icon_map[ $icon_type ] : '';
            ?>
            <div class="bg-black p-10 hover:bg-neutral-950 transition-colors group">
                <!-- Icon -->
                <?php if ( ! empty( $icon_html ) ) : ?>
                    <div class="opacity-80 group-hover:opacity-100 transition-opacity">
                        <?php echo $icon_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                    </div>
                <?php endif; ?>
                
                <!-- Title & Description -->
                <h3 class="text-xl text-white font-medium mb-3"><?php echo esc_html( $title ); ?></h3>
                <p class="text-neutral-500">
                    <?php echo wp_kses_post( $description ); ?>
                </p>
            </div>
        <?php endforeach; ?>
    </div>

    <!-- Footer Tagline with White Dot Separators -->
    <div class="text-center border-t border-neutral-900 pt-16">
        <div class="inline-flex flex-col md:flex-row gap-8 md:gap-16 text-neutral-400 font-mono text-sm uppercase tracking-wider">
            <?php foreach ( $tagline_items as $index => $item ) : ?>
                <span class="flex items-center gap-2">
                    <div class="w-1 h-1 bg-white rounded-full"></div> 
                    <?php echo esc_html( $item ); ?>
                </span>
            <?php endforeach; ?>
        </div>
    </div>
</section>
