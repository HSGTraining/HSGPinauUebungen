const exercises = [
    { id: 1, category: 'E-Jugend', name: 'Dribbling Übung', image: 'test2.png', pdf: 'test3.pdf' },
    { id: 2, category: 'E-Jugend', name: 'Wurftraining', image: 'e-jugend-wurftraining.png', pdf: 'e-jugend-wurftraining.pdf' },
    { id: 3, category: 'E-Jugend', name: 'Zirkeltraining', image: 'e-jugend-zirkeltraining.png', pdf: 'e-jugend-zirkeltraining.pdf' },
    { id: 4, category: 'D-Jugend', name: 'Dribbling Übung', image: 'd-jugend-dribbling.png', pdf: 'd-jugend-dribbling.pdf' },
    { id: 5, category: 'D-Jugend', name: 'Wurftraining', image: 'd-jugend-wurftraining.png', pdf: 'd-jugend-wurftraining.pdf' },
    { id: 6, category: 'D-Jugend', name: 'Zirkeltraining', image: 'd-jugend-zirkeltraining.png', pdf: 'd-jugend-zirkeltraining.pdf' },
    { id: 7, category: 'C-Jugend', name: 'Dribbling Übung', image: 'c-jugend-dribbling.png', pdf: 'c-jugend-dribbling.pdf' },
    { id: 8, category: 'C-Jugend', name: 'Wurftraining', image: 'c-jugend-wurftraining.png', pdf: 'c-jugend-wurftraining.pdf' },
    { id: 9, category: 'C-Jugend', name: 'Zirkeltraining', image: 'c-jugend-zirkeltraining.png', pdf: 'c-jugend-zirkeltraining.pdf' },
    { id: 10, category: 'B-Jugend', name: 'Dribbling Übung', image: 'b-jugend-dribbling.png', pdf: 'b-jugend-dribbling.pdf' },
    { id: 11, category: 'B-Jugend', name: 'Wurftraining', image: 'b-jugend-wurftraining.png', pdf: 'b-jugend-wurftraining.pdf' },
    { id: 12, category: 'B-Jugend', name: 'Zirkeltraining', image: 'b-jugend-zirkeltraining.png', pdf: 'b-jugend-zirkeltraining.pdf' },
    { id: 13, category: 'A-Jugend', name: 'Dribbling Übung', image: 'a-jugend-dribbling.png', pdf: 'a-jugend-dribbling.pdf' },
    { id: 14, category: 'A-Jugend', name: 'Wurftraining', image: 'a-jugend-wurftraining.png', pdf: 'a-jugend-wurftraining.pdf' },
    { id: 15, category: 'A-Jugend', name: 'Zirkeltraining', image: 'a-jugend-zirkeltraining.png', pdf: 'a-jugend-zirkeltraining.pdf' },
    { id: 16, category: 'Toppies', name: 'Dribbling Übung', image: 'Toppies-dribbling.png', pdf: 'Toppies-dribbling.pdf' },
    { id: 17, category: 'Toppies', name: 'Wurftraining', image: 'Toppies-wurftraining.png', pdf: 'Toppies-wurftraining.pdf' },
    { id: 18, category: 'Toppies', name: 'Zirkeltraining', image: 'Toppies-zirkeltraining.png', pdf: 'Toppies-zirkeltraining.pdf' },
    
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
            <a href="${ex.pdf}" download="${ex.name}.pdf">Download PDF</a>
        `;
        exerciseList.appendChild(exerciseItem);
    });
}
