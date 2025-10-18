//write your code here

const countLetterFrequency = (sentence) => {
    let obj = {}


    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            continue
            //guard clause for space so it doesn't run the code below and goes to next character 
        }

        if (sentence[i] in obj) {
            obj[sentence[i]]++
            //console.log(obj)
            //check for repeat of key then add one to value if true

        } else {
            obj[sentence[i]] = 1

        }
    }
    return obj

}
console.log(countLetterFrequency('cat and the hat'))