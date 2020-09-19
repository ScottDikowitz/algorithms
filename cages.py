def solution(x, y):
    x_upper = x+y-1
    sum_x_upper = 1
    i = 1
    while i < x_upper:
        i+=1
        sum_x_upper+=i

    return str(sum_x_upper-(x_upper-x))

print(solution(5,10))