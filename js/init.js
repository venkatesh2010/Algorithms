(function ($) {
	$(function () {
		quickSort = {};

		quickSort.beginSort = function () {
			var a = [3, 2, 1, 4, 5, 7, 34, 23, 67, 33, 22, 87, 1];
			console.log(a);
			this.quicksort(a, 0, a.length - 1);
			console.log(a);
		};

		quickSort.quicksort = function (a, start, end) {
			if (start < end) {
				var partitionIndex = this.partition(a, start, end);
				//	console.log(a);
				this.quicksort(a, start, partitionIndex-1);
				this.quicksort(a, partitionIndex + 1, end );
			}
			return;
		};
		quickSort.partition = function (a, start, end) {
			var pivot = a[end];
			var pIndex = start;
			for (i = start; i < end - 1; i++) {
				if (a[i] <= pivot) {
					//swap a[i],a[pIndex]
					 this.swap(a,i,pIndex);
					 pIndex++;
				}
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


	}); // end of document ready
})(jQuery); // end of jQuery name space