#!/bin/bash

echo "🏋️ Creating Fitness App Project Structure..."

# Create all directories
mkdir -p public/images/{hero,gallery,crew,supplements,testimonials}
mkdir -p public/icons
mkdir -p src/app
mkdir -p src/components/{layout,sections,ui}
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p src/constants
mkdir -p src/types

# ─── APP ───────────────────────────────────────────────
touch src/app/layout.tsx
touch src/app/page.tsx
touch src/app/globals.css

# ─── LAYOUT COMPONENTS ─────────────────────────────────
touch src/components/layout/Navbar.tsx
touch src/components/layout/Footer.tsx

# ─── SECTION COMPONENTS ────────────────────────────────
touch src/components/sections/HeroSection.tsx
touch src/components/sections/FeaturesSection.tsx
touch src/components/sections/GallerySection.tsx
touch src/components/sections/AboutSection.tsx
touch src/components/sections/CrewSection.tsx
touch src/components/sections/ProgramsSection.tsx
touch src/components/sections/SupplementsSection.tsx
touch src/components/sections/TestimonialsSection.tsx
touch src/components/sections/PricingSection.tsx
touch src/components/sections/CtaSection.tsx

# ─── UI COMPONENTS ─────────────────────────────────────
touch src/components/ui/Button.tsx
touch src/components/ui/Badge.tsx
touch src/components/ui/SectionHeader.tsx
touch src/components/ui/StatCard.tsx
touch src/components/ui/FeatureCard.tsx
touch src/components/ui/CrewCard.tsx
touch src/components/ui/PricingCard.tsx
touch src/components/ui/TestimonialCard.tsx
touch src/components/ui/SupplementCard.tsx
touch src/components/ui/AccordionItem.tsx
touch src/components/ui/Carousel.tsx

# ─── HOOKS ─────────────────────────────────────────────
touch src/hooks/useScrollAnimation.ts
touch src/hooks/useCarousel.ts

# ─── LIB ───────────────────────────────────────────────
touch src/lib/utils.ts

# ─── CONSTANTS ─────────────────────────────────────────
touch src/constants/nav.ts
touch src/constants/features.ts
touch src/constants/crew.ts
touch src/constants/programs.ts
touch src/constants/supplements.ts
touch src/constants/testimonials.ts
touch src/constants/pricing.ts

# ─── TYPES ─────────────────────────────────────────────
touch src/types/index.ts

echo ""
echo "✅ Done! Structure created successfully."
echo ""
echo "📦 Next steps:"
echo "   1. npm install motion clsx tailwind-merge embla-carousel-react @radix-ui/react-accordion"
echo "   2. Start building your sections!"