# previous permutation

def get_prev_perm(L):
    r = len(L) - 2
    while r >= 0:
        if L[r] > L[r+1]:
            j = r+1
            max_ = None
            # find maximum value less than L[r] to the right of r; swap
            while j < len(L):
                if L[j] < L[r] and (max_ == None or L[j] > L[max_]):
                    max_ = j
                j+=1
            tmp = L[r]
            L[r] = L[max_]
            L[max_] = tmp
        
            # reverse k - L.length-1 in-placee
            k = r+1
            while k < (((len(L)) + r+1)//2)+1:
                tmp = L[k]
                L[k] = L[(len(L)-1) - (k - (r+1))]
                L[(len(L)-1) - (k - (r+1))] = tmp
                k+=1
            return L
        r-=1
    return None


# print(get_prev_perm([3, 1, 4, 1]))
print(get_prev_perm([3, 1, 4, 1, 5, 9]))

"""
4,3,1,1
4,1,3,1
4,1,1,3
3,4,1,1

4,3,2,1
4,3,1,2
4,2,3,1
4,1,2,3
# ...
3,4,2,1
3,4,1,2
3,2,4,1
3,2,1,4
"""