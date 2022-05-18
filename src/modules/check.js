const check = () => {
    const inputsText = document.querySelectorAll('input[name="name"]');
 
    inputsText.forEach(function(item) {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ\s]/, "");
        });
        item.addEventListener('blur', (e) => {
            e.target.value = e.target.value.trim();
        });
    });

};

export default check;