from math import floor

def maxparts(s):
    length = 1
    while length <= (len(s)//2):
        i = length
        if len(s)%i == 0:
            good = True
            while i < len(s):
                j = 0
                while j < length:
                    if s[j] != s[i+j]:
                        good = False
                        break
                    j+=1
                if good == False:
                    break
                i+=length
            if good:
                return len(s)//length
        length+=1
    return 1


print(maxparts('abcabcabcabc'))

# function maxParts (str) {
#     let len = 1;
#     while (len < Math.floor((str.length / 2)) + 1) {
#         const p = str.substring(0, len);
#         let good = true;
#         for(let i = len; i < str.length; i+=len) {
#             for(let j = 0; j < len; j++) {
#                 if (p.charAt(j) != str.charAt(i+j)) {
#                     good = false; break;
#                 }
#             }
#             if (good == false) break;
#         }
#         if (good) return str.length / len;
#         len++;
#     }
#     return -1;
# }

# console.log(maxParts("abccbaabccba"))