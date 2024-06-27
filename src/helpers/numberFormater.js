export const numFormatter = (unformattedNum) => {
    // Create a new instance of Intl.NumberFormat to format the number
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    // Use the formatter to format the number
    return formatter.format(unformattedNum);
}
