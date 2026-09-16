/* ==========================================================================
   MISS DEE'S EVENTS BOARD  —  this is the only file you need to edit
   ==========================================================================

   Think of this file as the chalkboard sign outside the bus. Every time
   someone opens the website, the page reads this board and draws the
   "Where's the bus next?" section from it. Change the board, the page changes.

   HOW TO ADD AN EVENT
   1. Copy one block from the { ... } to the closing },  (including the comma)
   2. Paste it anywhere inside the square brackets [ ... ] below
   3. Change the words inside the quotes
   4. Save, then upload/publish the file

   RULES OF THUMB
   - Keep the quotes " " around every value
   - Keep the comma after every line and after every }
   - date must look like "2026-10-18"  (year-month-day)
   - Events in the past hide automatically. You never have to delete them
     unless you want to. (Set showPastEvents to true to show them.)
   - Leave a value as "" (empty quotes) if you don't have it

   TYPES you can use for "type":
   "Pop-Up"  "Party"  "Carnival"  "Neighborhood Visit"  "Festival"  "Other"

   The three events below are EXAMPLES so you can see the layout.
   They are marked  sample: true  so the page labels them "Example".
   Delete them when you add your real events.
   ========================================================================== */

window.MISS_DEE_EVENTS_SETTINGS = {
  showPastEvents: false,
  emptyMessage: "Nothing on the board right now. Follow us on Instagram to catch the next pop-up!"
};

window.MISS_DEE_EVENTS = [

  {
    title: "Saturday Pop-Up Cuts",
    date: "2026-10-03",
    startTime: "10:00 AM",
    endTime: "2:00 PM",
    type: "Pop-Up",
    place: "Neighborhood Park Pavilion",
    address: "123 Example St, Houston, TX",
    note: "Walk-ups welcome. First-timers get a bus tour before their cut.",
    link: "",
    sample: true
  },

  {
    title: "Sensory-Friendly Morning",
    date: "2026-10-11",
    startTime: "9:00 AM",
    endTime: "11:30 AM",
    type: "Neighborhood Visit",
    place: "Example Community Center",
    address: "456 Sample Ave, Pearland, TX",
    note: "Quiet hours: low lights, no clippers noise, appointment only.",
    link: "",
    sample: true
  },

  {
    title: "Fall Carnival with the Magic Hair Bus",
    date: "2026-10-24",
    startTime: "12:00 PM",
    endTime: "5:00 PM",
    type: "Carnival",
    place: "Example Elementary School",
    address: "789 Placeholder Rd, Houston, TX",
    note: "Glitter braids, spray color and hair tinsel. Come find Bertha!",
    link: "",
    sample: true
  }

];
