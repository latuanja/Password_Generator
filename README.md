# Random_Password_Generator

##Table of Contents
*Purpose of Project
*Actions Performed
*Technology Used
*Summary


##Purpose of Project
Security is always at the forefront of the minds of users who are concerned about the things that are personal to them.  Everyone knows that if personal information gets into the wrong hands, violation of privacy security and sometimes finances are at risk.  This website was created to provide users with a Random Password Generator.  In order to keep hackers and snoopers from obtaining personal information, like access to banking details, this tool helps to randomize a password.  Randomizing the password avoids predictable entry, which makes users more vulnerable to attacks.

##Actions Performed
*Variables were created for all characters, which included:
**Special Characters
**Numeric Characters
**Uppercased Letters
**Lowercased Letters
*Using these variables, functions were called out to alow prompts to appear when the user chooses the "generate password" button.  These prompts will ask the user:
**How many characters they want the password to contain (must be > 8 and < 129 characters);
**Confirm use of special characters;
**Confirm use of numeric characters;
**Confirm use of lowercased characters;
**Confirm use of uppercased characters;
*At least one of the character types must be selected or the user will receive an error
*Using Math.floor & Math.random an array is used to return random elements.
*Conditional statements are used to provide options and push random characters, based on the selections made in beginning prompts.
*Random password is then returned in text field for the user

![]assets/Password_Generator_Screenshot.png
**
##Technologies Used
This website was created with HTML, JS & CSS.

##Summary
This website provides a much needed security function for anyone that needs to keep information private and safe from security vulnerabilities.


