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


export const idEncryptor = (id) => {
    if (typeof id !== 'string' && typeof id !== 'number') {
        throw new Error('ID must be a string or number');
    }

    const base64Encoded = btoa(String(id));
    return base64Encoded;
};

export const idDecryptor = (encodedId) => {
    const decoded = atob(encodedId);
    // You may want to parse the decoded value based on your data type expectation
    return decoded;
};

