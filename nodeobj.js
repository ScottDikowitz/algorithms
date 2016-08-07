'use strict';

class NodeObj {
    constructor(options){
        this.parent = options.parent;
        this.children = options.children;
        this.value = options.value;
    }

    setChildren(children){
        this.children = children;
    }
}
var parent;
(function generateNodes(){
    parent = new NodeObj({parent: null, children: [], value: 15});
    var child1 = new NodeObj({parent: parent, children: [], value: 22});
    var child2 = new NodeObj({parent: parent, children: [], value: 5});
    var child3 = new NodeObj({parent: parent, children: [], value: 16});

    parent.setChildren([child1, child2, child3]);

    var child11 = new NodeObj({parent: child1, children: [], value: 18});
    var child12 = new NodeObj({parent: child1, children: [], value: 1});
    var child13 = new NodeObj({parent: child1, children: [], value: 4});

    child1.setChildren([child11, child12, child13]);

    var child21 = new NodeObj({parent: child2, children: [], value: 55});
    var child22 = new NodeObj({parent: child2, children: [], value: 64});
    var child23 = new NodeObj({parent: child2, children: [], value: 75});

    child2.setChildren([child21, child22, child23]);

    var child31 = new NodeObj({parent: child3, children: [], value: 26});
    var child32 = new NodeObj({parent: child3, children: [], value: 11});
    var child33 = new NodeObj({parent: child3, children: [], value: 19});

    child3.setChildren([child31, child32, child33]);

})();

module.exports = {NodeObj: NodeObj, Root: parent};
