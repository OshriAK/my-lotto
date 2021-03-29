
const getRandomRow = (numberOfRows, extraNumber, numbers) => {
    const result = [];
    
    while(numberOfRows > 0) {
        const oneRow = {};
        const sixNumbers = new Set();

        while(sixNumbers.size !== 6) {
            sixNumbers.add(Math.floor(Math.random() * numbers) + 1);
        }
    
        const sixNumberArray = [...sixNumbers];
        sixNumberArray.sort((a, b) => a - b);
    
        oneRow.result = sixNumberArray;
        oneRow.extraNumber = Math.floor(Math.random() * extraNumber) + 1;
    
        result.push(oneRow);
        numberOfRows = numberOfRows - 1;
    }

    return result;
    }

export default getRandomRow;


