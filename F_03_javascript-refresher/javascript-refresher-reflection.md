### 00_script_in_html.html
I learned here that we have different ways pano natin ilalagay yung JavaScript sa HTML. We have inline,external, and module. Also, I learned na importante pala yung placement ng script tag kasi it affects kung kailan magru-run yung code.

### 01_base_syntax.js
Console log yung naghe-help para display yung output and we can do different declaration but Javascript is case sensitive, need nating ma-follow yung casing like kung pano natin ni-define, so if magp-print/display tayo ng value dapat nakafollow sa naming format if hindi na-follow magkakaroon ng problem kahit minor lang like na-small letter lahat and wala naman ganun na value, hidi niya mahahanap yung ni-declare mo kasi case sensitive siya.  

### 02_variables.js
May difference yung double equal sa triple equal or the identical to operator, and when we say double equal ang gagawin lang is magco-compare ng values. While, triple equal is iko-compare niya type and value. But in double equal may conversion na nangyayari, if integer yung isa and then may string magiging true pa rin yung value kasi kino-convert niya.

### 03_functions.js
There are different ways to write/define the functions. We have traditional where we explicitly use the function keyword and give the function a name. And, we have arrow function that takes input and return the value. Also, the traditional and standard function declarations refer to the same way of declaring a function.

### 04_objects.js
We use object kapag ire-relate or igu-group natin yung mga related data under one name. Also, if naka-define na yung value and you need to add another value walang magiging problem pero pagbinago mo yung pinaka-value niya and tinawag mo yung bagong value na ni-convert natin into string, there will be an error. 


### 05_arrays.js
Natandaan ko ulit dito yung arrays and also yung different ways para i-manage yung laman nito. The `push()` adds a new item sa dulo, while `shift()` naman nagre-remove nung nasa unahan or first item. Lastly, the `map()` its different kasi gumagawa siya ng new array instead of changing the orriginal array.

### 06_control_structures.js
The conditions if, else if and else helps to decide where the program depende sa n-declare na conditions. The for and while loop naman are used to repeat the code. And sa for, may initialization, condition and increment, pero sa while we need to manually change the condition para hindi mag-infinite loop.

### 07_dom.html
I learned here kung paano nagi-interact si JavaScript sa HTML using DOM. Kasi we can get an elemen using `getElementByid()` and then modify it. Also, yung pag gamit ng `addEventListener()`, `prompt()` and `setTimeout()` makikita mo kung how it changes sa webpage.

### 08_essential_features.js
Nagamit ko dito yung `map()` na ginawa ko sa previous part. I also learned how destructuring can get specific values from an object and how spread can create a new array or object without changing the original.

### 09_tricky_parts.js
As the title it says, it's tricky talaga especially yung this kasi nagc-change yung behavior niya depends on regular function or arrow function. Also, yung difference ng copying by reference and copying using spread kasi yung reference copy can still change the original array.

### 10_let_const.js
I learned the difference of `let`, `const` and `var`. Kais `let` can be reassigned, while const cannot be reassigned. Then yung `var`, although it's working pa rin, mas used ngayon yung `let` and `const` because of block scope.

### 11_arrow_functions.js
I learned how to change a regular function into an arrow function. Pano yung different ways of writing arrow functions, like kapag walang parameter, may isang parameter, and yung implicit return na hindi na kailangan ng {} and return.

### 12_destructuring.js
I learned how destructuring can get values from an object without needing to write the object name and property every time. Also, pwede pala gamitin yung destructuring directly sa parameter ng function like `printName({ name })`.

### 13_spread_rest.js
I learned the difference between spread and rest kahit pareho silang gumagamit ng `...`. Spread is used para i-expand or i-copy yung laman ng array or object, while rest is used naman para i-collect yung multiple arguments into an array.

### 14_classes_inheritance.js
I learned ulit yung classes and constructor. Yung constructor yung nagse-set ng initial values ng object, then yung extends naman allows a class to inherit methods from another class. So instead na ulitin yung same method, pwede natin siyang i-reuse.

### 15_modules_export.js
Na-refresh sakin ulit yung pag gamit ng export para ma-share yung values or function para ma-reuse natin sila sa ibang JavaScript file. May default export na usually one main export, and named export for us to have multiple exports in one file.

### 16_modules_import.js
I learned how to use import properly para makuha yung exported values from another file. And kapag default yung export, no need to use the curly braces and pwede rin palitan yung name. While sa named export, kailangan ng curly braces and dapat same exported name.

### 17_logical_operators.js
I learned about truthy and falsy values in JavaScript. Na-realize ko rin na hindi lahat ng `&& and ||` results ay true or false, kasi minsan actual value yung binabalik niya. Also, kahit empty array and empty object, nagiging truthy pa rin sila.

### 18_ternary_nullish.js
I learned na yung ternary operator is like a shortcut for a simple if/else conditions. Then yung optional chaining `?`. helps prevent errors kapag walang property, while `??` gives a fallback only kapag null or undefined yung value.

### 19_strings_numbers.js
I learned different string methods like `trim()`, `split()`, `toUpperCase()`, `includes()`, and `slice()`. Then sa numbers yung `parseInt()`, `toFixed()`, and `Number.isNaN()`. Also, `toFixed()` returns a string kahit number yung pinanggalingan.

### 20_array_methods.js
I learned how to use different array methods like `filter()`, `find()`, `some()`, and `every()`. They have different purposes depende if gusto nating mag-filter, maghanap or mag-check ng values. Pati yung sa `sort()` na changing the original array kaya mas safe gumawa muna ng copy before sorting.

### 21_errors_json.js
I learned how to handle errors using try and catch para hindi basta mag-stop yung program kapag may error. Also, yung throw new `Error()` can be used kapag gusto nating purposely mag-create ng error. Then `JSON.stringify()` converts an object into text, while `JSON.parse()` converts it back into an object.

### 22_async_javascript.js
I learned the difference between callbacks, Promises, and async/await. Lahat sila same, ginagamit kapag may task na hindi agad matatapos, pero different yung way kung paano nila hina-handle yung result. Mas na-gets ko rin kung bakit mas readable gamitin yung async/await.

### 23_closures_scope.js
I learned about scope especially kung paano yung count inside `createCounter()`, hindi siya directly accessible outside. ALso, yung closure, kung saan kini-keep ng function yung value ng count kahit tapos na yung parent function. Kaya kahit gumawa tayo ng dalawang counter, may sarili silang count and hindi sila nag-aagawan ng value.
