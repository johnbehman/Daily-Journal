import { fetchJournalEntry } from "./database.js"
import { displayJournalEntry} from "./journalEntry.js";


const mainContainer = document.getElementById('entries')


const render = async () => {
    await fetchJournalEntry()
    mainContainer.innerHTML = displayJournalEntry()
}

render()

document.addEventListener("stateChanged", (event) => {
    render()
  })






// const project = () => {
//   let html = "";
//   const journalEntry = getQuotes();
//   for (let i = 0; i < journalEntry.length; i++) {
//     html += `<div class = "jEntry">
//             <p>${journalEntry[i].concept}</p>
//             <p>${journalEntry[i].date}</p>
//             <p>${journalEntry[i].mood}</p>
//             <p>${journalEntry[i].entry}</p>
//         </div>`;
//   }

//   document.getElementById("entries").innerHTML = html;
// };

// project();

// document.addEventListener("click", (e) => {
//   if(e.target.id == "entry"){}
// })
