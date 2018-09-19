module.exports = function check(str, bracketsConfig) {

    if (str.length <= 1){
        return false;
    }


    var curr_open_bracket, symbol;
    var stack = [];


    var opening_brackets = [],
        closing_brackets = [];


    //-------------------- раскидываем в шаблоны открывающие и закрывающие скобки

    for (var n = 0; n < bracketsConfig.length; n++) {
        opening_brackets.push(bracketsConfig[n][0]);
    }

    for (var k = 0; k < bracketsConfig.length; k++) {
        closing_brackets.push(bracketsConfig[k][1]);
    }

    //--------------------------------------------------------------------

    if((str.match(/\|/g) || []).length % 2 === 0){
        str = str.replace((/\|/g), '');
    }else{
        return false;
    }


    for (let i = 0; i < str.length; i++) {
        symbol = str[i];

        if (closing_brackets.indexOf(symbol) > -1) { // если закрывающая

            curr_open_bracket = opening_brackets[closing_brackets.indexOf(symbol)];

            if ( (stack.indexOf(curr_open_bracket) === -1)) {
                return false;
            }else{
                stack.splice(stack.indexOf(curr_open_bracket), 1);
            }

        }else {
            stack.push(symbol); // пушим открывающую
        }
    }


    if(stack.length % 2 === 1){
        return false;
    }else{
        return true;
    }


}





