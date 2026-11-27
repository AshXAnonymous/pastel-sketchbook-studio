# Ansh's Creative Canvas

Ansh Verma’s creative developer portfolio, built with TanStack Start, React, and Tailwind CSS.

## Local development

Use Node.js 22.12 or later with npm. From the repository root, install the locked dependencies and start the development server.

```sh
npm ci
npm run dev
```

Open `http://localhost:8080`. `npm run build` produces the Vercel build in `.vercel/output`.

To preview a Cloudflare build locally, select the Cloudflare preset and start it with Wrangler.

```sh
NITRO_PRESET=cloudflare-module npm run build
npm exec --yes --package=wrangler -- wrangler dev --config .output/server/wrangler.json
```

In PowerShell, set `$env:NITRO_PRESET = "cloudflare-module"` before `npm run build` and clear it with `Remove-Item Env:NITRO_PRESET` afterward.

## Design brief

This website should have a completely different personality from a typical dark professional portfolio. The visual style should feel like a beautiful handmade digital scrapbook, pastel notebook, and hand-drawn crayon illustration brought to life.

The website should be fun and memorable, but all information must remain clear, readable, professional, and easy to navigate.

I will replace my personal information, image, projects, experience, and links later, so use well-organized demo content and reusable components.

OVERALL DESIGN PERSONALITY

Create a website that feels:

Cute and charming

Soft and pastel

Handcrafted and personal

Playful and interactive

Creative but not messy

Childlike in visual expression, but polished enough to be a professional portfolio

Similar to exploring a beautifully designed digital sketchbook or scrapbook

Use:

Hand-drawn crayon textures

Sketchy borders

Doodles

Scribbles

Cute stars

Clouds

Hearts

Flowers

Tiny smiley faces

Arrows

Sticky notes

Hand-drawn underlines

Small animated decorative objects

Keep the layout organized. Do not make the page cluttered.

Every decoration should support the cute handmade aesthetic without making the content difficult to read.

COLOR PALETTE

Use a soft, attractive pastel color system with good contrast.

Suggested colors:

Pastel pink

Peach

Baby blue

Lavender

Soft lilac

Mint green

Butter yellow

Cream / off-white

Very light pastel beige

Use a slightly darker version of selected pastel colors for:

Important buttons

Headings

Active states

Borders

Hover effects

Important contrast rule

The website must remain highly legible.

Do not place light pastel text on a similar light pastel background.

For body text, use:

Soft dark charcoal

Deep muted purple

Dark brown-grey

Use dark text on light pastel backgrounds whenever necessary.

The design should look soft, not washed out.

INTRO / LOADING ANIMATION

Create a cute and memorable intro animation.

Start with a soft cream or very light pastel background.

Then animate a large hand-drawn crayon-style letter:

A

The letter should look as if it is being drawn on the screen by hand.

Animation sequence:

Show an empty soft pastel background.

A crayon stroke begins drawing the large letter “A”.

The drawing should feel imperfect and handmade, with subtle texture.

Add a tiny animated crayon, pencil, or drawing stroke effect if appropriate.

Small cute doodles such as stars, hearts, sparkles, or tiny flowers can appear around the letter.

Then reveal the full name:

ANSH VERMA

The name should appear in a beautiful hand-drawn or crayon-style display font.

Make the name feel as if it is being written onto the screen.

Add a small subtitle underneath, such as:

creative developer • digital builder • curious creator

Transition playfully into the main website.

Possible transition ideas:

The intro page slides away like a notebook page.

The screen gets wiped away by a giant pastel crayon stroke.

The doodles fly gently outward to reveal the homepage.

A paper-cut transition opens into the portfolio.

Keep the intro approximately 2–4 seconds.

Make it charming but easy to skip.

Include a small “Skip Intro” button.

TYPOGRAPHY

Use a combination of two font styles.

1. Display / Heading Font

Use a cute handwritten, crayon, sketchbook, or hand-drawn font.

It should feel:

Imperfect

Playful

Handmade

Creative

Use this mainly for:

Hero headings

Section titles

Decorative labels

Buttons where appropriate

Important words

2. Body Font

Use a clean, highly readable sans-serif font for:

Paragraphs

Project descriptions

Experience information

Contact forms

Navigation

Important

Do not use the crayon font for long paragraphs.

All important information must remain easy to read.

Use the handwritten font as a visual personality layer while the clean font maintains usability.

NAVIGATION

Create a cute floating or sticky navigation bar.

The navigation should feel like a handmade collection of small paper tabs, stickers, or rounded pastel buttons.

Use attractive alternatives for the sections:

about me ✿

my little universe ✦ — Projects & Experience

things i can do ♡ — Services

say hello! ☁ — Contact

You can improve these names if you find something even cuter while keeping the meaning clear.

Navigation interactions

Every navigation item should have JavaScript-powered interactions.

On hover:

Slight wiggle or wobble

Tiny rotation

Gentle bounce

Underline drawn with a crayon animation

Small doodle appears

Background pastel color changes

When clicked:

Smooth scroll to the section

Active navigation item updates

Small playful animation confirms the interaction

Do not make the animation excessive.

Keep it smooth and cute.

HERO SECTION

Create a visually exciting but clean hero section.

The main composition should feel like a digital scrapbook page.

Central Image

Place a large placeholder image of me in the center or slightly off-center.

I will replace it with my own image later.

Use an obvious placeholder path:

/placeholder-ansh-portrait.png

Frame the image creatively using:

Hand-drawn borders

Polaroid-style frame

Washi tape

Small doodles

Stars

Hearts

Flowers

Handwritten notes

The image itself should have a subtle floating animation.

On mouse movement, it can have gentle parallax.

Hero Text

Use a friendly introduction such as:

Hey! I'm Ansh 👋

Then:

ANSH VERMA

Use a large cute handwritten/crayon style for the name.

Add demo text:

I build fun, thoughtful, and beautiful digital experiences with code, creativity, and lots of curiosity.

All information must be easy for me to edit later.

Add cute interactive buttons:

Explore my world ↓

Let's make something! ✦

Button functionality

Buttons must actually work.

For example:

Smooth scroll to projects

Open the contact section

Trigger a small animation

Have hover effects

On hover, buttons can:

Wiggle slightly

Bounce gently

Change pastel shade

Reveal a small doodle

Move a few pixels

Show an animated arrow

Do not use aggressive animation.

CUTE INTERACTIVE DECORATIONS

Add small decorative elements throughout the website.

Examples:

☁ Floating clouds

✦ Sparkles

♡ Hearts

☀ Small suns

✿ Flowers

☺ Smiley faces

✎ Pencil doodles

★ Stars

Hand-drawn arrows

Make selected decorations interactive.

For example:

Clicking a star

It can:

Spin once

Create tiny sparkles

Change into another doodle

Hovering a cloud

It can:

Drift slightly

Change shape subtly

Release tiny sparkles

Clicking a smiley

It can:

Blink

Change expression

Display a tiny friendly message

Use these interactions sparingly and make sure they do not interfere with reading or navigation.

The website should feel like it has small hidden surprises.

ABOUT SECTION

Create a section titled something like:

a little bit about me ✿

Use a scrapbook-style layout.

Include:

Large heading

Editable biography

Small profile facts

Skills

Experience highlights

Fun facts placeholders

Use demo content only.

Possible layout elements:

Sticky notes

Notebook paper

Polaroid cards

Hand-drawn arrows pointing toward important information

Small labels written in a crayon font

Example skills:

Frontend Development

Backend Development

React

JavaScript

Node.js

UI/UX

Creative Development

Display skills as cute interactive stickers, tags, or bubbles.

Skill interactions

On hover:

Wiggle

Slight scale

Rotate a little

Reveal a tiny tooltip

Change pastel color

Make these interactions smooth and delightful.

PROJECTS & EXPERIENCE

Create a major section titled:

things i've made ✦

or:

my little universe of work

Use a playful project gallery.

I will add my own projects later, so create reusable project components with demo content.

Example projects:

Project 01 — Sunny

A demo project description.

Project 02 — Bubble

A demo project description.

Project 03 — Dreamy

A demo project description.

Project 04 — Sprinkle

A demo project description.

Each project card should contain:

Project image placeholder

Project name

Short description

Technology tags

Year

View Project button

Project card design

Make cards resemble:

Polaroids

Scrapbook pieces

Sticky notes

Postcards

Notebook pages

Each card should use a different but coordinated pastel combination.

Hover functionality

On hover:

Card tilts slightly

Image moves subtly

A doodle animation appears

Card lifts off the page

Hand-drawn shadow changes

Arrow animates

Border wiggles gently

Add JavaScript interactions so clicking a project can:

Open a project modal, or

Navigate to a project details page

Create the structure for this functionality even with demo projects.

EXPERIENCE TIMELINE

Create a cute visual experience timeline.

Instead of a standard corporate timeline, make it look like:

A hand-drawn journey

A winding path

Connected doodle dots

A notebook sketch

Each stop on the journey should contain editable demo information:

Role

Company

Date

Short description

When users scroll through the timeline:

The path draws itself

Timeline points appear one by one

Small doodles animate gently

Keep all text clearly readable.

SERVICES SECTION

Use a heading such as:

things i can help with ♡

Create cute service cards with demo content.

01 — MAKE IT PRETTY ✿

UI/UX and visual design.

02 — BUILD IT ✦

Modern website and application development.

03 — MAKE IT MOVE ☁

Interactive animations and creative frontend experiences.

04 — MAKE IT YOURS ♡

Custom digital solutions.

I will edit these services later.

Each service card should have:

Cute hand-drawn icon

Title

Short readable description

Interactive hover effect

Hover effects

Examples:

Icon wiggles

Border gets drawn

Card gently bounces

A small doodle appears

Background shifts to another pastel shade

Keep movement subtle.

FUN FUNCTIONALITY

Include multiple small JavaScript-powered interactions throughout the portfolio.

Add features such as:

1. Theme Mood Button

Create a cute button that lets users switch between different pastel moods.

For example:

🌸 Strawberry mode

☁ Sky mode

🌿 Mint mode

🌙 Lavender mode

The entire website should smoothly transition between coordinated pastel color palettes.

Save the user's selected mood in local storage.

2. Cute Cursor Interaction

Create an optional custom cursor effect for desktop.

It could be:

A tiny star

A pencil tip

A small sparkle

On hover over interactive elements, it changes slightly.

Make sure the normal cursor remains usable and disable this effect on touch devices.

3. Random Compliment Button

Add a small cute button somewhere on the website:

need a tiny smile? ♡

When clicked, display a random friendly message.

Examples:

"you're doing great! ✦"

"one step at a time ☁"

"you found a secret! ♡"

"keep creating cool things ✿"

Use JavaScript to randomly select the message.

4. Hidden Easter Eggs

Add a few subtle hidden interactions.

For example:

Click a doodle three times

Hover over a star for a few seconds

Discover a tiny hidden smiley

The interaction can trigger:

Confetti

Sparkles

A friendly message

A tiny animation

Keep Easter eggs lightweight.

5. Back to Top Button

Create a cute floating button.

Instead of a normal arrow, use something like:

A little rocket

A balloon

A cloud with an arrow

It should smoothly scroll back to the top.

CONTACT SECTION

Create a warm and inviting final section.

Suggested title:

let's be internet friends! ☺

or:

want to make something cute together? ♡

Include editable demo content for:

Email

LinkedIn

GitHub

Instagram

Other social links

Create a fully functional-looking contact form with:

Name

Email

Message

Send button

Use a cute handwritten label style and clean readable input text.

Form interactions

When users focus on an input:

Border is drawn or highlighted

A tiny doodle appears

Pastel accent changes

For validation:

Show friendly error messages

Do not use harsh red warning styles

Use cute but clear feedback

Example:

"oops! looks like this field needs a little something ✿"

When successfully submitted, show a cute success animation such as:

Paper plane flying

Hearts popping

Sparkles appearing

The form should have proper validation and functional interaction.

FOOTER

Create a cute minimal footer.

Include:

made with code + curiosity + a little chaos ♡

Also include:

ANSH VERMA

Social links

Copyright

Add a tiny animated doodle in the corner.

For example, a small sleeping cloud or blinking star.

ANIMATION SYSTEM

All animations should feel:

Soft

Bouncy but controlled

Playful

Smooth

Cute

Use spring-based animations where appropriate.

Include:

Gentle floating

Wiggle on hover

Tiny rotation

Hand-drawn line reveals

Fade and slide animations

Scroll-triggered doodle reveals

Button bounce

Card tilt

Soft scale interactions

Important rule

Do NOT animate every element at once.

The website should never feel chaotic.

Animations should guide attention and reward interaction.

Prioritize:

Performance

Accessibility

Readability

Support prefers-reduced-motion.

RESPONSIVE DESIGN

The portfolio must work beautifully on:

Desktop

Laptop

Tablet

Mobile

On mobile:

Maintain the cute aesthetic

Make navigation easy to use

Reduce heavy animations

Ensure all buttons are touch-friendly

Prevent decorative elements from covering text

Keep font sizes readable

Create a playful animated mobile menu.

Do not simply shrink the desktop design.

Design each layout intentionally.

TECHNICAL REQUIREMENTS

Build this as a clean, modern, reusable application.

Use:

React

TypeScript

Tailwind CSS

Framer Motion for smooth animations and interactions

Use JavaScript/React functionality for:

Navigation

Smooth scrolling

Theme mood switcher

Random compliment generator

Interactive buttons

Project modals or navigation

Contact form validation

Easter eggs

Back-to-top button

Use reusable data-driven components for:

Projects

Experience

Skills

Services

Social links

Keep all demo information easy to find and replace.

Clearly separate portfolio data from UI components.

Make it easy for me to add my own projects later without changing the overall design.

FINAL DESIGN RULE

Create a portfolio that feels like:

A beautiful interactive pastel sketchbook filled with creativity, personality, tiny surprises, and handmade charm.

It should be cute and playful, with:

Soft attractive pastel colors

Crayon-style typography

Hand-drawn doodles

Fun interactive buttons

Smooth hover movements

Gentle wobble animations

Small JavaScript-powered surprises

Strong readability

Clean organization

Professional portfolio functionality

The website should feel unique and personal, not like a generic pastel template.

Make the user smile while exploring it—but never sacrifice usability or legibility for visual effects.

Use demo information throughout because I, Ansh Verma, will replace the personal details, image, experience, projects, services, and social links later.
