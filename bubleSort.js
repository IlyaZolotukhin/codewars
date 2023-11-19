function solution(nums) {
    if (nums == null) {
        console.log([])
    } else {
        let arr
        for (let j = 0; j < nums.length - 1; j++) {
            let isSorted = true
            for (let i = 0; i < nums.length - 1 - j; i++) {
                if (nums[i] > nums[i + 1]) {
                    isSorted = false
                     arr = [nums[i], nums[i + 1]];
                   [nums[i + 1], nums[i]] = arr
                }
            }
            if (isSorted) break
        }
    }
    console.log(nums)
}


solution([1, 2, 3, 10, 5])