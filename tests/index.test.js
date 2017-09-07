import add from '../src';
import chai from 'chai';

let expect = chai.expect;

describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });
    it('0 加 1 应该等于 1', function() {
        expect(add(0, 1)).to.be.equal(1);
    });
    it('1 加 0 应该等于 1', function() {
        expect(add(1, 0)).to.be.equal(1);
    });
    it('undefined 加 1 应该等于 1', function() {
        expect(add(undefined, 1)).to.be.equal(1);
    });
    it('1 加 undefined 应该等于 1', function() {
        expect(add(1, undefined)).to.be.equal(1);
    });
});