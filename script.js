const exercises = [
    { id: 1, category: 'U10', name: 'Dribbling Übung', image: 'dribbling.png' },
    { id: 2, category: 'U12', name: 'Wurftraining', image: 'wurftraining.png' },
    // Weitere Übungen hinzufügen
];

function filterExercises(category) {
    const exerciseList = document.getElementById('exercise-list');
    exerciseList.innerHTML = '';
    const filteredExercises = exercises.filter(ex => ex.category === category);
    filteredExercises.forEach(ex => {
        const exerciseItem = document.createElement('div');
        exerciseItem.className = 'exercise-item';
        exerciseItem.innerHTML = `
            <h3>${ex.name}</h3>
            <img src="${ex.image}" alt="${ex.name}">
            <a href="${ex.image}" download="${ex.name}.png">Download</a>
        `;
        exerciseList.appendChild(exerciseItem);
    });
}