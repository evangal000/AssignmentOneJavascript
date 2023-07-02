/*

Assignment One: Convert Java into Javascript
--Evan | 07/02/2023

 */


/*

///
///
///
/// NUMBER SECTION
///
///
///


 */


///Problem One
//NO
//1: Type declaration in for loop was changed.
function isPrime( a) {
    //According to number theory, a number p is prime if A*P != 0 (mod p)

    for( i= 2; i < a ; i++){

        if( a % i == 0){
            return false;
        }
    }

    return true;
}

console.log("============ isPrime()=================");
console.log(isPrime(5));
console.log(isPrime(98));
console.log(isPrime(101));


///Problem Two
//NO
//2: Javascript does not have integer division. It only does floats.
// The change requires Math.floor.
function isPalindrome(a)
{
    // A number is palindrome if the digits are symmetrical.
    // EX:  1234321 -> Palindrome
    // EX:  1234 -> Not Palindrome

    //Solution: Note, a palindrome when flipped is the same number.
    // Therefore, we can test for equality.

    reverse = 0;
    forward = a;
    length = 0;

    while (a != 0) {
        a = Math.floor(a / 10);
        length++;
    }


    a = forward;

    while (length != 0) {

        reverse = (10 * reverse) + (a % 10);
        a = Math.floor( a / 10);
        length--;

    }

    console.log("Forward: " + forward + " Backward: " + reverse);
    if (forward == reverse) {
        return true;
    } else {
        return false;
    }
}

console.log("===========isPalindrome()===============")
console.log(isPalindrome(123));
console.log(isPalindrome(1221));


///Problem Three
//NO
//1: remove type declaration.
function swapNumber(  first,  second) {

    //Not really sure what this problem is asking for?

     third = 0;

    third = first;
    first = second;
    second = third;

    return first;
}


console.log("===========swapNumber()===========")
console.log(swapNumber(1,2));
console.log(swapNumber(2,1));


/// Problem Four:
//NO
// 4: You have to use let to make index i a variable.
// Was not at all obvious since other loops in previous programs didnt require it.
function getPrimeFactors( number) {

    // Prime factors of 28 = 2,7

    //We use the helper function isprime.

     output = "";

    for(let i = 2 ; i <= number ; i++){

        // test if divides.
        if( number % i == 0){
            //test if prime
            if( isPrime(i)){
                output = output + " " + i;
            }
        }

    }

    return output;
}

console.log("===============getPrimeFactors()==============")
console.log(getPrimeFactors(24));
console.log(getPrimeFactors(45));
console.log(getPrimeFactors(191));



///Problem Five
// NO
// 1: Because javascript doesnt do integer division, using expressions like /=
// cannot be done since Math.floor(/=) does not work.
function reverseInteger( number) {

    //EX: 1234 -> 4321
    //EX: 100 -> 001 -> 1
    // Note, we could have used this in the isPalindrome method.

     reverse = 0;

    while( number != 0){

        reverse = (reverse * 10) + (number % 10);

        number = Math.floor( number/10);

    }

    return reverse;
}

console.log("=============reverseInteger()=============")
console.log(reverseInteger(24))
console.log(reverseInteger(123456789))



// Recap:
// For Javascript, the key thing to remember is that it doesnt have an integer primitive
// type. It uses Number and Number is float. As a result, using techniques like / and %
// cannot be used and you must use Math.floor().
//
// also, nesting loops produces undefined behavior, so its important to use "let".



/*

///
///
/// STRING SECTION
///
///

 */




//Problem One
// NO
// 1: Javascript allows Strings to be read as character arrays. This eliminated the
// need to memorize static methods in the java libary like toCharArray.
function removeChar( word,  literal) {

    // "aabbccddee" & 'c' -> "aabbddee"

     output = "";


    for(let i = 0; i< word.length ; i++){

        if( word[i] == literal){
            continue;
        }

        output = output + word[i];

    }

    return output;
}

console.log("==============removeChar()=================")
console.log( removeChar(  "hello" , 'e') )
console.log( removeChar("elephant" , "e"))



/// Problem Two
//NO
//1: This is similar to the one above. remove toCharArray and use let in loop.


function charCount( word, literal) {

    // "Hello World" & 'l' -> 3


    output = 0;

    for(let i = 0; i< word.length ; i++){

        if( word[i] == literal){
            output++;
        }
    }

    return output;
}

console.log("================charCount()==============")
console.log(charCount("elephant", "e"))
console.log(charCount("aabbaaccddee", "a"))



// Problem Three
//
//1: Replaced toCharArray variable and used let in loop.


function isAnnagram( word ,  testcase) {

    // An annagram is where the words can be rearranged.
    // EX:  dare -> read
    //      read -> dear


    for(let i = 0; i< word.length; i++){

        if(    charCount(word, word[i]) == charCount(testcase, word[i])   ){
            continue;
        }else{
            return false;
        }
    }

    return true;


}

console.log("================isAnnagram()================")
console.log(isAnnagram("dare" , "read"))
console.log(isAnnagram("floor", "roflo"))
console.log(isAnnagram("baby", "yabe"))



//Problem Four
// NO
// 3: On the plus side, you do not have to know about objects like stringBuilder.
// On the negative side, you have to iterate through loop to reverse the string.
// Also have to swap .equals with ==.
function isPalindrome( word) {

    // aabbaa -> true
    // abcd -> false
    // race car -> false   NOTE in some definitions this is true.
    // This does method does not address sentence like input.

    drow= ""

    for(let i = word.length -1 ; i >= 0 ; i--){

        drow = drow + word[i]

    }
    if(word == drow){
        return true;
    }else{
        return false;
    }
}

console.log("============isPalindrome()=============")
console.log(isPalindrome("aabbaa"))
console.log(isPalindrome("alpha"))


//Problem Five
//NO
//1: No type declaration removed and swap out for each syntax.
// Also replaced {} with [] to avoid dictionary confusion.
function isVowel( literal) {

     vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I' , 'O', 'U'];

    for( a of vowels){

        if(literal == a){
            return true;
        }

    }

    return false;
}


console.log("======== isVowel() ============== ")
console.log(isVowel("b"))
console.log(isVowel("O"))


//Problem Seven
//No
//1: This fixed for loop. javascript doesnt need .length() but .length.

function removeVowels(Word) {

    // We use the isVowel method above and traverse the String.

    output = "";

    for( let i = 0 ; i< Word.length; i++){

        if( isVowel(Word.charAt(i) ) ) {
            continue;
        }
        output+= Word.charAt(i);

    }
    return output;
}


console.log("=============removeVowels()=============")
console.log(removeVowels("elephant"))
console.log(removeVowels("aabbccddeeff"))




//Problem Eight
//NO
//1: fixed for loop with let, modified the length() to length, and swapped {} with [] for array.

function characterStats(word) {

    // This program counts the number of vowels and characters.
    // Note, this does not account for ' ' and assumes no special characters like .,@#$%

     consonants = word.length;
     vowel = 0;


    for(let i = 0 ; i < word.length; i++){

        if(    isVowel(word.charAt(i) )   ){

            consonants--;
            vowel++;

        }


    }

    output= [consonants, vowel];
    return output;
}

console.log("==============characterStats()===============")
console.log("WORD: |  CONSONANTS, VOWEL |")
console.log("abc: | " + characterStats("abc")[0] + " , " +  characterStats("abc")[1] + " |");
console.log("elephant: | " + characterStats("elephant")[0] + " , " + characterStats("elephant")[1] + " |");


//Problem Nine:
//NO
//2: Javascript has Sets and has a constructor that takes in a String.
//Also eliminated toChararray and made sure loops had let.

function mostCharacter( word) {

    // aabbccddd -> d
    // aabbcc -> a     NOTICE we choose the from alphabetical in event of tie.
    // We also assume its a word without spaces or special characters.

    // The Java version used collections framework for a Set.
    // This problem investigates to what extent Javascript adopted similar features.

    charset = new Set(word);


     largest = 'z';
     record = 0;
     count = 0;
    for( let a of charset){

        count = 0;

        for( let b of word){
            if(a == b ){
                count++;
            }

        }


        // Test to see if the largest count.
        if(count > record){
            record = count;
            largest = a;
            continue;

        }

        //Special Condition to hit equal count. Choose by alphabetical order
        if (count == record) {
            if (a < largest) {
                largest = a;
            }
        }
    }

    return largest;
}



console.log("====================mostCharacters()=================")
console.log(mostCharacter("elephant"))
console.log(mostCharacter("aabbccddeeffggzzz"))





//Problem Ten:
//No
//1: Javascript Strings play nicely with the Java Strings methods.
//Other than removing types, toCharArray, and changing length(), it was straight forward
// I did not even check, so it worked.

function replaceVowelDash( word) {

    // elephant -> -lephant
    // bread -> br-ad

     output = "";

    for(let i = 0 ; i< word.length ; i++){
        if( isVowel(word[i] )){

            output = word.substring(0, i) + "-" + word.substring(i+1 , word.length);
            break;
        }
    }

    return output;
}

console.log("=========replaceVowelDash()==========")
console.log(replaceVowelDash("elephant"))
console.log(replaceVowelDash("bread"))
console.log(replaceVowelDash("bryzegh"))


//Problem Eleven
//No
//5: Java has this isDigit, isLetter, and isNumber for Unicode right out of the box.
// Such methods do not exist in Javascript.
//
// To make matters worse, Javascript lacks a sophisticated Regex Engine to address all of Unicode.
// Java has the edge here. The result is that the complexity of such a method gone up tremendously.
//
// As a result, the method will not have the same returns as the Java one and will
// be dependent on the user input. In particular:
//
//   1. We leave alphabet to be the latin alphabet.
//   2. We leave digits to 0-9.
//   3. We leave special symbols to be anything not of the above.
function countLiteral( word) {

    // [Alphabet, Digits, Special Symbols]
    // Apple Pie -> [8,0,1]


     output = {"alphabet": 0, "Digits": 0 , "Special Symbols" : 0};




    for(let i = 0 ; i< word.length; i++){

        // I was going to use unicode and special logic.
        // However, these static methods should do the trick
        // in classifying the codes.
        if(/[a-zA-z]/.test(word[i])){
            output["alphabet"]++;
        }
        else if(/[0-9]/.test(word[i])){

            output["Digits"]++;

        }
        else{
            output["Special Symbols"]++;
        }
    }

    return output;
}



console.log("==========countLiteral()====================")
console.log(countLiteral("123abc."))
console.log(countLiteral("$%&"))
console.log(countLiteral("Привет"))



//Problem Twelve
//NO
// 2: javascript has a split() like java and this is odd.
// NOTE however that split().toString() is ["hello" , "world"] -> "hello,world".
// Why is the comma included? Therefore, be careful.

function removeBlank( word) {

    // "Hello World -> HelloWorld

    //I could have traversed the string, but spliting then concatenating
    // felt more intuitive.

    arr = word.split(" ");
     output = "";

    for(let a of arr){
        output+= a;
    }

    return output;
}


console.log("==============removeBlank()============")
console.log(removeBlank("Hello World"))
console.log(removeBlank("There once was three blind mice."))



///Problem Thirteen
//NO
//1: Sets in Javascript are preserve insertion order.

function removeDuplicate(word) {

    // Hello World -> Helo Wrd
    // aabbccdd -> abcd

    output = "";

    //Javascript Sets are preserve insertion order.

    temp = new Set(word);

    // Build the string
    for(let a of temp){
        output+= a;
    }

    return output;
}

console.log("========removeDuplicate()===========")
console.log(removeDuplicate("Hello World"));
console.log(removeDuplicate("elephant"))
console.log(removeDuplicate("abcdefghhijkklmnop"))


///Problem Fourteen
//NO
// 2. java parses to int by default, so you have to use parseInt or new Number().
//

function stringSum( group) {

    // "1234 -> 1 + 2 + 3 + 4 -> 10


     output = 0;

    for(let a of group){

        output+= parseInt(a);


    }

    return output;
}



console.log("============stringSum()==============")
console.log(stringSum("12345"))
console.log(stringSum("101010"))




///Problem Fifteen
//No
//2: javascript lacks the streams java has. Therefore, there isn't a variety of methods
// you could use like print vs println. There is only console.log.
// This requires extra variables and read into the program itself.

function uniqueCharacters( word) {

    // Apple -> A p l e

    // We can use a HashSet and then calculate size.
    // However, we can do it by linear search.


    set = new Set(word)

    word =""
    for(let a of set){
        word = word + a + " " ;
    }

    console.log(word);

}



console.log("=============uniqueCharacters()================")
uniqueCharacters("Apple")
uniqueCharacters("elephant")







///Problem Sixteen
//NO
//5: Because Strings in javascript have syntax like arrays, it gives you the impression that
// the strings are in fact arrays.
// Note however, that they ARE NOT ARRAYS. Therefore, you cannot modify the string
// as if it were a character array.
//
// "ABCD".toCharArray() is equivalent to "ABCD".split('');
//
//
// This trick allows you to implement the algorithms like before.


function ascendingString( word) {

    // Apple Pie -> pplieePA


    arr = word.split('')

    for(let i = 0 ; i < arr.length; i++){
    }

     temp = ' ';
    for(let i = 0 ; i < arr.length ; i++){

        for(let j = i+1 ; j < arr.length ; j++){

            if( arr[j] > arr[i]){

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }

        }

    }

    output = "";
    for( let a of arr){
        output+= a;
    }
    return output;
}




console.log("===========ascendingString()=============")
console.log(ascendingString("Apple Pie"))
console.log(ascendingString("elephant"))



console.log( 'a' > 'b')



///Problem Seventeen
//NO
//1: No StringBuilder.

function descendingString( word) {

    //No stringbuilder here :^(

    drow = ""

    word = ascendingString(word)


    for(let i = word.length - 1 ; i>=0 ; i--){

        drow= drow+ word[i];

    }

    return drow;

}

console.log("==========descendingString()============")
console.log(descendingString("Apple Pie"))
console.log(descendingString("elephant"))




/*

Conclusion:

There are a few takeaways here:

1. Javascript's lack of type system makes code easier to write.
However, there are instances where this is annoying because auto conversion
does not map directly to Java's auto conversion. This makes things more verbose since you need specific functions.

2. Javascript does not map directly into Java. However, the changes made were often simple.
This is interesting because simple packages in Java could be rewritten in javascript with minimal effort.

3. Javascript was never meant to handle advanced string manipulation like Java. While
there are things like regex, it would be better to have a list of methods that are
guaranteed to work.

4. Java made an emphasis to separate this idea that a string is a character array like
in C/C++. Javascript does this too, but they allow you to access positions of a string
using array notation like "abc"[1] ->b. This is nice because code doesnt have to build
arrays all the time. However, as soon as you get in any sort of algorithm, you have
the potential to make mistakes because you might think the word is a character array.
Therefore, you need to build one, and there isnt a simeple toCharArray() available
like java.

 */