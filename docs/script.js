console.log('js exec started');

const dataTeamPage = new Request("team.json");

fetch(dataTeamPage)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error status: ${ronsponse.status}`);
        }
        return response.json();
    })
    .then((response) => {
    console.log(response);
    }
    )