// unique chars - no new data structures allowed
var uniq = function(str){
    var seen = [];
    var strArr = str.split('');

    var contains = function(char){
        return seen.indexOf(char) !== -1;
    };
    for (var i = 0; i < strArr.length; i++){
        var char = strArr[i];
        if (contains(char)){
            return false;
        }
        seen.push(char);
    }
    return true;
};

String.prototype.compress = function(){
    var store = [];
    var i = 0;
    while (i < this.length){
        var count = 0;
        var curChar = this[i];
        while (curChar === this[i]){
            count += 1;
            i += 1;
        }
        store.push([curChar, count]);

    }
    return store;
};

console.log('jjfidoeifffheeeugguupp'.compress());

// check if one string is a permutation of the other
// var checkPermutations = function(str1, str2){
//
// };
Array.prototype.subsets = function(){
    if (this.length === 0)
        return [[]];

    var element = this[0];
    var lastEl = this.slice(-1)[0];
    var rec = this.slice(0, -1).subsets();

    return rec.concat(rec.map(function(el){
        return el.concat([lastEl]);
    }));

};

String.prototype.permutations = function(){
    var permutations = [];
    if (this.length === 0){
        permutations.push('');
        return permutations;
    }

    var first = this[0];
    var remainder = this.slice(1);
    var perms = remainder.permutations();
    perms.forEach(function(perm){
        for (var j = 0; j <= perm.length; j++){
            var copy = perm.substr(0,j) + first + perm.substr(j);
            permutations.push(copy);
        }
    });

    return permutations;
};
