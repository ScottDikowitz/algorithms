"""
You have L, a list containing some digits (0 to 9). Write a function solution(L) which finds the largest number
that can be made from some or all of these digits and is divisible by 3. If it is not possible to make such a number,
return 0 as the solution. L will contain anywhere from 1 to 9 digits.  The same digit may appear multiple times in
the list, but each element in the list may only be used once.
"""

def greatest_div_of_three(l):
    li = l
    def get_number(A):
        if len(A) == 0:
            return 0
        return int(''.join([str(i) for i in A]))
    li.sort(lambda a,b: b-a)
    suml = sum(li)
    if suml%3==0:
        return get_number(li)
    # find one deletion
    r = len(li)-1
    while r >= 0:
        if (suml-li[r])%3==0:
            new_list = []
            for i, item in enumerate(li):
                if i != r:
                    new_list.append(item)
            return get_number(new_list)
        r-=1
    # find two deletions
    mods = {
        0: [],
        1: [],
        2: [],
    }
    r = len(li)-1
    while r >= 0:
        if len(mods[li[r]%3]) < 2:
            mods[li[r]%3].append(r)
        r-=1

    right = len(li)-1
    while right >= 0:
        sm = (suml-li[right])%3
        other = 2 if sm == 2 else 1
        if len(mods[other]) > 0:
            if mods[other][0] != right:
                new_list = []
                for i, item in enumerate(li):
                    if i not in [right, mods[other][0]]:
                        new_list.append(item)
                return get_number(new_list)
            elif len(mods[other]) > 1:
                # if it has a second element we can use it
                new_list = []
                for i, item in enumerate(li):
                    if i not in [right, mods[other][1]]:
                        new_list.append(item)
                return get_number(new_list)
        right-=1
    return 0


print(greatest_div_of_three([3, 1, 4, 1])) # 4311
# sum = 9
print(greatest_div_of_three([1,3,3,3,4])) # 94311
print(greatest_div_of_three([3, 1, 4, 1, 5, 9, 2]))
print(greatest_div_of_three([1,1,1,2]))
print(greatest_div_of_three([2,2]))
#suml=16
#mod=1

# 954311 (sorted)
# is above % 3? (if sum of all digits % 3 == 0)
# if not: search r to l and try to make one subtraction that would put sum % 3 == 0
# 9543
# print(greatest_div_of_three([3, 1, 4, 1, 5, 9, 5, 6, 9]))
# print(greatest_div_of_three([4,4,1,1,1,3]))
# 443111
# 
# 14
# mod = 2 .666
# mod 2 needed to negate
# 

# 996554311
# 3, 1, 4, 1, 5, 9, 5, 6, 9
# sum = 43