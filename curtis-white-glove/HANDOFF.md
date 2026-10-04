# Curtis Specialized Moving & Storage: White Glove Moving page

**Version 2, updated Oct 4, 2026.** Changes from the first version are listed at the bottom.

**Files**
- `curtis-white-glove-elementor.json`: the importable Elementor template. It passes validation: 11 sections, 98 widgets, all core widgets, so Elementor Pro isn't needed.
- `curtis-white-glove-preview.html`: open it in a browser to review the page before importing.
- `curtis-white-glove-spec.json`: the source file the template is built from. Edit it and rebuild to make changes.

## SEO settings (paste into Rank Math or Yoast)

| Field | Value |
|---|---|
| URL | `/services/white-glove-moving/` (under Services, next to Curtis's other service pages) |
| Title tag | White Glove Movers in Dallas, TX \| Curtis Specialized Moving (58 characters) |
| Meta description | Family-owned white glove movers in Dallas since 2003. Employee crews, fine art, antiques, chandeliers and climate-controlled storage. 4.7★ on Google. (152 characters) |
| Main keyword | white glove movers dallas |
| Secondary keywords | white glove moving, white glove moving company, white glove movers |
| Page heading (H1) | White glove movers in Dallas for the things that can't be replaced |

The page has one main heading (H1), in the hero. Every section heading below it is a subheading (H2).

## Avoid competing with the blog post that already ranks

Search Console, Sept 3 – Oct 2: `/white-glove-movers-arent-just-for-moving/` is at **position 5 for "white glove movers dallas"**, up 62 positions from the month before. It's the only Curtis page currently ranking for this search, so keep it live and let it pass authority to the new page.

1. **When the new page goes live,** add a link near the top of the blog post pointing to `/services/white-glove-moving/`, with the link text "white glove movers in Dallas."
2. **Change the blog post's title tag to an informational angle,** for example "What White Glove Movers Actually Do (and Why It Matters)," so it stops competing with the service page for the same search.
3. **Link `/services/residential-relocation/` to the new page** with the link text "white glove moving."
4. **Add the new page to the Services menu** and to the homepage's services section.
5. **Check Search Console after 4–6 weeks.** If the blog post still outranks the new page for "white glove movers dallas," permanently redirect (301) the post to the new page so the new page inherits the post's ranking.

Links from the new page to existing pages are already built in: art installation (the current published page), residential relocation, showroom services and climate-controlled storage.

## Image descriptions (alt text)
| Image | Alt text |
|---|---|
| Hero, Chandelier-Paul-4.jpg | Curtis white glove mover installing a crystal chandelier in a Dallas home |
| Angel-Install-5.jpg | Statue being installed by Curtis fine art movers |
| IMG_6042-copy.jpg | Chandelier installation by Curtis Specialized Moving & Storage |
| residential-movers-1.jpg | Curtis movers carrying furniture into a Dallas home |
| Beacon-Hill-Showroom-Pics-004.jpg | Designer showroom furniture delivered and installed by Curtis |
| men-in-storage.jpg | Climate-controlled storage at Curtis Specialized Moving & Storage, Dallas |
| IMG_6131.jpeg | Curtis crew packing and unpacking in a client home |
| 2024-11-06-171117.jpg | Curtis crew handling a designer delivery in Dallas |

I chose the photos by file name. Open the preview in a browser and confirm each one fits its section.

## Schema markup (this page only)

Put this in the page's header through a server-side code-snippet plugin, such as WPCode set to "Header, this page only." **Don't add it through OTTO:** OTTO injects code with JavaScript, which AI crawlers (GPTBot, ClaudeBot, PerplexityBot) don't run.

The site already describes the business in markup on every page, under the identifier `https://curtisms.com/#business`. This page's markup refers to that entry rather than defining the business a second time. The FAQ answers in the markup match the visible FAQ word for word, so if you edit one, edit the other the same way.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://curtisms.com/services/white-glove-moving/#service",
      "name": "White Glove Moving",
      "serviceType": "White glove moving",
      "url": "https://curtisms.com/services/white-glove-moving/",
      "provider": {
        "@id": "https://curtisms.com/#business"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dallas"
        },
        {
          "@type": "City",
          "name": "Highland Park"
        },
        {
          "@type": "City",
          "name": "University Park"
        },
        {
          "@type": "City",
          "name": "Plano"
        },
        {
          "@type": "City",
          "name": "Frisco"
        },
        {
          "@type": "City",
          "name": "Southlake"
        },
        {
          "@type": "City",
          "name": "Arlington"
        },
        {
          "@type": "City",
          "name": "Fort Worth"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "White glove services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Delivery and installation"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": 160,
              "priceCurrency": "USD",
              "unitText": "per hour, 2 installers and 1 truck"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Art and mirror installation"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": 180,
              "priceCurrency": "USD",
              "unitText": "per hour, 2 installers and 1 truck"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Chandelier handling and installation"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": 200,
              "priceCurrency": "USD",
              "unitText": "per hour, 2 installers and 1 truck"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Statuary installation"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": 240,
              "priceCurrency": "USD",
              "unitText": "per hour, 2 installers and 1 truck"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom packing"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": 80,
              "priceCurrency": "USD",
              "unitText": "per hour per packing specialist"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Climate-controlled storage"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Luxury residential moving"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://curtisms.com/services/white-glove-moving/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is white glove moving?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "White glove moving is full-service moving for high-value and fragile belongings. At Curtis Specialized Moving & Storage in Dallas, that means expert packing and custom crating, careful transport, placement in the new home, and finishing work like hanging art and installing chandeliers, plus climate-controlled storage if needed."
          }
        },
        {
          "@type": "Question",
          "name": "How is white glove moving different from a regular move?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A regular move ends when the boxes are inside. A white glove move with Curtis in Dallas continues until the room is finished: furniture placed, boxes unpacked and removed, art and mirrors hung, and chandeliers installed. Fragile, antique and high-value pieces are packed and crated individually."
          }
        },
        {
          "@type": "Question",
          "name": "Do you move and install fine art and chandeliers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Curtis Specialized Moving & Storage moves fine art, antiques, statuary and tapestries, and hangs and installs art, mirrors and chandeliers in Dallas–Fort Worth homes. Fragile and high-value pieces receive custom crating, and crystal chandeliers can be cleaned during installation."
          }
        },
        {
          "@type": "Question",
          "name": "Can you store my furniture and art between homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Curtis offers climate-controlled storage in Dallas for furniture, fine art and valuables. Each item is individually catalogued and inspected, so pieces can be held safely during a renovation or between closings and delivered when the new home is ready."
          }
        },
        {
          "@type": "Question",
          "name": "Are my belongings insured during a white glove move?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Curtis Specialized Moving & Storage offers insurance and valuation coverage on white glove moves in Dallas. The coverage for your move is defined in your client agreement before any work begins, so you know how fine art, antiques, chandeliers and other high-value pieces are protected."
          }
        },
        {
          "@type": "Question",
          "name": "Does Curtis use subcontractors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Every crew member on a Curtis Specialized Moving & Storage job in Dallas is a Curtis employee — packers, drivers and installers alike. The people who wrap your antiques are the same company that answers for them."
          }
        },
        {
          "@type": "Question",
          "name": "What areas do your white glove movers serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Curtis Specialized Moving & Storage is based at 460 W Mockingbird Lane in Dallas and serves the Dallas–Fort Worth area, including Highland Park, University Park, Preston Hollow, Plano, Frisco, Southlake, Arlington and Fort Worth. Long-distance, interstate and international moves are also available."
          }
        },
        {
          "@type": "Question",
          "name": "How much does white glove moving cost in Dallas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Curtis publishes its Dallas rates: delivery and installation is $160 per hour for two installers and a truck (one-hour minimum), art and mirror installation $180 per hour, chandelier installation $200 per hour, statuary installation $240 per hour, and custom packing $80 per hour per specialist. Full moves are quoted after a private consultation."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://curtisms.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://curtisms.com/services/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "White Glove Moving",
          "item": "https://curtisms.com/services/white-glove-moving/"
        }
      ]
    }
  ]
}
</script>
```

No star-rating markup: Google doesn't show review stars that a business marks up about itself.

## Sitewide fix to schedule separately

The site's existing markup, seen on `/pricing/`, has three business entries that should be merged into one:
- **LocalBusiness** `#business`: this one is correct. Keep it, and change its type to `MovingCompany`.
- **A second MovingCompany block** with typos: "Tuseday," the phone written as "1+2146340304," the state written as "Texas," and hours written as "8:00 - 5:00." Delete it.
- **An Organization block** with the same malformed phone number. Delete it, or point it at `#business`.

Duplicate, conflicting business entries confuse both Google and AI assistants about which details are correct.

## How to import into WordPress

> WordPress admin → Templates → Saved Templates → Import Templates → upload the `.json`. Then edit any page → Elementor → the folder icon in the widget panel → My Templates → Insert. When asked whether to apply the document settings, choose **No** to keep the site's existing global colours and fonts in charge.

## Before publishing

1. **Contact form:** the page has a labelled placeholder. Paste in the GoHighLevel form embed code.
2. **Photos:** confirm each one matches its section.
3. **Reviews quoted:** consider letting Jan Showers's team know their review is featured, since they're a business.

## What the page says, and where each fact comes from
| Fact on the page | Source |
|---|---|
| Serving Dallas since 2003 | Google profile opening date: 2003-02 |
| 4.7★, 87 reviews | Google profile, Sept 2026 |
| Family-owned | Curtis's Search Atlas Brand Vault |
| Repeat Dallas clients for 20+ years | Reviews: Jan Strimple (20+ years), Terri Beverley (20 years), jan jones (almost 20 years), Neal Stewart (25 years) |
| All crews are employees; no subcontractors | Confirmed by Paul, Oct 4 2026 |
| Insurance and valuation coverage, defined in each client agreement | Confirmed by Paul, Oct 4 2026 |
| Rates: $160, $180, $200, $240 and $80 per hour | curtisms.com/pricing, rates effective July 1, 2026 |
| Climate-controlled, individually catalogued storage | Curtis's Google profile service descriptions |
| Chandelier cleaning | Sharon Adams's review |

**Rates need updating when Curtis changes them.** If `/pricing/` changes, update the FAQ answer and the schema prices together.

## Changes in version 2
- **Main heading** now says "white glove **movers**," matching the main search exactly.
- **URL** moved to `/services/white-glove-moving/`.
- **Removed claims that went beyond the evidence:**
  - "the same Dallas crew"
  - "Trusted by Dallas designers for 20 years"
  - "packers who handle them every week"
- **Employee crews:** added to the hero, the trust bar ("100% employee crews"), the first feature card, a new FAQ and the contact section.
- **Two new FAQs:** insurance and valuation coverage, and "Does Curtis use subcontractors?"
- **Cost FAQ** now gives Curtis's published hourly rates instead of a vague answer.
- **New neighborhood strip:** Highland Park, University Park, Preston Hollow, Uptown, Lakewood, Plano, Frisco, Southlake and Fort Worth.
- **"Read all 87 reviews on Google" link** added under the testimonials.
- **Schema** now refers to the site's existing business entry instead of redefining it, adds breadcrumbs, and includes the published prices.
