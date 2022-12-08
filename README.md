# React-tailwind-portfolio

## App Description:

This serves as my personal portfolio for showcasing projects for potential recruiters. It's intentionally minimalist for emphasis on content while its codebase is probably overkill to highlight my preferred tech stack.

## Built with the following JS libraries:

| Frontend     | Backend    |
| ------------ | ---------- |
| React        | Node       |
| React Scroll | Express    |
| React Icons  | Nodemailer |
| TailwindCSS  |            |
| Axios        |            |

## Some mentionable improvements:

I've documented these as 'issues' and will check them off as I have time to address them, but the improvements I'd like to make are:

- smooth state transitions for mobile nav
- adding cards to a carousel

## Snippet for Gmail config with Nodemailer

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
