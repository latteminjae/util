const LinkedList = (() => {
	function LinkedList() {
		this.head = null;
		this.length = 0;
		// TODO 특정 index를 받아서 추가 삭제할때 이걸 활용하도록.
		this.currentNumber = 0;
	}
	function Node(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}

	// arrow function 은 this, arugments, new.target, super를 바인딩 하지 않아
	// 사용하지 않았다.

	LinkedList.prototype.push = function (data) {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
		} else {
			let cur = this.head;
			while (cur.next) {
				cur = cur.next;
			}
			node.prev = cur;
			cur.next = node;
		}
		this.length++;
	};

	LinkedList.prototype.pop = function () {
		let cur = this.head;
		while (cur.next) {
			cur = cur.next;
		}
		cur.prev.next = null;
		this.length--;
	};

	LinkedList.prototype.shift = function () {
		this.head = this.head.next;
	};

	LinkedList.prototype.unshift = function (data) {
		let cur = this.head;
		const node = new Node(data);
		node.next = cur;
		this.head = node;
	};

    // 
	LinkedList.prototype.index = function (index) {
		let ind = 0;
		let cur = this.head;
		while (ind < index) {
			cur = cur.next;
			ind++;
		}
		return cur.data;
	};

	LinkedList.prototype.forEach = function (func) {
		for (let i = 0; i < this.length; i++) {
			func(this.index(i), i, this.toArray());
		}
	};

	// data들을 array에 푸시해서 반환
	LinkedList.prototype.toArray = function () {
		const arr = [];
		let cur = this.head;
		while (cur) {
			arr.push(cur.data);
			cur = cur.next;
		}
		return arr;
	};

	return LinkedList;
})();

const list = new LinkedList();

list.push(1)
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

list.forEach((i, v) => {
    console.log(`${i} ${v}`)
})

console.log(list.toArray());

