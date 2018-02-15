let hurgada = 25;
let sharm = 15;
let taba = 6;
let left;
let temp;


const numberOfPeople = prompt('Kоличество людей');

if (numberOfPeople > 25 || numberOfPeople < 0) {
    alert('Мест нет');
} else if (numberOfPeople > 0 && numberOfPeople <= 25) {
    temp = confirm('Для вас есть место в группе Хургада');
    if (temp == false) {
        alert('Простите!')
    } else {
        left = hurgada - numberOfPeople;
        alert('Спасибо. Осталось мест:' + left);
    }
} else if (numberOfPeople > 0 && numberOfPeople <= 15) {
    alert('Для вас есть места в группах Хургада и Шарм');
    temp = confirm('Для вас есть места в группе Хургада');
    if (temp == false) {
        temp = confirm('Мы можем вам предложить поехать в Шарм')
        if (temp == false) {
            alert('Простите!')
        } else {
            left = sharm - numberOfPeople;
            alert('Спасибо. Осталось мест:' + left);
        }
    }
} else if (numberOfPeople > 0 && numberOfPeople <= 6) {
    alert('Для вас есть места в группах Хургада, Шарм и Таба');
    temp = confirm('Для вас есть места в группе Хургада');
    if (temp == false) {
        temp = confirm('Мы можем вам предложить поехать в Шарм');
        if (temp == false) {
            temp = confirm('Мы можем вам предложить поехать в Таба');
            if (temp == false) {
                alert('Простите!')
            } else {
                left = taba - numberOfPeople;
                alert('Спасибо. Осталось мест:' + left);
            }
        }
    }
}
