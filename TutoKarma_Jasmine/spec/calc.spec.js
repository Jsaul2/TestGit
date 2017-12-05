describe('Test of function calculatrice', function() {
        it('is a function', function() {
                expect(typeof calculatrice).toBe('function');
        });
});

describe('Test function params', function() {

        it('should have 3 parameters', function() {
                expect(calculatrice('*')).toBe(null);
                expect(calculatrice('*', 2)).toBe(null);
                expect(calculatrice('*', 2, 3)).not.toBe(null);
        });

        describe('Check signe', function() {
                it('should allow all 4 operations', function() {
                        expect(calculatrice('*', 2, 3)).not.toBe(null);
                        expect(calculatrice('+', 2, 3)).not.toBe(null);
                        expect(calculatrice('-', 2, 3)).not.toBe(null);
                        expect(calculatrice('/', 2, 3)).not.toBe(null);
                });

                it('should handle wrong values', function() {
                        expect(calculatrice('', 2, 3)).toBe(null);
                        expect(calculatrice('p', 2, 3)).toBe(null);
                        expect(calculatrice(2, 2, 3)).toBe(null);
                        expect(calculatrice(null, 2, 3)).toBe(null);
                });
        });

        describe('Check gauche', function() {
                it('should handle wrong values', function() {
                        expect(calculatrice('*', '', 3)).toBe(null);
                        expect(calculatrice('*', null, 3)).toBe(null);
                        expect(calculatrice('*', -3, 3)).toBe(null);
                        expect(calculatrice(null, 2, 3)).toBe(null);
                });
        });
		describe('Check droite', function() {
                it('should handle wrong values', function() {
                        expect(calculatrice('*', 2, '')).toBe(null);
                        expect(calculatrice('*', 2, null)).toBe(null);
                        expect(calculatrice('*', 2, 430)).toBe(null);
                        expect(calculatrice(null, 2, 450)).toBe(null);
                });
        });
});

describe('Check Operation', function() {
        it('should calculate', function() {
                        expect(calculatrice('*', 2, 2)).toEqual(4);
                        expect(calculatrice('+', 2, 2)).toEqual(4);
                        expect(calculatrice('-', 2, 3)).toEqual(-1);
                        expect(calculatrice('/', 4, 2)).toEqual(2);
                        expect(calculatrice('/', 4, 0)).toBe(null);
                });
});
