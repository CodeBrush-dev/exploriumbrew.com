// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.exploriumbrew.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.exploriumbrew.com","title_tag":"Wisconsin brewpub & dining | The Explorium Brewpub","meta_description":"Family-friendly brewery restaurant in the Milwaukee area serving house-made beer, creative American cuisine, and award-winning craft brews at three Wisconsin locations."},{"page_url":"https://www.exploriumbrew.com/locations","title_tag":"Milwaukee area brewpub locations | Explorium Brewpub","meta_description":"Visit The Explorium Brewpub locations in Greendale, Milwaukee Third Ward, and Wauwatosa for house-made beer, fresh made food, outdoor patios, and family-friendly dining."},{"page_url":"https://www.exploriumbrew.com/about","title_tag":"Local craft brewery & restaurant | The Explorium Brewpub","meta_description":"Learn how The Explorium Brewpub grew into a locally owned, family-friendly brewery restaurant in the Milwaukee area, crafting house-made beer and globally inspired cuisine."},{"page_url":"https://www.exploriumbrew.com/ourbreweries","title_tag":"Award-winning brewery restaurant | The Explorium Brewpub","meta_description":"Explore our Greendale and Third Ward breweries with 24 taps of house-made beer, cellar aging, and award-winning brews at The Explorium Brewpub in the Milwaukee area."},{"page_url":"https://www.exploriumbrew.com/tours","title_tag":"Brewery tours Milwaukee area | The Explorium Brewpub","meta_description":"Book brewery tours at The Explorium Brewpub locations for a behind-the-scenes look at our brewing process, house-made beer tastings, and technical sessions with our brewers."},{"page_url":"https://www.exploriumbrew.com/mugclub","title_tag":"Mug Club at our Wisconsin brewpub | The Explorium Brewpub","meta_description":"Join the Explorium Mug Club for exclusive beer discounts, special events, and member perks at our family-friendly Milwaukee area brewpub and local craft brewery locations."},{"page_url":"https://www.exploriumbrew.com/whiskeyclub","title_tag":"Bourbon-focused Whiskey Club | The Explorium Brewpub","meta_description":"Join the Explorium Whiskey Club for curated whiskey flights, bourbon-focused tastings, member discounts, barrel picks, and spirit events at our Milwaukee area brewpubs."},{"page_url":"https://www.exploriumbrew.com/librarysociety","title_tag":"Barrel-aged beer Library Society | The Explorium Brewpub","meta_description":"Become part of the Library Society at The Explorium Brewpub and explore rare barrel-aged beers, Milwaukee County Stout variants, and curated tastings each month."},{"page_url":"https://www.exploriumbrew.com/findourbeer","title_tag":"Find our local craft beer | The Explorium Brewpub","meta_description":"Locate Explorium Brewpub house-made beer near you and enjoy award-winning local craft brewery favorites from our Milwaukee area brewpub and restaurant."}],"keywords":["Explorium Brewpub","The Explorium Brewpub Wisconsin","Wisconsin brewpub","Milwaukee area brewpub","Craft beer restaurant","Brewery restaurant","House-made beer","Beer-infused cuisine","Creative American cuisine","Family-friendly brewpub","Craft beer and cocktails","Bourbon-focused bar","Locally sourced restaurant","Fresh made food","Award-winning beer","Beer and food pairing","Full-service restaurant and brewery","Community gathering place","Local craft brewery","Milwaukee craft beer","Explorium Brewpub Southridge","Explorium Greendale","Brewpub Greendale WI","Southridge Mall restaurant","Southridge Mall brewery","Greendale craft beer","Greendale family restaurant","Restaurants near Southridge Mall","Greendale happy hour","Greendale burgers and beer","Greendale date night restaurant","Milwaukee south side brewpub","Greendale brunch","Southridge Mall dining","Casual upscale restaurant Greendale","Explorium Brewpub Third Ward","Explorium Milwaukee","Third Ward brewery","Milwaukee Third Ward restaurant","Craft beer Third Ward","Best brewpub in Milwaukee","Downtown Milwaukee brewery","Milwaukee date night restaurant","Third Ward happy hour","Milwaukee craft beer restaurant","Restaurants near Milwaukee Public Market","Third Ward dinner spot","Milwaukee pre-event dining","Third Ward brunch","Milwaukee beer and food pairing","Explorium Brewpub Wauwatosa","Explorium Tosa","Brewpub Wauwatosa WI","Wauwatosa craft beer","Restaurants near Mayfair / Research Park","Watertown Plank restaurant","West Milwaukee brewery","Wauwatosa happy hour","Wauwatosa family restaurant","Best restaurants in Wauwatosa","Tosa burgers and beer","Wauwatosa brunch","Milwaukee County Research Park restaurant","Craft beer west side Milwaukee","Wauwatosa date night restaurant","Best brewpub near me","Best craft beer restaurant in Milwaukee","Family-friendly brewery in Milwaukee","Brewpub with full food menu","House-made beer Milwaukee","Craft beer and bourbon bar Milwaukee","Locally sourced restaurant Milwaukee","Restaurant with in-house brewery Wisconsin","Milwaukee brewery with food","Wisconsin craft beer destination"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Brewery",
  "@id": "https://www.exploriumbrew.com/#brewery",
  "name": "The Explorium Brewpub",
  "url": "https://www.exploriumbrew.com/",
  "image": [
    "https://www.exploriumbrew.com/quality_auto/EXP_Logo_Rev_2Color_Pantone.png",
    "https://www.exploriumbrew.com/quality_auto/Explorium_Logo_All%20Locations-8.png",
    "https://www.exploriumbrew.com/quality_auto/ETD%20Horizontal.png"
  ],
  "logo": "https://www.exploriumbrew.com/quality_auto/EXP_Logo_Rev_2Color_Pantone.png",
  "description": "The Explorium Brewpub is a locally owned Milwaukee-area brewery and restaurant offering small-batch, hand-crafted beer, 24 taps of house-made beer, scratch-made food, gluten-friendly options, and family- and dog-friendly brewpubs in Greendale, Milwaukee's Historic Third Ward, and Wauwatosa.",
  "slogan": "#ExploreTasteDiscover",
  "telephone": "+1-414-423-1365",
  "sameAs": [
    "https://untappd.com/TheExploriumBrewpub"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Milwaukee",
    "addressRegion": "WI",
    "addressCountry": "US"
  },
  "department": [
    {
      "@type": "Restaurant",
      "name": "The Explorium Brewpub Greendale",
      "url": "https://www.exploriumbrew.com/locations",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5300 S 76th Street",
        "addressLocality": "Greendale",
        "addressRegion": "WI",
        "addressCountry": "US"
      },
      "telephone": "+1-414-423-1365",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Adjacent Parking Lot", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Dog Friendly", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Family Friendly", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Fire Pits", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Full Bar", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Full Kitchen", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Gluten Free Food Options", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Gluten Removed Beers", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Heated, Covered Outdoor Bar", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Outdoor Patio Seating", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Semi-Private Event Spaces", "value": true }
      ]
    },
    {
      "@type": "Restaurant",
      "name": "The Explorium Brewpub Third Ward",
      "url": "https://www.exploriumbrew.com/locations",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "143 W St. Paul Avenue",
        "addressLocality": "Milwaukee",
        "addressRegion": "WI",
        "addressCountry": "US"
      },
      "telephone": "+1-414-423-1365",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Dog Friendly", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Family Friendly", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Fire Pits", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Full Bar & Kitchen", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Garage and Street Parking", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Gluten Free Food Options", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Gluten Removed Beers", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Heated Covered Tunnel Seating", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "On-site Catering", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Outdoor Patio Seating", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Private Event Spaces", "value": true }
      ]
    },
    {
      "@type": "Restaurant",
      "name": "Explorium Wauwatosa",
      "url": "https://www.exploriumbrew.com/locations",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11200 W Burleigh Street",
        "addressLocality": "Wauwatosa",
        "addressRegion": "WI",
        "addressCountry": "US"
      },
      "telephone": "+1-414-539-4343",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Adjacent Parking Lot", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Dog Friendly", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Family Friendly", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Full Bar", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Full Kitchen", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Gluten Free Food Options", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Gluten Removed Beer Options", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "On-Site Catering", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Outdoor Patio Seating", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Private Event Spaces", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Semi-Private Event Spaces", "value": true }
      ]
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "11:00",
      "closes": "22:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Memberships & Experiences",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Explorium Mug Club Membership",
        "description": "Exclusive Mug Club membership with a custom 20oz stoneware mug, t-shirt, complimentary first fill, crowler to-go, ongoing food and merchandise discounts, special events, and early access to beer dinners and special releases. Entry fee and annual renewal apply.",
        "url": "https://www.exploriumbrew.com/mugclub"
      },
      {
        "@type": "Offer",
        "name": "Lifetime Mug Club Membership",
        "description": "Lifetime Mug Club membership supporting Explorium expansion projects, including a special mug, enhanced discounts, monthly beer, priority event access, and participation in ownership discussions. One-time investment required; availability limited.",
        "url": "https://www.exploriumbrew.com/mugclub"
      },
      {
        "@type": "Offer",
        "name": "Explorium Whiskey Club Membership 2026",
        "description": "Monthly Whiskey Club membership with curated flights, discounts on whiskey pours and barrel picks, spirit-focused tastings, educational events, and pre-order access to limited bottles on a predictable monthly schedule.",
        "url": "https://www.exploriumbrew.com/whiskeyclub"
      },
      {
        "@type": "Offer",
        "name": "Explorium Library Society",
        "description": "Monthly Library Society gatherings featuring curated tastings of reserve and barrel-aged beers from the Explorium \"Library,\" hosted across all three locations.",
        "url": "https://www.exploriumbrew.com/librarysociety"
      },
      {
        "@type": "Offer",
        "name": "Explorium Brewery Tours",
        "description": "Guided brewery tours at Explorium locations, including Friday Funday tours, small group tours with a draft pour and keepsake glass, and technical tours led by the proprietor or head brewer.",
        "url": "https://www.exploriumbrew.com/tours"
      }
    ]
  },
  "knowsAbout": [
    "craft beer",
    "brewpub",
    "small-batch brewery",
    "hand-crafted beer",
    "gluten removed beer",
    "hard seltzer",
    "brewery tours",
    "beer dinners",
    "private events",
    "family friendly restaurant",
    "dog friendly patio",
    "Milwaukee brewery"
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
