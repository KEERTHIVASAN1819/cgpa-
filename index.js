document.getElementById('cgpa-form').addEventListener('submit', calculateCGPA);

const gradeMapping = {
    'A+': 10,
    'A': 9,
    'B+': 8,
    'B': 7,
    'C+': 6,
    'C': 5,
    'F': 0
};

function calculateCGPA(event) {
    event.preventDefault();
    const grades = document.querySelectorAll('.grade');
    const credits = document.querySelectorAll('.credits');
    let totalGradePoints = 0;
    let totalCredits = 0;

    grades.forEach((grade, index) => {
        const gradeValue = gradeMapping[grade.value.toUpperCase()];
        if (gradeValue === undefined) {
            alert(`Invalid grade input: ${grade.value}`);
            return;
        }
        const creditValue = parseFloat(credits[index].value);
        totalGradePoints += gradeValue * creditValue;
        totalCredits += creditValue;
    });

    if (totalCredits === 0) {
        alert('Total credits cannot be zero.');
        return;
    }

    const cgpa = totalGradePoints / totalCredits;
    document.getElementById('result').textContent = `Your CGPA is ${cgpa.toFixed(2)}`;
}
