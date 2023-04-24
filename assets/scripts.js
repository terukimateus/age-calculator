
var resultday = document.getElementById('result-d')
var resultmonth = document.getElementById('result-m')
var resultyear = document.getElementById('result-y')

const form = document.getElementById('form'); 

form.addEventListener('submit', function(event) {
  event.preventDefault(); // impede que o formulário seja enviado

  // Processa os valores dos campos do formulário e exibe os resultados

  const age = idade();
  countUp(resultday, age.days);
  countUp(resultmonth, age.months);
  countUp(resultyear, age.years);

  function countUp(element, target) {
    const duration = 200000; // tempo em milissegundos para a animação completa
    const step = Math.ceil(target / (duration / 10)); // passo para aumentar a cada 10ms
    let current = 0;

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        clearInterval(interval);
        current = target;
      }
      element.innerHTML = current;
    }, 10);
  }
});

function idade() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    
    let ageInYears = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      ageInYears--;
      const months = 12 - birthDate.getMonth() + today.getMonth() - 1;
      const days = new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate() - birthDate.getDate() + today.getDate();
      return {years: ageInYears, months, days};
    } else {
      const months = today.getMonth() - birthDate.getMonth();
      const days = dayDiff < 0 ? new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate() - birthDate.getDate() + today.getDate() : dayDiff;
      return {years: ageInYears, months, days};
    }
  }