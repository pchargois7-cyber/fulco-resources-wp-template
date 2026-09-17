# Miss Dee and Friends · The Magic Hair Bus

A fun, playful redesign of missdeeandfriends.com with an events board Miss Dee can update herself.

## What's in this folder

| File | What it is | Who touches it |
| --- | --- | --- |
| `index.html` | The whole web page (design, copy, layout) | Designer/developer |
| `add-event.html` | A form that writes `events.js` for you. Open it in a browser. | **Miss Dee** |
| `events.js` | The events board. Plain list of upcoming stops | **Miss Dee** (through the form, or by hand) |
| `README.md` | This file | Everyone |

## Updating events with the form (easiest)

1. Open `add-event.html` in your browser (double-click it, or visit it on the site).
2. Fill in the event and click **Add to the list**. Edit, duplicate or delete anything already there.
3. Click **Download events.js**.
4. Upload that file where the website lives, replacing the old `events.js`.

The form remembers your work in the browser between visits, and **Start over from the
file on the site** throws away the draft if you need a clean slate. The first time you
open it you'll see three example events; click **Remove the example events**.

## Updating events by hand (the 60-second version)

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

- Draws the month calendar and the list from the same file. One edit updates both.
- Colors each calendar chip by its `type` (Pop-Up teal, Party pink, Carnival/Festival yellow, Neighborhood Visit lavender).

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
