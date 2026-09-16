# Miss Dee and Friends · The Magic Hair Bus

A fun, playful redesign of missdeeandfriends.com with an events board Miss Dee can update herself.

## What's in this folder

| File | What it is | Who touches it |
| --- | --- | --- |
| `index.html` | The whole web page (design, copy, layout) | Designer/developer |
| `events.js` | The events board. Plain list of upcoming stops | **Miss Dee** |
| `README.md` | This file | Everyone |

## Updating events (the 60-second version)

Think of `events.js` as the chalkboard sign outside the bus. The web page reads the
chalkboard every time someone visits, so whatever is written there is what shows up
under **"Where's Bertha next?"** on the site. You never touch `index.html`.

1. Open `events.js` in any text editor (Notepad, TextEdit, VS Code).
2. Copy one event block, from its `{` down to its `},`.
3. Paste it inside the big square brackets `[ ... ]`.
4. Change the words inside the quotes.
5. Save the file and upload it to wherever the site is hosted.

An event looks like this:

```js
{
  title: "Saturday Pop-Up Cuts",
  date: "2026-10-03",            // year-month-day, always this shape
  startTime: "10:00 AM",         // optional
  endTime: "2:00 PM",            // optional
  type: "Pop-Up",                // Pop-Up, Party, Carnival, Neighborhood Visit, Festival, Other
  place: "Neighborhood Park Pavilion",
  address: "123 Example St, Houston, TX",
  note: "Walk-ups welcome.",     // optional
  link: "",                      // optional: a Facebook event or ticket page
  sample: true                   // delete this line on real events
},
```

Things the page does for you automatically:

- Sorts events by date, soonest first.
- Hides events once their date has passed (visitors can tick "Show past events" if they want).
- Adds a **Directions** button (Google Maps) from `place` + `address`.
- Adds an **Add to calendar** button (Google Calendar) from the date and times.
- Shows a friendly message when the list is empty.
- Labels an event **Example** while `sample: true` is on it. Delete that line for real events.

Common mistakes: a missing comma after a `}`, a missing quote mark, or a date written
like `10/3/2026`. If the board disappears, one of those three is usually the reason.

## Preview locally

Double-click `index.html`. No build step, no server needed. The fonts load from Google
Fonts, so an internet connection makes it look right; without one it falls back to a
system rounded font.

## Publishing

This is a standalone HTML page. It can be dropped onto any static host (Netlify, Vercel,
GitHub Pages, cPanel) or used as the blueprint for rebuilding the Square Online / WordPress
site section by section.
