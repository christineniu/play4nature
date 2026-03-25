# Play4Nature — Claude Development Guide

This file defines the design system for Play4Nature based on the **actual built screens**.
Always reference this before writing any UI code. Match existing screens exactly before adding new features.

---

## Project Overview

Play4Nature is a mobile-first gamified wildlife conservation app. Users discover local conservation efforts, complete daily micro-actions, earn XP and points, unlock virtual species, and redeem points for real-world rewards.

**Platform:** iOS mobile (390×844px base, iPhone 14)
**Orientation:** Portrait only
**Safe area:** Always respect top status bar and bottom home indicator insets

---

## Color System

Extracted from actual built screens. Use these exact values.

### Primary
```
Deep Evergreen:    #1B4332   /* Nav bar background, primary buttons, active states */
Teal:              #005F73   /* Share button, GO buttons, secondary actions, stat numbers */
```

### Accent (Gamification only)
```
XP Gold:           #F5A623   /* "Fact of the Day" label, active nav icon, XP bars, level badge */
CTA Orange:        #FB8500   /* Urgent CTA buttons only */
```

### Backgrounds
```
Mint Background:   #E8F5E9   /* App background — ALL screens, loading screen */
Sand / Card:       #F5F5F4   /* Card surfaces, quest rows, fact card, stat cards */
White:             #FFFFFF   /* Modals, share sheet, bottom sheets only */
```

### Text
```
Primary:           #1A1A1A   /* Headings, card titles, usernames, body */
Secondary:         #555555   /* Subtitles, timestamps, distances, fractions */
Muted:             #999999   /* Captions, email, empty states, stat labels */
Accent label:      #F5A623   /* "Fact of the Day" label only */
Nav active:        #F5A623   /* Active tab icon + label */
Nav inactive:      #FFFFFF   /* Inactive tab icons + labels at ~70% opacity */
```

### Never Use
- Pure `#FFFFFF` for screen backgrounds — always `#E8F5E9`
- Pure `#000000` for text — use `#1A1A1A`
- Any purple, pink, red, or blue tones
- Gray nav bars — nav bar is always `#1B4332`
- `#F5A623` for anything other than gamification signals

---

## Typography

Based on actual screen rendering:

```
App Title (loading):    Bold ~28px #005F73, centered
Welcome / Page Title:   Montserrat Bold 20px #1A1A1A
Section Headers:        Montserrat Bold 18–20px #1A1A1A
Card Titles:            Montserrat Semi-Bold 15–16px #1A1A1A
Body / Quest Text:      Inter Regular 14px #1A1A1A
Accent Label:           Montserrat Bold 13px #F5A623  (Fact of the Day only)
Button Text:            Poppins Medium 14–18px #FFFFFF
Nav Labels:             Inter Regular 11px
Points / Stats:         Space Grotesk Bold 22–26px #005F73
Level Badge:            Montserrat Bold 12px white on #F5A623
Timestamp / Muted:      Inter Regular 12px #999999
Progress Fraction:      Inter Regular 12px #555555  (e.g. 0/1, 2/3)
```

Font families:
- **Montserrat** — Headlines, section headers, card titles, level badge
- **Inter** — Body copy, labels, timestamps, nav labels, captions
- **Poppins** — Buttons only
- **Space Grotesk** — Numbers, stats, points, XP values exclusively

---

## Icon Library

**Feather Icons only.** Confirmed from actual screens:

```
Navigation:    home · heart (community) · compass (explore) · user (profile)
Header:        shopping-bag (top-right shop link) · bell · search
Actions:       share-2 · arrow-left · settings · edit-2
Content:       map-pin · camera · check
Social:        message-circle · share · plus (FAB)
```

Sizes:
- Nav bar icons: 24px
- Header icons: 22–24px
- In-content: 20px
- Small inline (tags): 12px
- FAB plus icon: 24px white

---

## Spacing

Base unit: 8px.

```
Screen horizontal margin:   16px
Card internal padding:      16px
Between cards:              10–12px
Between sections:           24px
Nav bar height:             72px + safe-area-inset-bottom
Top header height:          56px + status bar inset
```

---

## Components — Match Existing Screens Exactly

### Loading / Splash Screen
```
Background:     #E8F5E9 full screen
Logo:           Polecat + leaf illustration, centered at ~45% vertical
App name:       "Play4Nature" Montserrat Bold 28px #005F73, centered below
Gap logo→text:  16px
Status bar:     hidden
```

### Bottom Navigation Bar
```
Background:     #1B4332
Height:         72px + safe-area-inset-bottom
Tabs L→R:       Community (heart) · Home (home) · Explore (compass) · Profile (user)
Active state:   icon + label in #F5A623
Inactive state: icon + label in #FFFFFF at 70% opacity
Label:          Inter Regular 11px, 4px below icon
Active signal:  color change only — no pill, underline, or background highlight
```

### Top Header (Home + Community)
```
Left:           40px circle avatar + "Welcome [Username]" Montserrat Bold 18px
Right:          Feather shopping-bag 24px #1A1A1A
Padding:        16px horizontal, 12px vertical
Background:     transparent (mint shows through)
```

### Fact of the Day Card
```
Container:      #F5F5F4, border-radius 12px, padding 16px
Layout:         text column left · image right (80×80px, border-radius 8px)
Label:          "Fact of the Day" Montserrat Bold 13px #F5A623, margin-bottom 6px
Body:           Inter Regular 14px #1A1A1A, max 3–4 lines
Share button:   #005F73 bg · white "Share ↑" · Poppins Medium 14px
                border-radius 20px · padding 8px 20px · bottom-left of card
```

### Quest Row
```
Container:      #F5F5F4, border-radius 10px, padding 14px 16px
Text:           Inter Regular 14px #1A1A1A, left-aligned
Progress bar:   full width, 4px height, border-radius 100px
                Track: #E0E0E0 · Fill: #F5A623
Fraction:       "0/1" or "2/3" Inter Regular 12px #555555, right of bar
GO button:      #005F73 circle 40px · "GO" Poppins Bold 13px white · right, centered
Completed:      GO → green checkmark circle · "+15 points" #005F73 below bar
                Row bg → light mint tint (#F0FAF2)
Gap between rows: 10px
```

### Daily Quests Header
```
"Daily Quests"  Montserrat Bold 20px #1A1A1A · left
Polecat mascot  small illustration · right-aligned · decorative
Margin-bottom:  12px
```

### Recent News Cards
```
Header row:     "Recent News" Montserrat Bold 20px + "→" same row, right
Grid:           2 columns, 8px gap
Card:           full-bleed image top, border-radius 8px, image height ~100px
                Bottom overlay: linear-gradient(transparent, rgba(0,0,0,0.5))
                Title: white Montserrat Bold 14px, bottom-left over image
                Source: white Inter Regular 11px, below title
```

### Share Sheet (Modal)
```
Container:      white, border-radius 20px 20px 0 0, padding 0 24px 32px
Handle:         40px wide · 4px tall · #E0E0E0 · centered · 12px top margin
Title:          "Share with" Montserrat Bold 18px, left-aligned, 20px below handle
Options:        2-row grid (Messages, Telegram, Twitter / WhatsApp, E-mail)
Option item:    56px circle #F5F5F4 · Feather icon 24px · label Inter Regular 12px below
E-mail option:  icon + label both in #FB8500 (only exception to icon color rule)
Share button:   full width · #005F73 · "Share" Poppins Medium 18px white
                height 52px · border-radius 12px · margin-top 24px
Scrim:          rgba(0,0,0,0.4) behind modal
```

### Explore Screen
```
Map:            full-bleed, ~55% screen height
                Polecat = custom map marker (use existing illustration asset)
                Route line: #4A90D9
Search FAB:     bottom-right of map · #005F73 circle 52px · Feather search white 24px

Bottom sheet:   white, border-radius 20px 20px 0 0
Handle:         same as share sheet
Title:          "Wildlife Updates Near You" Montserrat Bold 18px

Filter pills:   horizontal scroll, no wrap
                Pill: white bg · 1px border #E0E0E0 · border-radius 100px
                Content: Feather map-pin 12px + label Inter Regular 13px
                Padding: 6px 14px
                Active pill: #1B4332 bg, white text

Events label:   "Events nearby" Inter Semi-Bold 15px #1A1A1A
Event grid:     2 columns, 8px gap
Event card:     white bg · border-radius 8px
                Image: full-bleed top, border-radius 8px 8px 0 0, ~110px
                Title: Montserrat Semi-Bold 14px #1A1A1A, below image, padding 8px
                Date + Distance: Inter Regular 12px #555555
```

### Community Screen
```
Header:         Search bar full width (#F5F5F4, border-radius 100px, 44px)
                Feather bell 24px right

Filter pills:   horizontal scroll · Recent · Trending · Nearby · Following
                Same pill style as Explore

Post item:      separated by 1px #E0E0E0 divider (no card bg)
Avatar:         40px circle · colored border ring (#F5A623 for current user, #9B59B6 example for others)
Username:       Montserrat Semi-Bold 15px #1A1A1A
Handle:         Inter Regular 13px #999999
Timestamp:      Inter Regular 12px #999999 · top-right
Body:           Inter Regular 14px #1A1A1A
Location:       Feather map-pin 12px + "City, State" Inter Regular 13px #555555
Tags:           pill chips · #F5F5F4 bg · border-radius 100px · Inter Medium 12px #555555
                padding 4px 12px
Image grid:     3 columns for 3 images · border-radius 6px · 4px gap
Reactions:      heart (count) · message-circle (count) · share-2 · Feather 20px #555555
                8px between icon and count

FAB:            #005F73 circle 56px · Feather plus white 24px
                Bottom-right · 16px from screen edge · above nav bar
```

### Profile Screen
```
Top-right:      Feather share-2 · edit-2 · settings · 22px #1A1A1A · 16px gaps

Avatar:         64px circle · 3px border #F5A623
Level badge:    "Lvl 10" pill overlapping bottom-left of avatar
                #F5A623 bg · white Montserrat Bold 12px · padding 4px 10px

Username:       Montserrat Bold 20px #1A1A1A
Email:          Inter Regular 13px #999999

Stats row:      3-column grid, equal width
Stat card:      #F5F5F4 bg · border-radius 10px · padding 16px · centered
Number:         Space Grotesk Bold 26px #005F73
Label:          Inter Regular 12px #999999 below
Columns:        Days Active · Quests · Points Earned

Quests section: same quest rows as Home
Badges section: "Badges" Montserrat Bold 18px
  Empty state:  polecat illustration centered + "No badges yet" Inter Regular 14px #999999
```

### Shop Screen
```
Header bar:     Feather arrow-left · "You have: X points" Inter Medium 14px centered
                · Feather shopping-cart right
Title:          "Claim Prizes" Montserrat Bold 24px · 16px margin
Section labels: "Newly Released" / "Popular" · Montserrat Bold 16px #1A1A1A

Item grid:      2 columns · 12px gap · 16px horizontal padding
Item card:      white bg · border-radius 10px · padding 12px
                Image: centered ~100px · no clip
                Name: Inter Semi-Bold 14px #1A1A1A
                Points: Inter Regular 13px #555555 ("156 points")
                Get button: #005F73 bg · white "Get" Poppins Medium 13px
                            border-radius 100px · padding 6px 18px · right-aligned
```

### Quest Complete Toast
```
Pill:           white bg · border-radius 100px · shadow 0 4px 16px rgba(0,0,0,0.12)
Content:        Feather check #1B4332 + "Shared" Inter Medium 14px #1A1A1A
Position:       bottom-center · 16px above nav bar
Animation:      fade in (150ms) · hold 2.5s · fade out (300ms)
```

---

## Interaction Flows

### Quest Completion
1. Tap GO → action triggers
2. GO morphs to green checkmark (scale animation 200ms)
3. Progress bar fills (300ms ease-out)
4. "+X points" fades in below bar in #005F73
5. Row bg transitions to light mint (#F0FAF2)
6. Toast "Shared ✓" appears bottom-center
7. Toast auto-dismisses after 2.5s

### Share Flow
1. Tap "Share ↑" on Fact card
2. Share sheet slides up (300ms ease-out)
3. Scrim fades in behind (rgba 0,0,0,0.4)
4. User selects platform → sheet dismisses (200ms)
5. "Shared ✓" toast appears on home screen

---

## Mascot Rules

The **marbled polecat** is the brand mascot. It appears:
- Loading screen (centered, hero)
- Daily Quests section (small, decorative, right side)
- Explore map (custom map marker — use existing asset)
- Profile badges empty state (centered illustration)
- Shop products (ferret plush item)

**Never** replace with emoji, generic animal, or AI-generated alternative.
**Always** use the existing illustration asset — do not recreate.

---

## Rules for New Screens and Features

1. **Background is always `#E8F5E9`** — never white, never gray
2. **Nav bar is always `#1B4332`**, always 4 tabs, always same order: Community · Home · Explore · Profile
3. **Cards use `#F5F5F4`** — white is for modals and bottom sheets only
4. **`#F5A623` is for gamification signals only** — XP, levels, active nav, progress bars, fact label
5. **`#005F73` is the primary action color** — buttons, GO, stats, links
6. **Polecat appears on all empty states** — never an empty state without it
7. **Section headers always Montserrat Bold 18–20px** with 24px margin-bottom
8. **Filter pills always scroll horizontally** — never wrap to a second line
9. **Quest rows always show progress bar** — even at 0%, never hide it
10. **Buttons follow hierarchy:** primary = `#005F73`, urgent/CTA = `#FB8500`
11. **No floating text** — all content lives inside a card, section, or defined container
12. **Space Grotesk for numbers only** — never use it for labels or body text

---

## Screens Inventory

| Screen | Status |
|---|---|
| Loading / Splash | ✅ Built |
| Home | ✅ Built |
| Share Sheet | ✅ Built |
| Explore (Map) | ✅ Built |
| Community | ✅ Built |
| Profile | ✅ Built |
| Shop / Claim Prizes | ✅ Built |
| Quest Complete (toast) | ✅ Built |
| Onboarding | ❌ Not built |
| Species unlock celebration | ❌ Not built |
| Notification center | ❌ Not built |
| Quest detail | ❌ Not built |
| Event detail | ❌ Not built |
| Donation flow | ❌ Not built |
| Settings | ❌ Not built |

---

## Quick Reference Cheatsheet

| Element | Color | Font | Size |
|---|---|---|---|
| Screen background | #E8F5E9 | — | — |
| Card background | #F5F5F4 | — | — |
| Modal / sheet | #FFFFFF | — | — |
| Nav bar | #1B4332 | — | — |
| Nav active | #F5A623 | Inter | 11px |
| Nav inactive | #FFFFFF 70% | Inter | 11px |
| Page title | #1A1A1A | Montserrat Bold | 20px |
| Section header | #1A1A1A | Montserrat Bold | 18–20px |
| Card title | #1A1A1A | Montserrat Semi-Bold | 15–16px |
| Body text | #1A1A1A | Inter Regular | 14px |
| Muted / caption | #999999 | Inter Regular | 12px |
| Fact label | #F5A623 | Montserrat Bold | 13px |
| Primary button | #005F73 | Poppins Medium | 14–18px |
| Urgent CTA | #FB8500 | Poppins Medium | 14–18px |
| GO button | #005F73 circle | Poppins Bold | 13px |
| XP bar fill | #F5A623 | — | 4px |
| XP bar track | #E0E0E0 | — | 4px |
| Stat numbers | #005F73 | Space Grotesk Bold | 26px |
| Points / XP values | #F5A623 | Space Grotesk Bold | 14–20px |
| Level badge | #F5A623 bg, white text | Montserrat Bold | 12px |
| Progress fraction | #555555 | Inter Regular | 12px |
