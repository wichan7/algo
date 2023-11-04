class Solution {
    fun solution(s: String): String {
        val arr = s.split(" ").map{ it.toInt() }
        var min = arr[0]
        var max = arr[0]
        
        for (n in arr) {
            if (n < min) min = n
            if (n > max) max = n
        }

        return "$min $max";
    }
}