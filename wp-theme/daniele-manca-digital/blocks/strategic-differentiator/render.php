<?php
/**
 * Strategic Differentiator Block Render
 * Two-column layout: Principles (left) + Value Chart SVG (right)
 */

$status = isset( $attributes['status'] ) ? sanitize_text_field( $attributes['status'] ) : 'Strategic Stewardship';
$main_heading = isset( $attributes['mainHeading'] ) ? sanitize_text_field( $attributes['mainHeading'] ) : 'Most websites are built to look good. The Website-as-an-Asset System is built to protect and support the business behind it.';
$principles = isset( $attributes['principles'] ) ? (array) $attributes['principles'] : array();
$ecom_label = isset( $attributes['ecommerceLabel'] ) ? sanitize_text_field( $attributes['ecommerceLabel'] ) : 'For e-commerce:';
$ecom_text = isset( $attributes['ecommerceText'] ) ? sanitize_text_field( $attributes['ecommerceText'] ) : 'Reducing revenue leaks, improving buyer confidence, and ensuring scalability without fragility.';
$services_label = isset( $attributes['servicesLabel'] ) ? sanitize_text_field( $attributes['servicesLabel'] ) : 'For professional services:';
$services_text = isset( $attributes['servicesText'] ) ? sanitize_text_field( $attributes['servicesText'] ) : 'Clearer positioning, stronger trust signals, and more consistent enquiries.';
$footer_text = isset( $attributes['footerText'] ) ? sanitize_text_field( $attributes['footerText'] ) : 'Different business models. Same principle: your website should actively support the business.';

$wrapper_attrs = get_block_wrapper_attributes( array(
    'class' => 'dm-strategic-differentiator py-24 bg-neutral-950 overflow-hidden',
) );
?>

<section <?php echo wp_kses_data( $wrapper_attrs ); ?> id="differentiator">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- LEFT COLUMN: Text Content & Principles -->
        <div>
            <div class="mb-4 text-xs font-mono uppercase text-neutral-500 tracking-widest">
                <?php echo esc_html( $status ); ?>
            </div>
            <h2 class="font-display text-4xl text-white mb-8 tracking-tight">
                <?php echo wp_kses_post( $main_heading ); ?>
            </h2>
            
            <!-- Principles List -->
            <div class="space-y-6">
                <?php foreach ( $principles as $principle ) : ?>
                    <?php
                        $title = isset( $principle['title'] ) ? sanitize_text_field( $principle['title'] ) : '';
                        $description = isset( $principle['description'] ) ? sanitize_text_field( $principle['description'] ) : '';
                        $border_color = isset( $principle['borderColor'] ) ? sanitize_text_field( $principle['borderColor'] ) : 'neutral';
                        $border_class = ( $border_color === 'white' ) ? 'border-white' : 'border-neutral-800';
                    ?>
                    <div class="border-l <?php echo esc_attr( $border_class ); ?> pl-6">
                        <h4 class="text-white font-medium mb-1"><?php echo esc_html( $title ); ?></h4>
                        <p class="text-neutral-400 text-sm"><?php echo esc_html( $description ); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Footer Text -->
            <div class="mt-8 text-sm text-neutral-500 leading-relaxed border-t border-neutral-900 pt-6">
                <p>
                    <strong class="text-neutral-400"><?php echo esc_html( $ecom_label ); ?></strong> <?php echo esc_html( $ecom_text ); ?><br/>
                    <strong class="text-neutral-400"><?php echo esc_html( $services_label ); ?></strong> <?php echo esc_html( $services_text ); ?>
                </p>
                <p class="mt-2 italic">
                    <?php echo esc_html( $footer_text ); ?>
                </p>
            </div>
        </div>

        <!-- RIGHT COLUMN: SVG Graphical Illustration -->
        <div class="relative border border-neutral-900 bg-black p-6 md:p-10">
            <!-- Chart Header & Legend -->
            <div class="flex justify-between items-center mb-12">
                <h3 class="text-white font-mono text-sm uppercase">Long-term Value Compounding</h3>
                <div class="flex gap-4 text-xs font-mono">
                    <span class="flex items-center gap-2 text-white">
                        <span class="w-8 h-px bg-white"></span> Asset System
                    </span>
                    <span class="flex items-center gap-2 text-neutral-500">
                        <span class="w-8 h-px bg-neutral-600" style="border-top: 1px dashed currentColor;"></span> Short-term Tactics
                    </span>
                </div>
            </div>
            
            <!-- SVG Chart -->
            <div class="relative w-full aspect-[4/3] md:aspect-[16/9] border-l border-b border-neutral-800">
                <svg class="w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="glow-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    <!-- Grid Lines -->
                    <line x1="0" y1="50" x2="400" y2="50" stroke="#262626" strokeWidth="1" />
                    <line x1="0" y1="100" x2="400" y2="100" stroke="#262626" strokeWidth="1" />
                    <line x1="0" y1="150" x2="400" y2="150" stroke="#262626" strokeWidth="1" />
                    
                    <line x1="100" y1="0" x2="100" y2="200" stroke="#262626" strokeWidth="1" />
                    <line x1="200" y1="0" x2="200" y2="200" stroke="#262626" strokeWidth="1" />
                    <line x1="300" y1="0" x2="300" y2="200" stroke="#262626" strokeWidth="1" />

                    <!-- Short-term Tactics Line (Volatile/Jagged) -->
                    <path 
                        d="M0,180 L40,140 L70,190 L110,120 L150,160 L190,100 L230,170 L270,130 L310,160 L350,140 L400,180" 
                        fill="none" 
                        stroke="#525252" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 4"
                    />

                    <!-- Asset System Line (Smooth/Exponential) -->
                    <!-- Fill Area Under Curve -->
                    <path 
                        d="M0,190 C150,190 200,150 400,20 L400,200 L0,200 Z" 
                        fill="url(#glow-gradient)" 
                    />
                    <!-- Stroke Line -->
                    <path 
                        d="M0,190 C150,190 200,150 400,20" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="2" 
                    />
                    
                    <!-- End Marker Dot -->
                    <circle cx="400" cy="20" r="3" fill="white" />
                </svg>

                <!-- Axis Labels -->
                <div class="absolute bottom-4 left-4 text-[10px] font-mono text-neutral-600">TIME →</div>
                <div class="absolute top-4 left-4 text-[10px] font-mono text-neutral-600 rotate-90 origin-left">VALUE →</div>
            </div>
        </div>
    </div>
</section>
