(function ($) {
	$(function () {
		printPossibleSums = (function () {
			var timeOut = false;
			return function (event) {
				if (!timeOut) {
					timeOut = true;
					setTimeout(() => {
						timeOut = false;
						n = parseInt(event.target.value, 10);
						let temp = n;
						while (--temp > 0) {
							let x = n - temp;
							let diff = x;
							x = (temp > x) ? x : temp;
							while (x > 0) {
								let multiple = Math.floor(diff / x);
								let reminder = diff % x;
								ar = []; ar.push(temp)
								while (--multiple > -1) ar.push(x);
								if (reminder > 0) ar.push(reminder);
								console.log(ar);
								//console.log(temp,`${multiple} times ${x}`,(reminder>0?reminder:''));
								x--;
							}
						}
					}, 1000);
				}


			}
		})(event);

		quickSort = {};

		quickSort.beginSort = function () {
			//var a = [3, 2, 1, 4, 5, 7, 34, 23, 67, 33, 22, 87, 1];
			var a = "3422".split('');
			console.log(a);
			this.quicksort(a, 0, a.length - 1);
			console.log(a);
		};

		quickSort.quicksort = function (a, start, end) {
			if (start < end) {
				var partitionIndex = this.partition(a, start, end);
				console.log(a);
				this.quicksort(a, start, partitionIndex - 1);
				this.quicksort(a, partitionIndex + 1, end);
			}
			return;
		};
		quickSort.partition = function (a, start, end) {
			var pivot = a[end];
			var pIndex = start;
			for (i = start; i <= end - 1; i++) {
				if (a[i] <= pivot) {
					//swap a[i],a[pIndex]
					//	console.log("dfdsd",a);
					this.swap(a, i, pIndex);
					pIndex++;
				}
				//	console.log("dfd",a);
			}
			this.swap(a, pIndex, end);
			//console.log(a);
			return pIndex;
		};
		quickSort.swap = function (a, i, j) {
			var temp = a[i];
			a[i] = a[j];
			a[j] = temp;
		};
		insertionSort = {};
		insertionSort.beginSort = function () {
			var a = [3, 2, 1, 4, 5, 7, 34, 23, 67, 33, 22, 87, 1];
			console.log(a);
			this.insertionSort(a, a.length);
			console.log(a);
		};
		insertionSort.insertionSort = function (a, size) {
			for (var i = 0; i < size - 1; i++) {
				var min = i;
				for (j = i + 1; j < size; j++) {
					if (a[min] > a[j]) {
						min = j;
					}
				}
				var temp = a[i];
				a[i] = a[min];
				a[min] = temp;
			}
		};

		mergeSort = {};
		mergeSort.beginSort = function () {
			var a = [56, 34, 51, 34, 37, 67, 90, 12];
			mergeSort.mergeSort(a, a.length);
			console.log(a);
		}
		mergeSort.mergeSort = function (a, size) {
			if (size > 1) {
				var aL = a.slice(0, Math.floor(size / 2));
				var aR = a.slice(Math.floor((size) / 2));
				//console.log(a);
				this.mergeSort(aL, aL.length);
				this.mergeSort(aR, aR.length);
				this.merge(aL, aR, a);
				console.log('array a:' + a + ' array aL:' + aL + ' array aR:' + aR);
				//console.log(a);
			};
		}
		mergeSort.merge = function (aL, aR, a) {
			var i = 0;
			var j = 0;
			var k = 0;
			while (i < aL.length && j < aR.length) {
				var unPickedLeft = aL[i];
				var unPickedRight = aR[j];
				if (unPickedLeft <= unPickedRight) {
					a[k] = unPickedLeft;
					i++;
				} else {
					a[k] = unPickedRight;
					j++;
				}
				k++;
			}
			if (i == aL.length) {
				while (j < aR.length) {
					a[k] = aR[j];
					j++; k++;
				}
			} else if (j == aR.length) {
				while (i < aL.length) {
					a[k] = aL[i];
					i++; k++;
				}
			}
		};


	}); // end of document ready


})(jQuery); // end of jQuery name space