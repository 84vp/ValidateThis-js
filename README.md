Validation for forms
-------------------------------------------------------------
 DEMO : https://front-yedynka.github.io/valid-this/

FEATURES:
For validation form, add class "validthis-submint" to submit button (input). This button must be inside form. Add class "valid-this" to inputs for validate it. 
After checking element this element get attribute "valid-status". If elemet is valid - valid-status="true", if novalid - valid-status="false". 
If oll elements is valid, form get attribute "valid-form-status='true' ", if summer of elements novalid "valid-form-status='false' . 
Just us attribute "valid-form-status" for checking form

Parameters for validation:

"valid-lang" - attribute limits the input of invalid characters 
can be: "cyr" - only cyrillic symbols; 
"lat" - only latin; 
"oll-lang" - oll lang; 
"numb" - only numbers; 
"oll" - oll symbols

"valid-min-leng" - number for minimal length;

"valid-max-leng" - number for maximal length;

"valid-group" - attribute for group of inputs ore other elements with "one of" selection; 
"checkboxrow" - for chekboxes groups; 
"select" - for select form;
Styling not valid elements
For styling not valid elements use selector "[valid-status="false"] ""# FormValidation" 
