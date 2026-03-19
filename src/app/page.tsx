"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Crown, Sparkles, Zap, Info, Lightbulb, Handshake, TrendingUp, Gift, HelpCircle, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="NovaTech"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Shop Now", href: "#products" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Experience Premium Electronics Innovation"
          description="Discover cutting-edge technology designed for those who demand excellence. NovaTech brings you the world's finest smart devices, smartphones, and premium tech accessories."
          background={{ variant: "radial-gradient" }}
          tag="Featured Collection"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Explore Products", href: "#products" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            {
              id: "carousel-1",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-sleek-modern-smartphone-with-curved-ed-1773958966444-c74881c8.png",              imageAlt: "Premium smartphone with curved edge design"
            },
            {
              id: "carousel-2",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-premium-wireless-earbuds-case-open-wit-1773958967094-e5f3848a.png",              imageAlt: "Wireless earbuds premium case display"
            },
            {
              id: "carousel-3",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-sleek-smart-watch-on-a-wrist-displayin-1773958966550-a0c0ac31.png",              imageAlt: "Smartwatch with colorful interface"
            },
            {
              id: "carousel-4",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-high-end-wireless-speaker-with-cylindr-1773958967212-b80a2448.png",              imageAlt: "Minimalist wireless speaker design"
            },
            {
              id: "carousel-5",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-professional-laptop-with-ultrathin-bez-1773958966681-bba51b8e.png",              imageAlt: "Ultrabook laptop premium design"
            },
            {
              id: "carousel-6",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-high-resolution-tablet-with-stylus-res-1773958967891-4462a8d9.png",              imageAlt: "Creative tablet with stylus"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={5000}
          ariaLabel="NovaTech featured products carousel"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Products"
          description="Handpicked premium electronics and smart devices that define the future of technology."
          tag="Best Sellers"
          tagIcon={Crown}
          tagAnimation="slide-up"
          buttons={[{ text: "View All Products", href: "#" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "prod-1",              brand: "NovaTech",              name: "Nova Pro Smartphone",              price: "$1,299",              rating: 5,
              reviewCount: "2,847",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-modern-flagship-smartphone-centered-wi-1773958967141-e25e8528.png",              imageAlt: "Nova Pro Smartphone flagship device",              isFavorited: false
            },
            {
              id: "prod-2",              brand: "NovaTech",              name: "UltraBook Pro Laptop",              price: "$2,499",              rating: 5,
              reviewCount: "1,923",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-premium-ultrabook-laptop-opened-at-45--1773958967072-0c8c8c36.png",              imageAlt: "UltraBook Pro premium laptop",              isFavorited: false
            },
            {
              id: "prod-3",              brand: "NovaTech",              name: "Premium Audio Headphones",              price: "$599",              rating: 5,
              reviewCount: "3,412",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/premium-over-ear-headphones-with-modern--1773958967829-ab857737.png",              imageAlt: "Premium audio headphones",              isFavorited: false
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyOne
          title="Why Choose NovaTech"
          description="We're committed to delivering premium technology experiences with unmatched innovation and customer care."
          tag="Our Advantages"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[{ text: "Discover Our Mission", href: "#" }]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-modern-digital-technology-interface-sh-1773958967796-62c9302c.png"
          imageAlt="Advanced technology interface"
          mediaAnimation="slide-up"
          useInvertedBackground={true}
          mediaPosition="right"
          accordionItems={[
            {
              id: "feature-1",              title: "Premium Quality Standards",              content: "Every product undergoes rigorous testing and quality assurance to ensure excellence. We partner with leading manufacturers worldwide to bring you authentic, high-performance devices."
            },
            {
              id: "feature-2",              title: "Expert Customer Support",              content: "Our dedicated support team is available 24/7 to assist with any questions or concerns. We provide comprehensive warranties and hassle-free returns on all purchases."
            },
            {
              id: "feature-3",              title: "Curated Collections",              content: "Our team of tech experts carefully selects each product to match our premium standards. We focus on innovation, design, and functionality across all categories."
            },
            {
              id: "feature-4",              title: "Competitive Pricing",              content: "We believe premium technology should be accessible. Our strategic pricing and regular promotions ensure you get the best value for cutting-edge devices."
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="About NovaTech"
          tagIcon={Info}
          tagAnimation="slide-up"
          title="Redefining Premium Technology Retail"
          description="Founded with a passion for innovation, NovaTech has become the destination for discerning tech enthusiasts and professionals who refuse to compromise on quality."
          subdescription="We combine expert curation, exceptional service, and premium selection to create an unparalleled shopping experience. Every device in our catalog represents our commitment to excellence and technological advancement."
          icon={Lightbulb}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-futuristic-technology-visualization-sh-1773958968615-9801df92.png"
          imageAlt="Innovation and technology"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          names={["Apple", "Samsung", "Google", "Microsoft", "Sony", "Intel", "NVIDIA"]}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/apple-company-logo-sleek-bitten-apple-ic-1773958967854-7175a12c.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/samsung-company-logo-distinctive-blue-ov-1773958966983-969d3c4f.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/google-company-logo-colorful-google-word-1773958966891-fa0b5069.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/microsoft-company-logo-four-squares-symb-1773958967681-314a55f1.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/sony-company-logo-iconic-sony-wordmark-i-1773958967490-ad5eeb07.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/intel-company-logo-blue-intel-core-symbo-1773958967550-39a42955.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/nvidia-company-logo-green-nvidia-wordmar-1773958967296-333838e6.png"
          ]}
          title="Trusted by Industry Leaders"
          description="We partner with the world's most innovative technology companies to bring you authentic, premium devices."
          tag="Our Partners"
          tagIcon={Handshake}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="NovaTech by the Numbers"
          description="Our commitment to excellence is reflected in our growth and customer satisfaction."
          tag="Our Impact"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          buttons={[{ text: "Join Our Community", href: "#" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          metrics={[
            {
              id: "metric-1",              value: "250K+",              description: "Satisfied Customers Worldwide"
            },
            {
              id: "metric-2",              value: "1,500+",              description: "Premium Products Available"
            },
            {
              id: "metric-3",              value: "98%",              description: "Customer Satisfaction Rate"
            },
            {
              id: "metric-4",              value: "24/7",              description: "Expert Support Available"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="NovaTech's product selection and customer service are unmatched. Every purchase exceeded my expectations, from quality to packaging. I've recommended them to all my colleagues."
          rating={5}
          author="Sarah Chen"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-professional-headshot-of-a-confident-t-1773958967589-a0cdea65.png",              alt: "Sarah Chen"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-professional-headshot-of-a-business-pr-1773958967009-4964b5de.png",              alt: "John Martinez"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/a-professional-business-headshot-of-a-co-1773958966613-873b1a82.png",              alt: "Emma Rodriguez"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BBODnkEwTwHEOXrnpLQVFdxGyi/professional-headshot-of-a-business-prof-1773958967471-b22bf959.png",              alt: "Michael Park"
            }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Membership Plans"
          description="Join our elite membership program to unlock exclusive benefits, early access to new products, and premium support."
          tag="Special Offers"
          tagIcon={Gift}
          tagAnimation="slide-up"
          buttons={[{ text: "View All Benefits", href: "#" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="blur-reveal"
          plans={[
            {
              id: "plan-standard",              badge: "Popular",              badgeIcon: Star,
              price: "Free",              subtitle: "Essential Benefits",              buttons: [{ text: "Get Started", href: "#" }],
              features: [
                "Access to all products",                "Standard shipping",                "Basic customer support",                "Monthly newsletter"
              ]
            },
            {
              id: "plan-premium",              badge: "Recommended",              badgeIcon: Crown,
              price: "$99/year",              subtitle: "Premium Experience",              buttons: [{ text: "Join Premium", href: "#" }],
              features: [
                "Everything in Standard",                "Free express shipping",                "Priority 24/7 support",                "Early product access",                "10% discount on all purchases"
              ]
            },
            {
              id: "plan-elite",              badge: "VIP",              badgeIcon: Sparkles,
              price: "$299/year",              subtitle: "Elite Tier",              buttons: [{ text: "Become Elite", href: "#" }],
              features: [
                "Everything in Premium",                "Free overnight shipping",                "Exclusive member events",                "Personal tech concierge",                "20% discount on all purchases"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products, shipping, warranties, and more."
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          buttons={[{ text: "Contact Support", href: "#contact" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "faq-1",              title: "What's your return policy?",              content: "We offer a 30-day money-back guarantee on all products. If you're not completely satisfied, simply return the item in original condition for a full refund. No questions asked. Free return shipping is included for defective items."
            },
            {
              id: "faq-2",              title: "Do you offer international shipping?",              content: "Yes! We ship to over 150 countries worldwide. International orders typically arrive within 7-14 business days. Shipping costs and import duties vary by location. You can calculate exact costs during checkout."
            },
            {
              id: "faq-3",              title: "Are your products authentic?",              content: "100% authentic. We source directly from manufacturers and authorized distributors. Every product comes with original packaging, warranty cards, and authenticity verification. We never sell counterfeit or refurbished items as new."
            },
            {
              id: "faq-4",              title: "What warranty do products come with?",              content: "All products come with manufacturer's warranty (typically 1-2 years). We also offer extended warranty options at checkout. Premium members receive complimentary warranty extension on select items."
            },
            {
              id: "faq-5",              title: "How do I track my order?",              content: "You'll receive a tracking number via email immediately after your order ships. You can track your package in real-time on our website or through the carrier's website. Premium members get SMS and email tracking updates."
            },
            {
              id: "faq-6",              title: "Do you offer bulk pricing?",              content: "Yes! We provide special corporate and bulk pricing. Contact our sales team at sales@novatech.com for quotes on orders of 10+ units. We can also arrange custom packaging and invoice terms for businesses."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Stay Updated with NovaTech"
          description="Subscribe to our newsletter for exclusive offers, new product launches, and tech insights. Join thousands of satisfied customers."
          background={{ variant: "rotated-rays-animated" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing, you agree to receive marketing emails. We respect your privacy and will never share your information."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="NovaTech"
          columns={[
            {
              items: [
                { label: "Shop", href: "#products" },
                { label: "Featured", href: "#featured" },
                { label: "Best Sellers", href: "#" },
                { label: "New Arrivals", href: "#" }
              ]
            },
            {
              items: [
                { label: "Company", href: "#" },
                { label: "About Us", href: "#about" },
                { label: "Our Story", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              items: [
                { label: "Support", href: "#" },
                { label: "Help Center", href: "#" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" }
              ]
            },
            {
              items: [
                { label: "Resources", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" }
              ]
            },
            {
              items: [
                { label: "Connect", href: "#" },
                { label: "Contact Us", href: "#contact" },
                { label: "Follow Us", href: "#" },
                { label: "Newsletter", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
