const btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == '' || weight == ''){
        alert('vui lòng nhập weight và height');
        return;
    }

    height = height / 100;

    var BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);

    var genderRadios = document.getElementsByName('Gender');
    var status = '';
    var value = 0;
    for(var i = 0; i < genderRadios.length; i++){
        if(genderRadios[i].checked){
            value = genderRadios[i].value;
            if(value === "0"){
                if(BMI < 20.7){
                    status = 'Gầy'
                }else if(BMI >= 20.7 && BMI < 26.4){
                    status = 'Bình thường'
                }else if(BMI >= 26.4 && BMI < 27.8){
                    status = 'Thừa cân nhẹ';
                }else if(BMI >= 27.8 && BMI < 31.1){
                    status = 'Trên mức lí tưởng'
                }else {
                    status = 'Béo phì';
                }
                break;
            }else if(value === "1"){
                if(BMI < 19.1){
                    status = 'Gầy';
                }else if(BMI >= 19.1 && BMI < 25.8){
                    status = 'Bình thường'
                }else if(BMI >= 25.8 && BMI < 27.3){
                    status = 'Thừa cân nhẹ';
                }else if(BMI >= 27.3 && BMI < 32.3){
                    status = 'Trên mức lí tưởng'
                }else {
                    status = 'Béo phì';
                }
                break;
            }
        }
    }
    document.querySelector('.comment').innerHTML = `trạng thái của bạn : ${status}`;
    document.querySelector('#result').innerHTML = BMI;

});