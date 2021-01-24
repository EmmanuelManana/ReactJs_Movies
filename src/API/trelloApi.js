const Trello = {
    key: "539c638fa80231cebacf6f121ab254ac",
    token: "c26c06aae5feb32c742bba6a157717786a2038ad7c7f344e8e463c37fc48f445",
    idList: "600b085f8f623712ff35e807",
    idBoard: "600b085f8f623712ff35e806",
};

export const customFieldsId = {
    FirstName : "600bf58bea97ff384e90f98a",
    Surname : "600bf4eeefc697050ec3d87c",
    Email : "600bf5b2220e82155de8c229",
    PhoneNumber : "600c36fd38b72d3fdc4b1cef",
    Movie :"600c0a28d91a3a6ce17333ba",
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
