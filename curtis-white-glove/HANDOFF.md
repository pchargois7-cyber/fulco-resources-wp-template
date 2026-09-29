# Curtis Specialized Moving & Storage: White Glove Moving page

**Files**
- `curtis-white-glove-elementor.json`: the importable Elementor template. It passes validation: 10 sections, 95 widgets, all core widgets, so Elementor Pro isn't needed.
- `curtis-white-glove-preview.html`: open it in a browser to review the page before importing.
- `curtis-white-glove-spec.json`: the source file the template is built from. Edit it and rebuild to make changes.

## SEO settings (paste into Rank Math or Yoast)

| Field | Value |
|---|---|
| URL slug | `/white-glove-moving-dallas/` |
| Title tag | White Glove Movers in Dallas, TX \| Curtis Specialized Moving (58 characters) |
| Meta description | Family-owned white glove movers in Dallas since 2003. Fine art, antiques, chandeliers, custom crating and climate-controlled storage across DFW. 4.7★ on Google. (156 characters) |
| Main keyword | white glove movers dallas |
| Secondary keywords | white glove moving, white glove moving company, white glove movers |
| Page heading (H1) | White glove moving in Dallas for the things that can't be replaced |

The page has one main heading (H1), in the hero. Every section heading below it is a subheading (H2).

### Avoid competing with Curtis's own pages
Two existing pages already target the same searches. If three pages chase one keyword, Google may split rankings between them or pick the weakest one.

- `/white-glove-movers-arent-just-for-moving/` is a blog post targeting "white glove movers dallas."
  - Add a link near the top pointing to the new page, with the link text "white glove movers in Dallas."
  - Don't redirect it; it still earns its own traffic.
- `/services/residential-relocation/` targets "white glove moving services dallas."
  - Link it to the new page with the link text "white glove moving."
- **Add the new page to the Services menu** and link to it from the homepage's services section.

### Links from the new page to existing Curtis pages (already built in)
- `/services2/art-mirror-statuary-tapestry-and-chandelier-installation-hanging/`
- `/services/residential-relocation/`
- `/services/showroom-services/`
- `/services/climate-controlled-storage/`

### Image descriptions (alt text)
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

**Check these first:** I chose the photos by file name only, because the sandbox can't load curtisms.com. Open each one and confirm it shows what the text beside it describes before publishing. Swap any that don't match.

## Schema markup

Put this in the site's header code or in a server-side code-snippet plugin, such as WPCode set to "Header, this page only."

**Don't add it through OTTO.** OTTO injects code with JavaScript after the page loads, and the AI crawlers (GPTBot, ClaudeBot, PerplexityBot) don't run JavaScript. The page text itself is in the HTML Elementor sends, so the crawlers can already read that.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": "https://curtisms.com/#business",
      "name": "Curtis Specialized Moving & Storage",
      "url": "https://curtisms.com/",
      "telephone": "+1-214-634-0304",
      "email": "sales@curtismoving.com",
      "foundingDate": "2003",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "460 W Mockingbird Lane",
        "addressLocality": "Dallas",
        "addressRegion": "TX",
        "postalCode": "75247",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }],
      "areaServed": ["Dallas, TX","Highland Park, TX","University Park, TX","Preston Hollow, Dallas, TX","Plano, TX","Frisco, TX","Southlake, TX","Arlington, TX","Fort Worth, TX"],
      "sameAs": [
        "https://maps.google.com/maps?cid=17056811098054460691",
        "https://www.facebook.com/profile.php?id=100064083878557",
        "https://www.instagram.com/curtismoving/",
        "https://www.youtube.com/@CurtisSpecializedMovingand-g4y",
        "https://www.yelp.com/biz/curtis-specialized-moving-and-storage-dallas-2",
        "https://www.bbb.org/us/tx/dallas/profile/moving-companies/curtis-specialized-moving-storage-0875-19000426"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://curtisms.com/white-glove-moving-dallas/#service",
      "name": "White Glove Moving",
      "serviceType": "White glove moving",
      "provider": { "@id": "https://curtisms.com/#business" },
      "areaServed": { "@type": "City", "name": "Dallas" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "White glove services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fine art and antique moving" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chandelier and art installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Luxury residential moving" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Designer and showroom delivery" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Climate-controlled storage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Packing, crating and unpacking" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is white glove moving?", "acceptedAnswer": { "@type": "Answer", "text": "White glove moving is full-service moving for high-value and fragile belongings. At Curtis Specialized Moving & Storage in Dallas, that means expert packing and custom crating, careful transport, placement in the new home, and finishing work like hanging art and installing chandeliers, plus climate-controlled storage if needed." } },
        { "@type": "Question", "name": "How is white glove moving different from a regular move?", "acceptedAnswer": { "@type": "Answer", "text": "A regular move ends when the boxes are inside. A white glove move with Curtis in Dallas continues until the room is finished: furniture placed, boxes unpacked and removed, art and mirrors hung, and chandeliers installed. Fragile, antique and high-value pieces are packed and crated individually." } },
        { "@type": "Question", "name": "Do you move and install fine art and chandeliers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Curtis Specialized Moving & Storage moves fine art, antiques, statuary and tapestries, and hangs and installs art, mirrors and chandeliers in Dallas–Fort Worth homes. Fragile and high-value pieces receive custom crating, and crystal chandeliers can be cleaned during installation." } },
        { "@type": "Question", "name": "Can you store my furniture and art between homes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Curtis offers climate-controlled storage in Dallas for furniture, fine art and valuables. Each item is individually catalogued and inspected, so pieces can be held safely during a renovation or between closings and delivered when the new home is ready." } },
        { "@type": "Question", "name": "What areas do your white glove movers serve?", "acceptedAnswer": { "@type": "Answer", "text": "Curtis Specialized Moving & Storage is based at 460 W Mockingbird Lane in Dallas and serves the Dallas–Fort Worth area, including Highland Park, University Park, Preston Hollow, Plano, Frisco, Southlake, Arlington and Fort Worth. Long-distance, interstate and international moves are also available." } },
        { "@type": "Question", "name": "How much does white glove moving cost in Dallas?", "acceptedAnswer": { "@type": "Answer", "text": "White glove moving costs depend on the size of the home, how many pieces need crating or installation, and whether storage is needed. Curtis provides the time, cost and services up front after a private consultation, and published rates are on the curtisms.com pricing page." } }
      ]
    }
  ]
}
</script>
```

- **No star-rating markup.** Google doesn't show review stars that a business marks up about itself, so the markup would add risk for no benefit. The 4.7★ rating appears in the page text instead.
- **FAQ answers must stay in sync.** The FAQ answers in the markup match the visible FAQ word for word. If you edit one, edit the other the same way.

## How to import into WordPress

> WordPress admin → Templates → Saved Templates → Import Templates → upload the `.json`. Then edit any page → Elementor → the folder icon in the widget panel → My Templates → Insert. When asked whether to apply the document settings, choose **No** to keep the site's existing global colours and fonts in charge.

## Before publishing

1. **Contact form.** The page has a labelled placeholder where the form goes. Paste Curtis's GoHighLevel form embed code in its place (GoHighLevel → Sites → Forms → Integrate → Embed), or use the form already on curtisms.com/contact-us.
2. **Photos.** Confirm each photo matches the text beside it (see the image table above).
3. **Crew wording.** One line says each move uses "the same Dallas crew" from packing to placement. Confirm that with Curtis, or remove it.
4. **Pricing page link.** One FAQ answer mentions the pricing page. Confirm `/pricing/` actually lists published rates, or reword that answer in both the page and the schema.
5. **Reviews quoted.** All three quotes are real Google reviews, shortened only where "…" appears. Ideally, ask Jan Showers's team before featuring their name, since they're a business.

## What the page says, and where each fact comes from
| Fact on the page | Source |
|---|---|
| Serving Dallas since 2003 | Google profile opening date: 2003-02 |
| 4.7★, 87 reviews | Google profile, Sept 2026 |
| Family-owned | Curtis's Search Atlas Brand Vault description |
| Trusted by Dallas designers for 20+ years | Jan Strimple's review ("more than 20 years") and Terri Beverley's ("the past 20 years"), plus Jan Showers's ("over 10 years") |
| Climate-controlled, individually catalogued storage | Curtis's Google profile service descriptions |
| Chandelier cleaning | Sharon Adams's review ("cleaned crystal chandeliers back to sparkling") |
| Office hours Mon–Fri 8am–5pm, appointments required | Google profile |

Nothing on the page is invented. It has no dollar figures, license numbers, insurance limits or job counts, because none could be verified.
