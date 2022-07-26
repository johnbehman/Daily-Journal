const api = "http://localhost:8080"

const applicationState = {
    journalEntry: []
}

export const fetchJournalEntry = async () => {
    const dataFetch = await fetch(`${api}/journalEntry`)
    const journalEntryJs = await dataFetch.json()
    applicationState.journalEntry = journalEntryJs
}

export const getJournalEntry = () => {
    const copyOfJournalEntry = applicationState.journalEntry.map(entry => ({ ...entry }))
    return copyOfJournalEntry
}

export const addNewJournalEntry = async (entry) => {
    const taco = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalEntry)
}

const mainContainer = document.querySelector("#container1");
const response = await fetch(`${api}/journalEntry`, taco)
        const responseJson = await response.json()
        document.dispatchEvent(new CustomEvent("stateChanged"))
       return responseJson;
}


        export const deleteJournalEntry = async (id) => {
            await fetch(`${api}/journalEntry/${id}`, { method: "DELETE" })
            document.dispatchEvent(new CustomEvent("stateChanged"))
          }
          




// const journalEntry = [{
//     id: 1,
//     date: "07/26/2025",
//     concept: "Complex Flexbox",
//     entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
//     mood: "happy"
// },
// {
//     id: 2,
//     date: "07/27/2025",
//     concept: "javascript",
//     entry: "i learn more every day",
//     mood: "exiting"
// },
// {
//     id: 3,
//     date: "07/28/2025",
//     concept: "githup",
//     entry: "javascript is easy to learn. iam not lay ",
//     mood: "active"
// },
// {
//     id: 4,
//     date: "07/29/2025",
//     concept: "bootcamp",
//     entry: "loops is hard to learn ",
//     mood: "sad"
// },
// {
//     id: 5,
//     date: "07/30/2025",
//     concept: "tirmenal",
//     entry: "conditional is easy",
//     mood: "worry"
// },
// {
//     id: 6,
//     date: "08/1/2025",
//     concept: "vscode",
//     entry: "i will be a good coding ",
//     mood: "strong"
// },
// {
//     id: 7,
//     date: "08/2/2025",
//     concept: "thankfull",
//     entry: "need mor practices on js",
//     mood: "active"
// }
// ];

// export const getQuotes = () => {
//     const copyOfQuotes = journalEntry;
//     return copyOfQuotes;
// }