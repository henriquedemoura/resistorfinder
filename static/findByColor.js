/* -------------------------------------------------------------------
 Find by Color
---------------------------------------------------------------------*/

// Objects we will manipulate
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let color3 = document.querySelector('#color3');
let color4 = document.querySelector('#color4');
let color5 = document.querySelector('#color5');
let outputValue = document.getElementById("outputValue");

// Auxiliary variables
var resistor_value, resistor_message, tolerance;
let base, multiplier;

// Change background color and text of dropdown when color is selected
function change_fields(exemple_color) 
{
    if (exemple_color.value[0] === "#") //If field not selected, display text in black and bg in white
    {
        exemple_color.style.color='black';
        exemple_color.style.backgroundColor='white';
    }

    else
    {
        // If field is selected, display selected color as a bg color
        exemple_color.style.backgroundColor = colors[Number(exemple_color.value)];

        if (exemple_color.value === '0')
        {
            exemple_color.style.color='white';
        }
        else
        {
            exemple_color.style.color='black';
        }
    }
}

// When a new color is selected, change its bg and text colors
function change_bgc() 
{
    change_fields(color1);
    change_fields(color2);
    change_fields(color3);
    change_fields(color4);
    change_fields(color5);
    console.log('Color changed');
}

// Functions that gives the value of a resistor when colors are selected
function get_value_4band()
{
    base = Number(color1.value + color2.value);
    multiplier = Math.pow(10,Number(color3.value));
    console.log('4 band value of resistor calculated');

    return base*multiplier;
}
function get_value_5band()
{
    base = Number(color1.value + color2.value + color3.value);
    multiplier = Math.pow(10,Number(color4.value));
    console.log('5 band value of resistor calculated');

    return base*multiplier;
}

// Based in the input colors, creates a message to the user with the resistance value correspondent to its colors
function show_resistor_value() {

    if (color5.value != "#5" && color4.value != "#4" && color3.value != "#3" && color2.value != "#2" && color1.value != "#1")
    {
        resistor_value = get_value_5band();
        tolerance = tolerances[Number(color5.value)];
    }
    else if (color5.value === "#5" && color4.value != "#4" && color3.value != "#3" && color2.value != "#2" && color1.value != "#1")
    {
        resistor_value = get_value_4band();
        tolerance = tolerances[Number(color4.value)];
    }
    else if (color5.value === "#5" && color4.value === "#4" && color3.value != "#3" && color2.value != "#2" && color1.value != "#1")
    {
        resistor_value = get_value_4band();
        tolerance = "";
    }
    else if (color5.value === "#5" || color4.value === "#4" || color3.value === "#3" || color2.value === "#2" || color1.value === "#1")
    {
        resistor_message = "Please, choose colors for #1 to #4 or #1 to #5";
        color1.value = "#1";
        color1.style.backgroundColor = 'white';
        color1.style.color = 'black';
        color2.value = "#2" ;
        color2.style.backgroundColor = 'white';
        color2.style.color = 'black';
        color3.value = "#3" ;
        color3.style.backgroundColor = 'white';
        color3.style.color = 'black';
        color4.value = "#4" ;
        color4.style.backgroundColor = 'white';
        color4.style.color = 'black';
        color5.value = "#5" ;
        color5.style.backgroundColor = 'white';
        color5.style.color = 'black';
        return resistor_message;
    }

    // Formating resistor value to SI notation
    var r_unit = "";

    if (resistor_value >= 1000 && resistor_value <1000000)    
    {
        resistor_value = resistor_value/1000;
        r_unit = "k";
    }
    else if (resistor_value >= 1000000 && resistor_value <1000000000)
    {
        resistor_value = resistor_value/1000000;
        r_unit = "M";
    }
    else if (resistor_value >= 1000000000)
    {
        resistor_value = resistor_value/1000000000;
        r_unit = "G";
    }
    else {}

    if (tolerance == "")
    {
        resistor_message = resistor_value.toString() + r_unit;
    }
    else
    {
        resistor_message = resistor_value.toString() + r_unit + " with a tolerance of " + tolerance;
    }

    console.log('resistor_message made');
    return resistor_message;
}

// Display the result to the user
function changebyvalue()
{ 
    outputValue.placeholder = show_resistor_value();
    console.log('Finding Value by Color Completed');
}