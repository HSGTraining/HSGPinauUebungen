const exercises = [
    { id: 1, category: 'U10', name: 'Dribbling Übung', image: 'u10-dribbling.png' },
    { id: 2, category: 'U10', name: 'Wurftraining', image: 'u10-wurftraining.png' },
    { id: 3, category: 'U10', name: 'Zirkeltraining', image: 'u10-zirkeltraining.png' },
    { id: 4, category: 'U12', name: 'Dribbling Übung', image: 'u12-dribbling.png' },
    { id: 5, category: 'U12', name: 'Wurftraining', image: 'u12-wurftraining.png' },
    { id: 6, category: 'U12', name: 'Zirkeltraining', image: 'u12-zirkeltraining.png' },
    { id: 7, category: 'U14', name: 'Dribbling Übung', image: 'u14-dribbling.png' },
    { id: 8, category: 'U14', name: 'Wurftraining', image: 'u14-wurftraining.png' },
    { id: 9, category: 'U14', name: 'Zirkeltraining', image: 'u14-zirkeltraining.png' },
    { id: 10, category: 'U16', name: 'Dribbling Übung', image: 'u16-dribbling.png' },
    { id: 11, category: 'U16', name: 'Wurftraining', image: 'u16-wurftraining.png' },
    { id: 12, category: 'U16', name: 'Zirkeltraining', image: 'u16-zirkeltraining.png' },
    { id: 13, category: 'U18', name: 'Dribbling Übung', image: 'u18-dribbling.png' },
    { id: 14, category: 'U18', name: 'Wurftraining', image: 'u18-wurftraining.png' },
    { id: 15, category: 'U18', name: 'Zirkeltraining', image: 'u18-zirkeltraining.png' },
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
