# Lukas Chin Personal Website

My personal website at [lukaschin.com](https://lukaschin.com). It covers my resume (education, experience and projects), as well as who I am outside of work and my hobbies. My personality and style is reflected in the design itself, down to the colorways the site is dressed in, each taken from a piece of clothing I wear often.

## Stack

| | |
|---|---|
| Built with | [Astro](https://astro.build) |
| Deployed on | [Vercel](https://vercel.com) |
| Live at | [lukaschin.com](https://lukaschin.com) |
| | |

## Local Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Structure

```
public/
  img/           Photos by section: home, climbing, cooking, music, fashion, sewing,
                 projects, and company/school logos
  media/         Videos by section (climbing, music), each with its poster frame

src/
  components/    Hang tag, tag photo and back thumbnails
  layouts/       Shared page shell: nav, footer, colorway hanger and animations
  pages/         One page per tab: Home, About, Experience, Projects, Misc
  styles/        Site styles
  data.ts        Content: experience, projects, skills, education, hobbies, facts
  garment.ts     Colorways and the clothing drawings on the hanger
```
