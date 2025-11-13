function rachet(count, tovar) {
    let price = 0;

    if (tovar === 'tovar1') {
        price = 100;
    }
    else if (tovar === 'tovar2') {
        price = 200;
    }
    else if (tovar === 'tovar3') {
        price = 235;
    }

    return count * price;
}

function click1() {

    let inputField = document.querySelector('input[name="field1"]');
    let inputValue = inputField.value.trim(); // .trim() удаляет пробелы в начале и конце


    let result = document.getElementById("result");
    let truestr = /^\d+$/; 
    
    // получаем массив из например 123 = ["123"]
    // поэтому если пусто то ничего корректного не получили
    if (inputValue.match(truestr) === null) {

        result.textContent = "❌ Ошибка! Введите только целые числа.";
        result.style.color = "red"; 
        result.style.backgroundColor = "#EDEFF2";

        result.style.display = 'block'; 
        
        return false; 
    } else {

        let count = parseInt(inputValue);

        // document.querySelector('select[name="select1"]') находит элемент <select>
        // .value получает значение атрибута value выбранного <option> (т.е. 'v1' или 'v2')
        let tovar = document.querySelector('select[name="select1"]').value;
        let answer_cost = rachet(count, tovar);
        
        result.textContent = `✅ Количество: ${inputValue}. Стоимость: ${answer_cost} руб`;
        result.style.color = "green";
        result.style.backgroundColor = "#EDEFF2";

        result.style.display = 'block'; 
        
        return false; // чтобы форма не отправлялась (не сбивался текст)
    }
}