function sortArray(nums, string) {
    return string === "asc" ? nums.sort((a, b) => a -b) : nums.sort((a, b) => b - a);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));