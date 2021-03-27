
const getRandomRow = (numberOfRows) => {
    const result = [];
    
    while(numberOfRows > 0) {
        const oneRow = {};
        const sixNumbers = new Set();

        while(sixNumbers.size !== 6) {
            sixNumbers.add(Math.floor(Math.random() * 37) + 1);
        }
    
        const sixNumberArray = [...sixNumbers];
        sixNumberArray.sort((a, b) => a - b);
    
        oneRow.result = sixNumberArray;
        oneRow.extraNumber = Math.floor(Math.random() * 7) + 1;
    
        result.push(oneRow);
        numberOfRows = numberOfRows - 1;
    }

    return result;
    }

export default getRandomRow;


