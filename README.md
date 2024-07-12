# 🍺 OpenBrew Ai website

This website is the home of the Obrew suite of products.

## Usage

Install dependencies:

```sh
pnpm i
```

Start the local development server:

```sh
pnpm dev
```

Build for deployment to [Vercel](https://vercel.com):

```sh
pnpm build
```

Export a static HTML version:

```sh
pnpm export
```

Deploy by pushing to [Github](https://github.com), and importing the project into [Vercel](https://vercel.com).

## Configuration

The project is based on [Next.js](https://nextjs.org).

Define your pages in the [`pages` directory](/blob/main/pages).

Configure the app and theme by editing [`global.css`](/blob/main/global/global.css)
and [`global.json`](/blob/main/global/global.json).

## Configure Mailchimp

Create an `.env` file:

```env
MAILCHIMP_DC=us1
MAILCHIMP_LIST_ID=xxxxxx
MAILCHIMP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxx-us1
```

MAILCHIMP_DC is the region code (denoted at end of api key).
MAILCHIMP_LIST_ID is the mailing list id assigned at account setup (https://mailchimp.com/help/find-audience-id/).
