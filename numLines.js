// Given a long string (words & spaces) and a document width (# of characters), return the number of lines the document will have. We can't split words, so that means a word goes to the new line if the entire word cannot fit in the current line. Basically, this is like when Google Doc puts words on the next line as opposed to truncating the word at the end of the line. For simplicity, let's say there is no word that is longer than the width of document.
// Follow up: Let's say we want to split the document into two columns. You are given two sets of text. One is for the left column while the other is for the right column (like in a newspaper). You want to find the column position (between 1 and document width) such that the final number of total lines from both sides of the column are as close to each other as possible. Example, if you move the column to the left, number of lines in left column increases because it's narrower while number of lines in right column decreases because it's wider.

function numLines(words, width) {
    const swords = words.split(' ');
    let bufWidth = 0;
    let totalLines = 0;
    for(let i = 0; i < swords.length; i++) {
        const w = swords[i];
        if (bufWidth + w.length > width) {
            bufWidth = w.length;
            totalLines++;
        } else {
            bufWidth += w.length;
        }
    }
    return totalLines;
}

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
console.log(numLines(LOREM, 200))