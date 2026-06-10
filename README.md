# Eishan & Gayani Wedding Invitation Website

A simple Next.js wedding invitation website with RSVP saving to MongoDB and a protected admin dashboard.

## Main Details Already Added
- Couple: Eishan Dinuka & Gayani Chathurika
- Date: 15 November 2026
- Venue: Centauria Wild, Udawalawe
- Groom's parents: Jayasiri and Sandya
- Bride's parents: Dharmasena and Suneetha

## Run Locally
```bash
npm install
cp .env.example .env.local
npm run dev
```

Open: http://localhost:3000

## MongoDB Setup
Create a MongoDB Atlas database and add the connection string to `.env.local`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding_invitation?retryWrites=true&w=majority
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password
AUTH_SECRET=your-long-random-secret
```

## Add Pre-Shoot Photos
Put your real photos here:

```text
public/photos/preshoot-1.jpg
public/photos/preshoot-2.jpg
public/photos/preshoot-3.jpg
public/photos/preshoot-4.jpg
```

Then replace the placeholder gallery boxes in `app/page.tsx` with actual `<img>` or `next/image` components if needed.

## Deploy to Vercel
1. Push this folder to GitHub.
2. Import the GitHub repo in Vercel.
3. Add the same environment variables in Vercel Project Settings.
4. Deploy.

## Admin Dashboard
Go to `/admin` and log in using `ADMIN_USERNAME` and `ADMIN_PASSWORD`.
