class Solution {
    fun solution(s: String): String {
        val arr: List<String> = s.split(" ")
        val result: MutableList<String> = mutableListOf()
        
        for (word: String in arr) {
            var jaden: String = ""
            if (word.length > 0) {
                jaden += word.substring(0, 1).uppercase()
                jaden += word.substring(1, word.length).lowercase()
            }
            result.add(jaden)
        }
        
        return result.joinToString(" ")
    }
}