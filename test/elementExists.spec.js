const jsdom = require('jsdom');
const { JSDOM } = jsdom;
import { describe } from 'mocha';
const expect = require('chai').expect;

const elementExists = require('../src/helpers/elementExists').default;

describe('elementExists...', function() {
  beforeEach(function() {
    const jsdom = require('jsdom');
    const { JSDOM } = jsdom;
    const { window } = new JSDOM('<!doctype html><html><div></div></html>');
    global.window = window;
  });
  it(`should be a function`, function() {
    expect(elementExists).to.be.a('function');
  });
  it(`should return 'false' if the function is called in isolation.`, function() {
    expect(elementExists()).to.be.false;
  });
  it(`should return 'false' if the element doesn't exist.`, function() {
    const falseElement = global.window.document.querySelector('p');
    expect(elementExists(falseElement)).to.be.false;
  });
  it(`should return 'true' if the element does exist.`, function() {
    const mockElement = global.window.document.querySelector('div');
    expect(elementExists(mockElement)).to.be.true;
  });
});
