# FindingResistor

![Main screenshot](https://github.com/henriquedemoura/resistorfinder/blob/master/images/main.png)

## About this Project

**ResistorFinder** is a simple APP I wrote to fulfill my need of guessing the colors of a resistor. 
**It was also my final project for Harvard's CS50x class of 2020**.

A **resistor** is a passive two-terminal electrical component that implements electrical resistance as a circuit element. In electronic circuits, resistors are used to reduce current flow, adjust signal levels, to divide voltages, bias active elements, and terminate transmission lines, among other uses.

![Exemples of resistors](https://github.com/henriquedemoura/resistorfinder/blob/master/images/resistors.jfif)

To identify the resistance of a resistor by visual inspection, you should know the color code of each of its strips. Usually when you are working in a project, you have to deal with too many resistors, whether to use them or to store them, so, this app aims to help these processes.

## Built With

- HTML
- Javascript
- [Flask (micro web framework)](https://flask.palletsprojects.com/en/1.1.x/)
- [Bootstrap (front-end component library)](https://getbootstrap.com/)

## Features

This project has two main features: 
- displaying to the user the most likely resistor that could be used based on a user's numeric input
- displaying to the user the value of a resistor based on a color sequence

Even thought the features could be implemented using only javascript and HTML, the utilization of Flask aims a better division of files, due to the jinja features of the framework, and also to help when upgrading the project in the future.

## Files

- static/ - Where the .js are stored
	- resistor.js - Global variables
	- findByValue.js - Numeric value to resistor color code
	- findByColor.js - Resistor color code to numeric value
- templates/ - Where the HTML pages are stores
- app.py - The main file that manages the website

## Contributing

If you have any pull request to make, please do, I'll be very happy to expand this work.
In case you want to discuss it, or how I experienced the Harvard's CS50x course, please contact me:

- henriquedemourasinezio@gmail.com
- [LinkendIn](https://www.linkedin.com/in/businesshenrique/)

## License

This project is licensed under the MIT License - see the [LICENSE.md]([https://github.com/henriquedemoura/resistorfinder/blob/master/LICENSE](https://github.com/henriquedemoura/resistorfinder/blob/master/LICENSE)) file for details
