// Emmanuel's
// const Trello = {
//     key: "539c638fa80231cebacf6f121ab254ac",
//     token: "c26c06aae5feb32c742bba6a157717786a2038ad7c7f344e8e463c37fc48f445",
//     idList: "600b085f8f623712ff35e807",
//     idBoard: "600b085f8f623712ff35e806",
// };

// export const customFieldsId = {
//     FirstName : "600bf58bea97ff384e90f98a",
//     Surname : "600bf4eeefc697050ec3d87c",
//     Email : "600bf5b2220e82155de8c229",
//     PhoneNumber : "600c36fd38b72d3fdc4b1cef",
//     Movie :"600c0a28d91a3a6ce17333ba",
// }

// Hey Carters 
const Trello = {
    key: "6eb508bda626ff893db446eff50d0066",
    token: "ae4a73cb0e40c46f6e642f5f7429394534b35e3b5a4c7c21438e5389eec20497",
    idBoard: "5a4b3c4cbe0188ca9c0b2058",
    idList: "5a4b3c4cbe0188ca9c0b2059",
};

export const customFieldsId = {
    FirstName : "5ffc223c1b802319cb6192fb",
    Surname : "5ffc224be427094809dd7b7c",
    Email : "5ffc22574a33172aa21ccda1",
    PhoneNumber : "5ffc22612d199f8b0e325ef4",
    Movie :"5ffc672ef7f3ca718a1a9b93",
}

export const updateCard = (cardId, TrelloKey, TrelloToken, customField, field) =>  
fetch(`https://api.trello.com/1/card/${cardId}/customField/${customField}/item?key=${TrelloKey}&token=${TrelloToken}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "value": {
                "text": `${field}`
            }
        }),
    })


export default Trello;
