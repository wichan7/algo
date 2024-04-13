package main

import "fmt"

func solution(n int) int {
    if (n <= 0) {
			return 0
		}
  
    m := n % 10
		
    return m + solution(n / 10)
}

func main() {
	fmt.Print(solution(12345))
}