export const numFormatter = (unformattedNum) => {
    // Check if the number is less than a Lakh
    if (unformattedNum < 100000) {
        // Check if the number is less than 1000, return as is
        if (unformattedNum < 1000) {
            return unformattedNum.toString();
        } else {
            // Format as Thousands
            return (unformattedNum / 1000).toFixed(1).replace(/\.0$/, "") + " Thousand";
        }
    }

    // Define number suffixes for Lakh and Crore
    const suffixes = [
        { value: 1, symbol: "" },
        { value: 1e5, symbol: " Lakh" },
        { value: 1e7, symbol: " Crore" }
    ];

    // Find the appropriate suffix
    const suffix = suffixes.slice().reverse().find(suffix => unformattedNum >= suffix.value);

    // Format the number with the appropriate suffix
    const formattedNum = (unformattedNum / suffix.value).toFixed(1).replace(/\.0$/, "");

    return formattedNum + suffix.symbol;
};

// Example usage
console.log(numFormatter(500));       // Output: "500"
console.log(numFormatter(2500));      // Output: "2.5 Thousand"
console.log(numFormatter(100000));    // Output: "1 Lakh"
console.log(numFormatter(1500000));   // Output: "15 Lakh"
console.log(numFormatter(35000000));  // Output: "3.5 Crore"
