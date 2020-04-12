/* -------------------------------------------------------------------
 Find by Value
---------------------------------------------------------------------*/

// Objects we will manipulate
let input_object = document.getElementById("input_by_value")

let color1_4band = document.getElementById("color1_4band");
let color2_4band = document.getElementById("color2_4band");
let color3_4band = document.getElementById("color3_4band");
let msg_4band = document.getElementById("msg_4band");

let color1_5band = document.getElementById("color1_5band");
let color2_5band = document.getElementById("color2_5band");
let color3_5band = document.getElementById("color3_5band");
let color4_5band = document.getElementById("color4_5band");
let msg_5band = document.getElementById("msg_5band");

// Verify if user has made a good input
function verify_and_get_input() {

    var user_input = input_object.value.toLowerCase();
    var last_char = user_input.slice(-1);
    var before_last_char = user_input.slice(-2)[0];
    var input_value;

    if (Number(user_input) < 100)
    {
        console.log('verify_and_get_input() didn\'t find good input');
        input_value = -1;
        return input_value;
    }

    // Verify if its all numeric
    if (Number(user_input))
    {
        input_value = Number(user_input);
    }
    // Verify if its numeric with a notation unit from SI, e.g. : 10k
    else if (last_char === 'k' || last_char === 'm' || last_char === 'g' && Number(before_last_char))
    {
        var base_multiplier = 1;
        if (last_char === 'k') { base_multiplier = 1000}
        if (last_char === 'm') { base_multiplier = 1000000}
        if (last_char === 'g') { base_multiplier = 1000000000}

        var base_number = Number(user_input.replace(last_char,""));

        input_value = base_number*base_multiplier;
    }
    else
    {
        // Display message of wrong input
        console.log('verify_and_get_input() didn\'t find good input');
        input_value = -1;
        return input_value;
    }

    console.log('verify_and_get_input() executed');
    return input_value;
}

// Change cell style
function change_cell_style(manipulated_object,color_name)
{
    
    manipulated_object.style.backgroundColor = color_name;
    manipulated_object.innerText = color_name[0].toUpperCase() + color_name.slice(1);

    if (color_name === 'black')
    {
        manipulated_object.style.color = 'white'
    }
    else
    {
        manipulated_object.style.color = 'black'
    }
}

// Calculate and sugest resistor colors
function sugest(mes_num) {
    // Pre-processing: round up to the nearest 100 
    var nearest_hundred = (Math.round(mes_num/100)*100).toString();
 
    // 4 Colors
    var first_digit  = Number(nearest_hundred[0]);
    var second_digit = Number(nearest_hundred[1]);
    var rest = Math.log10(Math.pow(10,nearest_hundred.slice(2).length));

    change_cell_style(color1_4band,colors[first_digit])
    change_cell_style(color2_4band,colors[second_digit])
    change_cell_style(color3_4band,colors[rest])

    // 5 Colors
    first_digit  = Number(nearest_hundred[0]);
    second_digit = Number(nearest_hundred[1]);
    var third_digit = Number(nearest_hundred[2]);
    rest = Math.log10(Math.pow(10,nearest_hundred.slice(3).length));

    change_cell_style(color1_5band,colors[first_digit])
    change_cell_style(color2_5band,colors[second_digit])
    change_cell_style(color3_5band,colors[third_digit])
    change_cell_style(color4_5band,colors[rest])

    return nearest_hundred;
}

// Text to display with the color change
function sugest_message(mes_num,flag)
{   
    var texto = mes_num;
    if (flag === -1)
    {
        var intro4 = "Considering a 4 band color...";
        var intro5 = "Considering a 5 band color...";
    }
    else
    {
        var intro4 = "Considering a 4 band color, you should use a resistor of " + texto + " Ohms";
        var intro5 = "Considering a 5 band color, you should use a resistor of " + texto + " Ohms";
    }

    msg_4band.innerText = intro4;
    msg_5band.innerText = intro5;
}

// Fresh Reload
function fresh_reload() {
    color1_4band.style.color = 'black';
    color2_4band.style.color = 'black';
    color3_4band.style.color = 'black';
    color1_4band.style.backgroundColor = 'white';
    color2_4band.style.backgroundColor = 'white';
    color3_4band.style.backgroundColor = 'white';
    color1_4band.innerText = 'Color #1';
    color2_4band.innerText = 'Color #2';
    color3_4band.innerText = 'Color #3';
    color1_5band.style.color = 'black';
    color2_5band.style.color = 'black';
    color3_5band.style.color = 'black';
    color4_5band.style.color = 'black';
    color1_5band.style.backgroundColor = 'white';
    color2_5band.style.backgroundColor = 'white';
    color3_5band.style.backgroundColor = 'white';
    color4_5band.style.backgroundColor = 'white';
    color1_5band.innerText = 'Color #1';
    color2_5band.innerText = 'Color #2';
    color3_5band.innerText = 'Color #3';
    color4_5band.innerText = 'Color #4';
}

// Action
function find_by_value() {
    fresh_reload();
    var result = verify_and_get_input();
    if (result === -1)
    {
        input_object.value = "";
        input_object.placeholder = "Please, input a good value like 1200 or 1.2k. PS: Values must be greater than or equal to 100";
        sugest_message(sugested_value,result);
    }
    else
    {
        var sugested_value = sugest(result);
        sugest_message(sugested_value,result);
    }
    console.log("Value input: " + result.toString());
}



