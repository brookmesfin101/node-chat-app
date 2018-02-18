const expect = require('expect');
const {isRealString} = require('./validation');

// import is Real string

describe("isRealString", () => {
    it("should reject non-string values", () => {        
        expect(isRealString(1)).toBe(false);
    });
    it("should reject string with only spaces", () => {
        expect(isRealString("   ")).toBe(false);
    });
    it("should allow strings with non-space characters", () => {
        expect(isRealString("abc")).toBe(true);
    });
});

// isRealString
    // should reject non-string values
    // shoudl reject string with only spaces
    // shoudl alow strings with non-sapce characters