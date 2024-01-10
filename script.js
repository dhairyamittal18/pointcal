// Mock data for tes
const teams = [
    { name: 'Team 1', placement: 2, kills: 20, wins: 2, matchesPlayed: 5 },
    { name: 'Team 2', placement: 1, kills: 24, wins: 1, matchesPlayed: 5 },
    // ... add more teams
];

// Function to sort teams based on total points
function sortTeams(a, b) {
    const totalPointsA = calculateTotalPoints(a);
    const totalPointsB = calculateTotalPoints(b);

    return totalPointsB - totalPointsA || a.placement - b.placement || Math.random() - 0.5;
}

// Function to calculate placement points
function getPlacementPoints(position) {
    const placementPoints = [15, 12, 10, 8, 6, 4, 2, 1, 1, 1, 1, 1];
    return placementPoints[position - 1] || 0;
}

// Function to calculate total points for a team
function calculateTotalPoints(team) {
    const placementPoints = getPlacementPoints(team.placement);
    const killPoints = team.kills; // You can adjust this based on your kill points system
    const winPoints = team.wins; // Adjust based on your win points system
    return placementPoints + killPoints + winPoints;
}

// Function to generate the point table
function generatePointTable() {
    const sortedTeams = teams.sort(sortTeams);

    const pointTable = document.getElementById('pointTable');
    pointTable.innerHTML = '';

    // Create left and right side tables
    const leftTable = document.createElement('table');
    const rightTable = document.createElement('table');

    // Create table headers
    const headers = [' # ', 'TEAM NAME', 'PP', 'KP', 'WP', 'MP', 'TT'];
    const headerRow = document.createElement('tr');

    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });

    leftTable.appendChild(headerRow.cloneNode(true));
    rightTable.appendChild(headerRow.cloneNode(true));

    // Populate tables with team data
    sortedTeams.forEach((team, index) => {
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

        // Decide whether to add to the left or right table
        if (index < 12) {
            leftTable.appendChild(tr);
        } else {
            rightTable.appendChild(tr);
        }
    });

    // Add left and right tables to the main pointTable div
    pointTable.appendChild(leftTable);
    pointTable.appendChild(rightTable);
}

// Call the function to generate the initial point table
generatePointTable();
