import { expect, describe, it } from 'vitest'
import { countVowels, factorial, findCommonObjects, findLongestWord, isSubset } from './functions'

describe("factorial", () => {
    it("Positive Numbers", () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(3)).toBe(6);
    })

    it("Zero", () => {
        expect(factorial(0)).toBe(1)
    })

    it("Negative Numbers", () => {
        expect(factorial(-3)).toThrowError("Factorial is not defined for negative numbers");
    })
})

describe("Find Longest Word", () => {
    it("Normal sentence", () => {
        expect(findLongestWord("The quick brown fox jumps over the lazy dog")).toBe("quick");
    })

    it("Sentence with only one word", () => {
        expect(findLongestWord("Hello")).toBe("Hello");
    })

    it("Empty sentence", () => {
        expect(findLongestWord("")).toBe("");
    })

    it("Sentence with extra spaces", () => {
        expect(findLongestWord("A quick test ")).toBe("quick");
    })
})

describe("Count Vowels", () => {
    it("Normal text", () => {
        expect(countVowels("Hello World")).toBe(3)
    })

    it("Only consonants", () => {
        expect(countVowels("bcdfg")).toBe(0)
    })

    it("Upper and lowercase letters", () => {
        expect(countVowels("AeIoU")).toBe(5)
    })

    it("Empty string", () => {
        expect(countVowels("")).toBe(0)
    })
})

describe("Is Subset", () => {
    let obj1 = {a: 1};
    let obj2 = {a: 1, b: 2};
    let obj3 = {c: 3};

    it("Is subset", () => {
        expect(isSubset(obj1, obj2)).toBe(true)
    })

    it("Isn't subset", () => {
        expect(isSubset(obj3, obj2)).toBe(false)
    })
})

describe("Find Common Objects", () => {
    let arr1 = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]
    let arr2 = [{id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}]


    it("There are common objects", () => {
        expect(findCommonObjects(arr1, arr2)).toEqual([{id: 2, name: 'Bob'}])
    })
    
    it("There are no common objects", () => {
        expect(findCommonObjects([{id: 1, name: 'Alice'}], [{id: 3, name: 'Charlie'}])).toEqual([])
    })

    it("Empty arrays", () => {
        expect(findCommonObjects([], [])).toEqual([])
    })

    it("One array is empty", () => {
        expect(findCommonObjects([{id: 1, name: 'Alice'}], [])).toEqual([])
    })
})