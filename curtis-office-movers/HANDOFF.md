# Curtis Specialized Moving & Storage: Office Movers page

**Built Oct 6, 2026.** This page **replaces the content of the existing page** `/services/corporate-and-office-relocation/` rather than adding a new one. That page already has the most search impressions of any Curtis service page (334 in the last 30 days) but sits around position 25. Keeping the same address keeps that history; a second office page would compete with it.

**Files**
- `curtis-office-movers-elementor.json`: the importable Elementor template. It passes validation: 11 sections, 98 widgets, all core widgets.
- `curtis-office-movers-preview.html`: open it in a browser to review the page before importing.
- `curtis-office-movers-spec.json`: the source file the template is built from. Edit it and rebuild to make changes.

## Search targets (Search Atlas, Oct 6)

| Keyword | Dallas searches/mo | Difficulty | Cost per ad click |
|---|---|---|---|
| office movers dallas (main) | 90 | 15 | $36.72 |
| commercial movers dallas | 90 | 11 | $36.59 |
| office moving companies dallas | 90 | 24 | $41.73 |
| commercial moving companies dallas | 90 | 14 | $36.59 |
| office relocation company (national) | 720 | 22 | $31.05 |

These figures are lower than the ones I quoted on Sept 28 for "office movers dallas" (110 searches, $52 a click). Search Atlas has refreshed its numbers since then.

The page keeps "corporate relocation" in its title and copy, so it doesn't lose the corporate searches it already shows up for.

## SEO settings (Rank Math or Yoast)

| Field | Value |
|---|---|
| URL | `/services/corporate-and-office-relocation/` (unchanged) |
| Title tag | Office Movers in Dallas, TX \| Curtis Corporate Relocation (57 characters) |
| Meta description | Dallas office movers since 2003. Employee crews, a project manager on larger moves, furniture installation and climate-controlled storage. From $160/hr. (154 characters) |
| Page heading (H1) | Office movers in Dallas for companies that can't afford a bad Monday |

## How to replace the existing page safely

1. **Back up the current page.** In Elementor, open the current page → hamburger menu → **Save as Template**, and name it "Corporate relocation (old)." WordPress also keeps revisions, but this makes rolling back a one-click job.
2. **Import the new template.** Go to WordPress admin → Templates → Saved Templates → Import Templates → upload `curtis-office-movers-elementor.json`.
3. **Swap the content.** Edit `/services/corporate-and-office-relocation/` with Elementor and delete the existing sections. Then open the folder icon → My Templates → insert the new template. When asked whether to apply the document settings, choose **No**.
4. **Update the SEO title and meta description** using the values above.
5. **Add the schema markup** below, as a page-only header snippet.
6. **Purge the SiteGround cache.**

## Schema markup (this page only)

Use a server-side snippet such as WPCode set to "Header, this page only," **not** OTTO. The markup refers to the sitewide business entry rather than redefining it. The FAQ answers match the visible FAQ word for word, so if you edit one, edit the other the same way.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://curtisms.com/services/corporate-and-office-relocation/#service",
      "name": "Office Moving & Corporate Relocation",
      "serviceType": "Office moving",
      "url": "https://curtisms.com/services/corporate-and-office-relocation/",
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
          "name": "Irving"
        },
        {
          "@type": "City",
          "name": "Addison"
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
          "name": "Fort Worth"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Office moving services",
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
              "name": "Project manager"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": 90,
              "priceCurrency": "USD",
              "unitText": "per hour, on moves with 4 or more movers or installers"
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
              "name": "Receiving, inspection and crating"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Climate-controlled storage"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://curtisms.com/services/corporate-and-office-relocation/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do office movers cost in Dallas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Curtis Specialized Moving & Storage publishes its Dallas rates: delivery and installation is $160 per hour for two installers and a truck (one-hour minimum), custom packing is $80 per hour per specialist, and a project manager is $90 per hour on moves with four or more movers. Full office moves are quoted after a walkthrough."
          }
        },
        {
          "@type": "Question",
          "name": "Do you assign a project manager to office moves?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. On Dallas office moves with four or more movers or installers, Curtis assigns a project manager who plans the move with you, checks in on progress, and coordinates the crew leads from packing through final placement."
          }
        },
        {
          "@type": "Question",
          "name": "Does Curtis use subcontractors for office moves?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Every crew member on a Curtis Specialized Moving & Storage office move in Dallas is a Curtis employee — packers, drivers, installers and crew leads alike."
          }
        },
        {
          "@type": "Question",
          "name": "Can you install office furniture and hang art?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Curtis delivers, assembles and places office furniture and hangs art and mirrors as part of Dallas office moves. Interior design firms and showrooms use the same delivery and installation service for their commercial clients."
          }
        },
        {
          "@type": "Question",
          "name": "Can you store our furniture between offices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Curtis receives, inspects and stores office furniture and fixtures in climate-controlled storage in Dallas, with each item catalogued, then delivers and installs everything when the new space is ready."
          }
        },
        {
          "@type": "Question",
          "name": "Are our furniture and equipment insured during the move?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Curtis Specialized Moving & Storage offers insurance and valuation coverage on office moves in Dallas, and the coverage for your move is defined in your client agreement before any work begins."
          }
        },
        {
          "@type": "Question",
          "name": "What areas do your office movers serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Curtis is based at 460 W Mockingbird Lane in Dallas and moves offices across Dallas–Fort Worth, including Downtown Dallas, Uptown, the Design District, Las Colinas, Addison, Plano, Frisco, Irving and Fort Worth. Long-distance and interstate relocations are also available."
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
          "name": "Office Moving & Corporate Relocation",
          "item": "https://curtisms.com/services/corporate-and-office-relocation/"
        }
      ]
    }
  ]
}
</script>
```

## Before publishing

1. **GoHighLevel form.** Embed the consultation form from **Curtis's** sub-account in the contact section placeholder. Don't use Fulco's form.
2. **Photos.** Curtis has no office-specific photos on the site, so the page uses showroom, storage and installation photos picked by file name. **Real photos of an office move, such as a crew with office furniture or a boardroom install, would make this page much stronger.** Swap them in when you have them.
3. **Questions for Curtis.** The page doesn't claim any of these yet. If any are true, they're worth adding:
   - After-hours or weekend office moves, so businesses don't lose a workday.
   - Computer and IT equipment disconnect and reconnect, or coordination with the client's IT vendor.
   - Cubicle or workstation assembly.
   - Office decommissioning or furniture disposal. The pricing page lists a disposal fee.

## What the page says, and where each fact comes from

| Fact on the page | Source |
|---|---|
| Since 2003, family-owned, 4.7★ from 87 reviews | Google profile, Brand Vault |
| All crews are employees; no subcontractors | Confirmed by Paul, Oct 4 2026 |
| Project manager on moves with 4+ movers, $90/hr | curtisms.com/pricing (rates effective July 1, 2026) |
| $160/hr delivery & installation, $80/hr packing, $180/hr art & mirror | curtisms.com/pricing |
| Receiving, inspection, storage, then installation | Sarah Harkin's review, plus Curtis's services pages |
| Insurance & valuation coverage defined in each client agreement | Confirmed by Paul, Oct 4 2026 |
| Planner plus crew leads on a move | Terry Caskey's review (Martinez, Sinclair, Emilio) |
| Design firms use Curtis for commercial projects | Kenneth Jorns's and Sarah Harkin's reviews |

**Rates need updating when Curtis changes them.** If `/pricing/` changes, update the cost FAQ and the schema prices together.
