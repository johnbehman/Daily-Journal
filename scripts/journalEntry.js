import { getJournalEntry,addNewJournalEntry,deleteJournalEntry } from "./database.js"

export const displayJournalEntry = ()=> {
const journalEntry = getJournalEntry()
let quotesHtml = ""
    journalEntry.forEach(entry => {
        quotesHtml += `<div class="singleQuote">
    <p>${entry.date}</p>
    <p>${entry.concept}</p>
    <p>${entry.entry}</p>
    <p>${entry.mood}</p>
    <button class="entryButtons" id="editButton">Edit</button>
    <button class="entryButtons" class="buttonRemove" id="removeButton--${entry.id}">Remove</button>
    </div>`
    })
    return quotesHtml
}



document.addEventListener("click", (e) => {
 
    if (e.target.id === "submitJournalEntry") {
      // Need logic to get all the values from the form, 
      // format them into an object and add that object to the `orders` array in `orders.js`
      const dateElement = document.querySelector("input[`placeholder=date`]")?.value

      const conceptElement= document.querySelector("input[`placeholder=List the concepts`]")?.value

      const entryElement =  document.getElementById("entry")?.value

      const moodElement = document.getElementById("mood")?.value
    
      const newJournalEntry =
      {
        date: dateElement,
        concept: conceptElement,
        entry: entryElement,
        mood: moodElement
      }
      console.log(newJournalEntry)
      addNewJournalEntry(newJournalEntry)
    }
});

document.addEventListener("click", click => {
    if (click.target.id.startsWith("removeButton--")) {
        const [,journalEntryId] = click.target.id.split("--")
        deleteJournalEntry(parseInt(journalEntryId))
    }
})