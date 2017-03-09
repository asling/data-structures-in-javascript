function binSearch(arr, data) {
	var upperBound = arr.length-1;
	var lowerBound = 0;
	while (lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		console.log("mid:"+mid);
		console.log("arr[mid]:"+arr[mid]);
		if (arr[mid] < data) {
			lowerBound = mid + 1;
		}else if (arr[mid] > data) {
			upperBound = mid - 1;
		}else {
			return mid;
		}
	}
	return -1;
}
exports.binSearch = binSearch;