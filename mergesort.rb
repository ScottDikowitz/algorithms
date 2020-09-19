# class Array
#   def merge_sort
#     return self if count < 2
#
#     middle = self.length / 2
#     left, right = self.take(middle), self.drop(middle)
#     def merge(left, right)
#       result = []
#       until left.empty? || right.empty?
#         left[0] > right[0] ? result.push(right.shift) : result.push(left.shift)
#       end
#       return result + left + right
#     end
#
#     return merge(left.merge_sort, right.merge_sort)
#   end
# end

class Array
  def subsets
    return [[]] if self.empty?

    subsets_rec = self.take(self.length - 1).subsets
    subsets_rec + subsets_rec.map { |item| item + [self[-1]] }
  end

  def bsearch(target)
    return nil if self.empty?
    # return 0 if self.length == 1 && self[0] == target

    middle_idx = self.length / 2
    middle = self[middle_idx]

    comparator = target <=> middle
    if comparator == -1
      self.take(middle_idx).bsearch(target)
    elsif comparator == 1
      search = self.drop(middle_idx + 1).bsearch(target)
      return nil if search.nil?
      middle_idx + search + 1
    else
      middle_idx
    end
  end
end



def fibs_iter(n)
  res = [1, 2]
  (1...n).to_a.each do |num|
    res << res[-1] + res[-2]
  end
  res
end

def fibs_rec(n)
  if n <= 2
    [0, 1].take(n)
  else
    arr = fibs_rec(n - 1)
    arr << arr[-2] + arr[-1]
  end

end

def sum_rec(nums)
    return 0 if nums.empty?
    nums.pop + sum_rec(nums)
end

class Array
  def deep_dup

    arr = []
    self.each do |el|
      if el.is_a? Array
        arr << el.deep_dup
      else
        arr << el
      end
    end
    arr
  end
end
