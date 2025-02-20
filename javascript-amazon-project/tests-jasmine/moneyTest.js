import {formatCurrency} from "../scripts/utils/money.js";

describe('test suite: formatcurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with zero cents', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds upto the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});