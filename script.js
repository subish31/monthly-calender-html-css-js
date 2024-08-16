const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentDate = new Date();

function renderCalendar() {
    const daysContainer = document.querySelector('.days');
    const monthYear = document.getElementById('month-year');
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    daysContainer.innerHTML = '';
    for (let i = 0; i < firstDayOfMonth; i++) {
        daysContainer.innerHTML += `<span></span>`;
    }
    for (let i = 1; i <= lastDateOfMonth; i++) {
        daysContainer.innerHTML += `<span>${i}</span>`;
    }
}
document.getElementById('prev-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById('next-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});
renderCalendar();
