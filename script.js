const exercises = [
    { id: 1, category: 'E-Jugend', name: 'Dribbling Übung', image: 'test.png' },
    { id: 2, category: 'E-Jugend', name: 'Wurftraining', image: 'e-jugend-wurftraining.png' },
    { id: 3, category: 'E-Jugend', name: 'Zirkeltraining', image: 'e-jugend-zirkeltraining.png' },
    { id: 4, category: 'D-Jugend', name: 'Dribbling Übung', image: 'd-jugend-dribbling.png' },
    { id: 5, category: 'D-Jugend', name: 'Wurftraining', image: 'd-jugend-wurftraining.png' },
    { id: 6, category: 'D-Jugend', name: 'Zirkeltraining', image: 'd-jugend-zirkeltraining.png' },
    { id: 7, category: 'C-Jugend', name: 'Dribbling Übung', image: 'c-jugend-dribbling.png' },
    { id: 8, category: 'C-Jugend', name: 'Wurftraining', image: 'c-jugend-wurftraining.png' },
    { id: 9, category: 'C-Jugend', name: 'Zirkeltraining', image: 'c-jugend-zirkeltraining.png' },
    { id: 10, category: 'B-Jugend', name: 'Dribbling Übung', image: 'b-jugend-dribbling.png' },
    { id: 11, category: 'B-Jugend', name: 'Wurftraining', image: 'b-jugend-wurftraining.png' },
    { id: 12, category: 'B-Jugend', name: 'Zirkeltraining', image: 'b-jugend-zirkeltraining.png' },
    { id: 13, category: 'A-Jugend', name: 'Dribbling Übung', image: 'a-jugend-dribbling.png' },
    { id: 14, category: 'A-Jugend', name: 'Wurftraining', image: 'a-jugend-wurftraining.png' },
    { id: 15, category: 'A-Jugend', name: 'Zirkeltraining', image: 'a-jugend-zirkeltraining.png' },
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
