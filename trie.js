function Trie (val) {
    this.val = val;
    this.children = new Map();
}

Trie.prototype.insert = function (word) {
    if (!word) return;
    if (!this.children.has(word.charAt(0))) {
        this.children.set(word.charAt(0), new Trie(word));
    }
    const child = this.children.get(word.charAt(0));
    child.insert(word.substring(1));
}

Trie.prototype.find = function (word, curSearch='') {
    if (!word) return 'found';
    const char = word.charAt(0);
    if (this.children.has(char)) {
        const child = this.children.get(word.charAt(0));
        return child.find(word.substring(1), curSearch+char);
    } else {
        if (this.children.size) {
            const otherChoices = [];
            this.children.forEach(child => {
                otherChoices.push(curSearch + child.val);
            });
            return `Not found. Did you mean ${otherChoices.join(', ')}?`;
        } else {
            return 'Not found.'
        }
    }
}

class TrieParent {
    constructor () {
        this.root = new Trie();
    }

    insert (word) {
        return this.root.insert(word);
    }

    find (word) {
        return this.root.find(word, '');
    }

    getRoot () {
        return this.root;
    }
}

module.exports = TrieParent;
