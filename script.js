// Mock data for testing
const teams = [
    { name: 'Team 1', kills: 5, placement: 2, wins: 2 },
    { name: 'Team 2', kills: 8, placement: 1, wins: 1 },
    // ... add more teams
];

// Function to sort teams based on points
function sortTeams(a, b) {
    const totalPointsA = a.kills + getPlacementPoints(a.placement);
    const totalPointsB = b.kills + getPlacementPoints(b.placement);

    return totalPointsB - totalPointsA || a.wins - b.wins || a.placement - b.placement || Math.random() - 0.5;
}

// Function to get placement points
function getPlacementPoints(position) {
    const placementPoints = [15, 12, 10, 8, 6, 4, 2, 1, 1, 1, 1, 1];
    return placementPoints[position - 1] || 0;
}

// Function to generate the point table
function generatePointTable() {
    const sortedTeams = teams.sort(sortTeams);

    const pointTable = document.getElementById('pointTable');
    pointTable.innerHTML = '';

    const teamElement = document.createElement('div');
    teamElement.classList.add('team');
    teamElement.style.backgroundImage = `url('path/to/your/pp.jpg')`; // Adjust the path to your single image (pp.jpg)
    pointTable.appendChild(teamElement);

    sortedTeams.forEach((team, index) => {
        const teamInfo = document.createElement('div');
        teamInfo.innerHTML = `<strong>${index + 1}. ${team.name}</strong> - Points: ${team.kills + getPlacementPoints(team.placement)} (Kills: ${team.kills}, Placement: ${team.placement}, Wins: ${team.wins})`;
        teamElement.appendChild(teamInfo);
    });
}

// Call the function to generate the initial point table
generatePointTable();
