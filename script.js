// Function to generate a generic point table
function generateTable(containerId, teams) {
    const pointTable = document.getElementById(containerId);
    pointTable.innerHTML = '';

    // Create the table
    const table = document.createElement('table');
    table.classList.add('table');

    // Create table headers
    const headers = ['#', 'TEAM NAME', 'PP', 'KP', 'WP', 'MP', 'TT'];
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Populate the table with team data
    teams.forEach((team, index) => {
        const tr = document.createElement('tr');
        const tdRank = document.createElement('td');
        const tdName = document.createElement('td');
        const tdPlacementPoints = document.createElement('td');
        const tdKillPoints = document.createElement('td');
        const tdWinPoints = document.createElement('td');
        const tdMatchesPlayed = document.createElement('td');
        const tdTotalPoints = document.createElement('td');

        tdRank.textContent = index + 1;
        tdName.textContent = team.name;

        const placementPoints = getPlacementPoints(team.placement);
        tdPlacementPoints.textContent = placementPoints;

        const killPoints = team.kills; // You can adjust this based on your kill points system
        tdKillPoints.textContent = killPoints;

        const winPoints = team.wins; // Adjust based on your win points system
        tdWinPoints.textContent = winPoints;

        const matchesPlayed = team.matchesPlayed;
        tdMatchesPlayed.textContent = matchesPlayed;

        const totalPoints = calculateTotalPoints(team);
        tdTotalPoints.textContent = totalPoints;

        tr.appendChild(tdRank);
        tr.appendChild(tdName);
        tr.appendChild(tdPlacementPoints);
        tr.appendChild(tdKillPoints);
        tr.appendChild(tdWinPoints);
        tr.appendChild(tdMatchesPlayed);
        tr.appendChild(tdTotalPoints);

        table.appendChild(tr);
    });

    // Add the table to the container
    pointTable.appendChild(table);
}

// Function to generate the point table for top 12 teams
function generateTop12Table() {
    const teamsTop12 = [
        { name: 'Team 1', placement: 1, kills: 20, wins: 3, matchesPlayed: 5 },
        { name: 'Team 2', placement: 5, kills: 15, wins: 1, matchesPlayed: 5 },
        // ... Add more teams as needed
    ];
    generateTable('pointTableTop12', teamsTop12);
}

// Function to generate the point table for bottom 12 teams
function generateBottom12Table() {
    const teamsBottom12 = [
        { name: 'Team 13', placement: 13, kills: 10, wins: 2, matchesPlayed: 5 },
        { name: 'Team 14', placement: 18, kills: 8, wins: 0, matchesPlayed: 5 },
        // ... Add more teams as needed
    ];
    generateTable('pointTableBottom12', teamsBottom12);
}

// Call the functions to generate the initial point tables
generateTop12Table();
generateBottom12Table();
