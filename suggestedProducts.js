var suggestedProducts = function(products, searchWord) {
    let _limit = 0;
    class Trie {
        constructor () {
            this.isWord = false;
            this.order = [];
            this.branches = {};
            this.add = this.add.bind(this);
            this.getAll = this.getAll.bind(this);
            this._getAll = this._getAll.bind(this);

        }
        add (w, i=0) {
            if (i === w.length) {
                this.isWord = true;
                return;
            }
            const char = w.charAt(i);
            if (!this.branches[char]) {
                this.branches[char] = new Trie();
                if (this.order.length === 0) {
                    this.order.push(char);
                } else {
                    let inserted = false;
                    for(let j = 0; j < this.order.length; j++) {
                        if (char.localeCompare(this.order[j]) < 0) {
                            this.order.splice(j, 0, char);
                            inserted = true;
                            break;
                        }
                    }
                    if (!inserted) this.order.push(char);
                }
            }
            return this.branches[char].add(w, i+1)

        }
        getOrder () {
            return this.order;
        }
        _getAll (str='') {
            if (_limit === 0) return [];
            const arr = [];
            if (this.isWord) {
                _limit-=1;
                arr.push(str);
            }
            this.order.forEach(c => {
                arr.push(...this.branches[c]._getAll(str + c))
            })
            return arr;
        }
        getAll (limit=Infinity, prefix='') {
            _limit = limit;
            return this._getAll(prefix);
        }
    }
    const dictionary = new Trie();
    products.forEach(p => dictionary.add(p));
    let node = dictionary;
    const suggestions = [];
    let prefix = '';
    for(let i = 0; i < searchWord.length; i++) {
        if (node) {
            node = node.branches[searchWord.charAt(i)];
            prefix += searchWord.charAt(i);
        }
        if (!node) {
            suggestions.push([])
        } else {
            suggestions.push(node.getAll(3, prefix));
        }
    }
    return suggestions;
};


console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse"))
