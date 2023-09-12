const buttons = document.querySelectorAll('button');
const topicTitle = document.getElementById('Title');
const topicDescription = document.getElementById('Desc');

const buttonContent = [
    { title: "LOB", description: "LOB is een chill vak" },
    { title: "2", description: "fa" },
    { title: "3", description: "fb" },
    { title: "4", description: "fc" },
    { title: "5", description: "fd" },
    { title: "6", description: "fe" },
    { title: "7", description: "ff" },
    { title: "8", description: "fg" },
    { title: "9", description: "fh" },
    { title: "10", description: "fi" },
    { title: "11", description: "fj" },
    { title: "12", description: "fk" },
    { title: "13", description: "fl" },
    { title: "14", description: "fm" },
];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        topicTitle.textContent = buttonContent[index].title;
        topicDescription.textContent = buttonContent[index].description;
    });
});
