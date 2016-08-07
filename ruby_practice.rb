def bsearch(arr, target)
    return nil if arr.empty?

    mid = arr.length / 2

    if arr[mid] == target
        return mid
    elsif target < arr[mid]
        return bsearch(arr.take(mid), target)
    else
        rec = bsearch(arr.drop(mid + 1), target)
        if rec.nil?
            return nil
        end
        return mid + rec + 1
    end
end

p bsearch([1, 9, 14, 18, 44, 62, 88, 150], 18)
