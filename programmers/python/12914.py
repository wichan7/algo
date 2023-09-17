def solution(n):
    fibo = [1, 2]
    for i in range(2, n):
        fibo.append( (fibo[i-2] + fibo[i-1]) % 1234567 )
        
    return fibo[n - 1]