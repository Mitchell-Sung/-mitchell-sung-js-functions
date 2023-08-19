import trimAndGetStringLength from '../src/libs/validations/trimAndGetStringLength';

describe('trimAndGetStringLength', () => {
	it('should throw an error if value is not a string', () => {
		expect(() => trimAndGetStringLength(true)).toThrow();
		expect(() => trimAndGetStringLength(1234)).toThrow();
		expect(() => trimAndGetStringLength({})).toThrow();
		expect(() => trimAndGetStringLength([])).toThrow();
		expect(() => trimAndGetStringLength(null)).toThrow();
		expect(() => trimAndGetStringLength(undefined)).toThrow();
	});

	it('trims strings with leading and/or trailing whitespace', () => {
		const input = '  Hello Mitchell  ';
		const result = trimAndGetStringLength(input);
		expect(result).toEqual({ trimmedValue: 'Hello Mitchell', valueLen: 14 });
	});

	it('returns correct values for strings without any whitespace', () => {
		const input = 'Hello Mitchell';
		const result = trimAndGetStringLength(input);
		expect(result).toEqual({ trimmedValue: 'Hello Mitchell', valueLen: 14 });
	});

	it('returns correct values for strings that are just whiteSpace', () => {
		const input = '    ';
		const result = trimAndGetStringLength(input);
		expect(result).toEqual({ trimmedValue: '', valueLen: 0 });
	});

	it('returns correct values for empty strings', () => {
		const input = '';
		const result = trimAndGetStringLength(input);
		expect(result).toEqual({ trimmedValue: '', valueLen: 0 });
	});
});
