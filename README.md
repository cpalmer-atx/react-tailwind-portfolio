# React-tailwind-portfolio

## App Description:

This serves as my personal portfolio for showcasing projects for potential recruiters. It's intentionally minimalist for emphasis on content while its codebase is probably overkill to highlight my preferred tech stack.

---

## Quick setup:

<b>Clone the repo</b>:

```
git clone https://github.com/cpalmer-atx/react-tailwind-portfolio.git
```

<b>Install dependencies</b>:

In the root folder:

```
npm run init
```

<b>Start the local dev server</b>:

```
npm run dev
```

The front end should launch in your default browser at localhost:3000. The dev script uses the concurrently and nodemon packages to spin up the express server on port 5000 and listen for changes. Remove 'example\_' from config and .env, then define the provided .env variables to finish setup. I have messages sent to my Gmail account from my personal domain email, so EMAIL could be used in place of GMAIL in the nodemailer controller if you don't mind messages in your inbox from yourself.

---

## Built with the following JS libraries:

| Frontend     | Backend    |
| ------------ | ---------- |
| React        | Node       |
| React Scroll | Express    |
| React Icons  | Nodemailer |
| TailwindCSS  |            |
| Axios        |            |

---

## Some mentionable improvements:

I've documented these as 'issues' and will check them off as I have time to address them, but the improvements I'd like to make are:

- smooth state transitions for mobile nav
- adding cards to a carousel
- replace alert on form submit
- sticky footer with dynamic github stats
- sticky mobile nav transition out on scroll down
- 'experience' component as timeline

## What's with the backend?

Running an express backend provides a secure place to store environment variables. More specifically, configuring nodemailer requires a fair amount of variables that shouldn't be exposed, especially if your email client happens to be gmail (see snippet below). It also lays the groundwork for one feature I'd like to add, which is to integrate with the GitHub API to display github stats and anything else that could be added later.

## Nodemailer snippet for Gmail

```
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.PWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  }
});
```
