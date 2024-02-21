// Select the output element
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

// Input elements
let isValid = false;
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");

// Error elements
const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");
submit_btn.addEventListener("click", CalculateDate);

input_day.addEventListener("input", (ev) => {
  console.log(typeof +input_day);
  if (+input_day.value > 31 || +input_day.value <= 0) {
    error_day.textContent = "Must be a valid date";
    isValid = false;
  } else {
    isValid = true;
    error_day.textContent = "";
  }
});

input_month.addEventListener("input", (ev) => {
  console.log(typeof +input_month);
  if (+input_month.value > 12 || +input_month.value <= 0) {
    error_month.textContent = "Must be a valid date";
    isValid = false;
  } else {
    isValid = true;
    error_month.textContent = "";
  }
});

/*
function validateInput(inputElement, errorElement, maxValue) {
  console.log(typeof +inputElement.value);
  if (+inputElement.value > maxValue || +inputElement.value <= 0) {
    errorElement.textContent = "Must be a valid date";
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}

input_day.addEventListener("input", (ev) => {
  isValid = validateInput(input_day, error_day, 31);
});

input_month.addEventListener("input", (ev) => {
  isValid = validateInput(input_month, error_month, 12);
});

*/

// Função responsável por calcular a idade com base na data de nascimento fornecida
function CalculateDate() {
  // Verifica se os campos de entrada de data são válidos
  if (isValid) {
    // Cria uma string representando a data de nascimento no formato "mês/dia/ano"
    let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
    console.log(birthday);
    // Cria um objeto de data a partir da string de data de nascimento
    let birthdayObj = new Date(birthday);
    //Wed Dec 17 1997 00:00:00 GMT-0200 (Horário de Verão de Brasília)
    console.log(birthdayObj);
    // Calcula a diferença em milissegundos entre a data atual e a data de nascimento
    let ageDiffMill = Date.now() - birthdayObj;
    console.log(ageDiffMill);
    // Converte a diferença de milissegundos em um objeto de data
    // Cria um novo objeto de data utilizando o construtor Date() do JavaScript. Este construtor aceita um argumento opcional, que é o número de milissegundos desde 1º de janeiro de 1970
    let ageDate = new Date(ageDiffMill);
    console.log("ageDate: " + ageDate);
    // Calcula a diferença em anos entre o ano atual e o ano de nascimento
    // Calcula a idade da pessoa em anos, usando o ano atual e subtraindo o ano de referência de 1970 para obter o número de anos completos decorridos desde 1970 até o ano atual.
    let ageYears = ageDate.getUTCFullYear() - 1970;
    console.log("ageYears: " + ageYears);
    // Calcula o número de meses completos desde o início do ano
    let ageMonth = ageDate.getUTCMonth();
    console.log("ageMonth: " + ageMonth);
    // Obtém o dia da semana da idade
    let ageDay = ageDate.getUTCDay();
    console.log("ageDay: " + ageDay);
    // Atualiza os elementos de saída com os valores calculados da idade
    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;
    output_year.textContent = ageYears;
  } else {
    // Exibe um alerta de erro se os campos de entrada de data não forem válidos
    alert("error");
  }
}

/* 

let calculateBtn = document.getElementById("calculateAge");

calculateBtn.addEventListener("click", function() {
    let getYearVal = parseInt(document.getElementById("yearInput").value);
    let getMonthVal = parseInt(document.getElementById("monthInput").value);
    let getDayVal = parseInt(document.getElementById("dayInput").value);

    let dayError = document.getElementById("day-error");
    let monError = document.getElementById("month-error");
    let yearError = document.getElementById("year-error");

    // Error alert show when some invalid details in the input fields.
    if (isNaN(getDayVal) || isNaN(getMonthVal) || isNaN(getYearVal)) {
        dayError.style.display = "block";
        monError.style.display = "block";
        yearError.style.display = "block";
    }
    else if (getDayVal < 1 || getDayVal > 31) {
        dayError.style.display = "block";
    }
    else if (getMonthVal < 1 || getMonthVal > 12) {
        monError.style.display = "block";
    }
    else if (getYearVal < 1900 || getYearVal > 2024) {
        yearError.style.display = "block";
    }
    else{
        dayError.style.display = "none";
        monError.style.display = "none";
        yearError.style.display = "none";
    

    let getBirthDate = new Date(getYearVal, getMonthVal - 1, getDayVal);
    let getCurrentDate = new Date();

    // Calculate difference in years, months, and days correctly
    let ageInYear = getCurrentDate.getFullYear() - getBirthDate.getFullYear();
    let ageInMonth = getCurrentDate.getMonth() - getBirthDate.getMonth();
    let ageInDay = getCurrentDate.getDate() - getBirthDate.getDate();

    // Adjust for negative month difference
    if (ageInMonth < 0) {
        ageInYear--;
        ageInMonth += 12;
    }

    // Adjust for negative day difference (if current date is before birthday)
    if (ageInDay < 0) {
        ageInMonth--;
        ageInDay += getDaysInMonth(getBirthDate.getMonth(), getBirthDate.getFullYear());
    }

    // Function to calculate days in a month, considering leap years
    function getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    let yearResult = document.getElementById("yearResult");
    let monthResult = document.getElementById("monthResult");
    let dayResult = document.getElementById("dayResult");
        
    yearResult.innerHTML = ageInYear;
    monthResult.innerHTML = ageInMonth;
    dayResult.innerHTML = ageInDay;
}
})
*/
