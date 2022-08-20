import { getQuotes } from "./entries.js";

const project = () => {
  let html = "";
  const journalEntry = getQuotes();
  for (let i = 0; i < journalEntry.length; i++) {
    html += `<div class = "jEntry">
            <p class="taco-concrpt">${journalEntry[i].concept}</p>
            <p class="taco-concrpt">${journalEntry[i].date}</p>
            <p class="taco-concrpt">${journalEntry[i].mood}</p>
            <p class="taco-concrpt">${journalEntry[i].entry}</p>
        </div>`;
  }

  document.getElementById("entries").innerHTML = html;
};

project();

