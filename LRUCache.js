function ListNode(val, key) {
		this.val = val;
		this.next = null;
		this.prev = null;
		this.key = key;
}


function LRUCache(capacity) {
		this.capacity = capacity;
		this.cache = new Map();

		this.head = new ListNode(null);
		this.tail = new ListNode(null);
		this.head.next = this.tail;
		this.tail.prev = this.head;
}

LRUCache.prototype.stringify = function() {
		let node = this.head;
		let str = '';
		while (node) {
				str += `[${node.val},${node.key}], `;
				node = node.next;
		}
		return str;
}

LRUCache.prototype.get = function(key) {
		const node = this.cache.get(key);
		if (node) {
				this.addToFront(node);
				return node.val;
		}
		return -1;
}

LRUCache.prototype.addToFront = function(node) {

		// reassign current ref
		if (node.prev) {
				node.prev.next = node.next;
		}
		if (node.next) {
				node.next.prev = node.prev;
		}

		const prevFirst = this.head.next;
		this.head.next = node;
		node.prev = this.head;
		node.next = prevFirst;

		prevFirst.prev = node;
}

LRUCache.prototype.put = function(key,value) {
		let node = this.cache.get(key);
		if (node) {
				node.val = value;
				this.addToFront(node);
		} else {
				node = new ListNode(value, key);
				this.cache.set(key, node);
				this.addToFront(node);

				if (this.cache.size > this.capacity) {
						// evict last node
						const nextLast = this.tail.prev.prev;
						const toRemove = nextLast.next;
						nextLast.next = this.tail;
						this.tail.prev = nextLast;
						this.cache.delete(toRemove.key);
				}
		}
}

module.exports = LRUCache;

const lru = new LRUCache(3);
lru.put(1,2);
console.log(lru.stringify());
lru.get(1);
console.log(lru.stringify());
lru.put(3,5);
console.log(lru.stringify());
