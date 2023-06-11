    // this function works    
    
    function isPalindrome(str) {
        // Remove spaces and punctuation, and convert to lowercase
        str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        // Compare characters from the beginning and end of the string
        let i = 0;
        let j = str.length - 1;

        while (i < j) {
            if (str[i] !== str[j]) {
              return false; // Characters don't match, not a palindrome
            }
            i++;
            j--;
        }
        return true;
    }

    console.log(isPalindrome('Racecar')) // output: true 
    console.log(isPalindrome('hello')) // output: false 
