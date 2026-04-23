# Word For Word — Merch Launch Prep

## Platform: Gelato (gelato.com)
- Global print-on-demand
- Local fulfillment in US + Germany + 30+ countries
- Free to start

---

## The 8 Hero Sayings

### 1. "Das ist nicht mein Bier"
- **Literal:** That's not my beer.
- **Meaning:** That's not my problem.
- **Products:** Mug (primary), Tee, Coaster
- **Product page headline:** *Boundaries, the German way.*
- **Description:** Some problems are yours. Some are definitely not your beer. This classic German saying is the original "not my circus, not my monkeys" — just with better beverages.

---

### 2. "Das ist mir Wurst"
- **Literal:** That is sausage to me.
- **Meaning:** I couldn't care less.
- **Products:** Tee (primary), Mug
- **Product page headline:** *The art of not caring, perfected.*
- **Description:** Germans don't shrug. They compare things to sausage. And when something is sausage to you? It means you simply do not care. At all. Peak indifference.

---

### 3. "Alles in Butter"
- **Literal:** Everything in butter.
- **Meaning:** Everything is fine. All good.
- **Products:** Mug (primary), Print, Coaster
- **Product page headline:** *When everything's fine, it's in butter.*
- **Description:** Historically, valuable items were preserved by submerging them in butter for transport. So "everything in butter" meant everything was safely packed and on its way. Today it just means: relax, it's all good.

---

### 4. "Ich glaub', mein Schwein pfeift"
- **Literal:** I think my pig is whistling.
- **Meaning:** I can't believe this.
- **Products:** Tee (primary), Print
- **Product page headline:** *German for: are you serious right now?*
- **Description:** When something is so surprising, so unbelievable, so absolutely out of left field — Germans picture a whistling pig. Honestly? Same.

---

### 5. "Da steppt der Bär"
- **Literal:** The bear is doing the step dance there.
- **Meaning:** It's going to be an amazing party.
- **Products:** Tee (primary), Print, Beanie
- **Product page headline:** *When the bear dances, you show up.*
- **Description:** A great party in Germany isn't just good — it's so good, a bear is step-dancing. We don't make the rules. We just wear the shirt.

---

### 6. "Da haben wir den Salat"
- **Literal:** There we have the salad.
- **Meaning:** Now look at this mess.
- **Products:** Mug (primary), Tee, Coaster
- **Product page headline:** *For when everything goes sideways.*
- **Description:** Things went wrong. Nobody planned for this. And yet — here we are, staring at the salad. The most polite way to acknowledge total chaos.

---

### 7. "Hals- und Beinbruch!"
- **Literal:** Neck and leg break!
- **Meaning:** Break a leg! Good luck!
- **Products:** Print (primary), Greeting cards if Gelato offers, Tee
- **Product page headline:** *The German way to wish someone luck.*
- **Description:** In Germany, saying "good luck" is actually bad luck. So they wish you a broken neck and leg instead. It works. Don't question it.

---

### 8. "Wo gehobelt wird, da fallen Späne"
- **Literal:** Where there is planing, there are shavings.
- **Meaning:** You can't make progress without making a mess.
- **Products:** Framed Print (primary), Tee
- **Product page headline:** *Progress is messy. That's the point.*
- **Description:** A woodworking proverb turned life philosophy. If you're doing real work — building something, making something — there will be shavings on the floor. That's not a problem. That's proof.

---

## Design Brief

### Style direction
- **Font:** Playfair Display (matches app) — bold for German, italic for literal translation
- **Color options:** Forest green on cream / Cream on forest green / Black on white
- **Layout (per product):**
  - Line 1: German saying (large, bold)
  - Line 2: *Literal translation in italic* (smaller)
  - Line 3 (optional): Meaning in small caps
  - Bottom: Small "Word For Word" wordmark

### Canva tip
1. Start with blank canvas at the required print dimensions (Gelato shows these per product)
2. Use Playfair Display — available free in Canva
3. Forest green (#2D4A3E) + cream (#F5F0E8) + amber gold (#D4A853)
4. Export as PNG, 300dpi minimum

---

## Products to Create in Gelato (by priority)

| Priority | Product | Saying |
|----------|---------|--------|
| 1 | Classic Mug | Das ist nicht mein Bier |
| 2 | Unisex Tee | Das ist mir Wurst |
| 3 | Classic Mug | Alles in Butter |
| 4 | Unisex Tee | Ich glaub' mein Schwein pfeift |
| 5 | Unisex Tee | Da steppt der Bär |
| 6 | Classic Mug | Da haben wir den Salat |
| 7 | Framed Print | Wo gehobelt wird, da fallen Späne |
| 8 | Coaster Set | Mix of Food & Animals sayings |
| 9 | Beanie | Da steppt der Bär |
| 10 | 11x17 Print | Hals- und Beinbruch! |

---

## Pricing Suggestion (ballpark)

| Product | Your cost (approx) | Sell for | Margin |
|---------|-------------------|----------|--------|
| Mug | ~$8-10 | $24-28 | ~$16 |
| Tee | ~$12-15 | $32-38 | ~$18-20 |
| Coaster (set of 4) | ~$12 | $28-32 | ~$16 |
| Framed Print | ~$20-25 | $55-65 | ~$35 |
| Beanie | ~$12-14 | $32-36 | ~$20 |

---

## Store Copy

### Store tagline
*Premium merch featuring literally-translated German sayings. Because some wisdom is too good not to wear.*

### About section
Word For Word started as a love letter to the German language — specifically to the sayings that make absolutely no sense when you translate them word for word, but somehow make perfect sense once you know what they mean.

These products bring those sayings off the screen and into your kitchen, your wardrobe, and your life. Printed locally wherever you are. Shipped fast.

Gut Ding will Weile haben. (Good things want to take their time.)

---

## Merch Page Update Plan

Once Phil has the Gelato store URL, update `src/app/merch/MerchClient.tsx`:
- Replace email capture form with "Shop Now" button → Gelato store URL
- Keep the aesthetic (forest green hero, cream background)
- Add the 8 featured product names as a teaser grid
- Keep "Gut Ding will Weile haben" tagline — it fits perfectly
