class Stack {
	private arr: any[];
	private size: number;

	constructor(size: number) {
		this.arr = [];
		this.size = size;
	}

	push(data: any) {
		if (this.arr.length === this.size) {
			console.log('stack overflow');
			return;
		}
		const nextArr = this.arr;
		nextArr.push(data);
		this.arr = nextArr;
	}

	pop() {
		if (!this.arr.length) {
			console.log('stack underflow');
			return;
		}
		const val = this.arr[this.arr.length - 1];
		const nextArr = this.arr;
		nextArr.pop();
		this.arr = nextArr;

		return val;
	}

	show() {
		console.log('----- 최하단 stack');
		for (let i = 0; i < this.arr.length; i++) {
			console.log(this.arr[i]);
		}
		console.log('----- 최상단 stack');
		return this.arr;
	}

	length() {
		return this.arr.length;
	}
}

const a = new Stack(5);

console.log(a);
a.push(213);
a.push(213);
a.push(213);
a.push(215);
console.log(a);
a.pop();
console.log(a);
a.push(234);
a.push('sdf');
console.log(a);
a.show();
console.log(a.length())