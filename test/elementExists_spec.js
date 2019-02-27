const jsdom = require('jsdom');
const { JSDOM } = jsdom;
import { describe } from 'mocha';
const expect = require('chai').expect;
const elementExists = require('../src/helpers/elementExists').default;

describe('elementExists...', function() {
  let mockElement, falseElement;

  before(function() {
    const dom = new JSDOM(`<!DOCTYPE html><div></div>`);
    mockElement = dom.window.document.querySelector('div');
    falseElement = dom.window.document.querySelector('p');
  });

  it(`should be a function`, function() {
    expect(elementExists).to.be.a('function');
  });
  it(`should return 'false' if the function is called in isolation.`, function() {
    expect(elementExists()).to.be.false;
  });
  it(`should return 'false' if the element doesn't exist.`, function() {
    expect(elementExists(falseElement)).to.be.false;
  });
  it(`should return 'true' if the element does exist`, function() {
    expect(elementExists(mockElement)).to.be.true;
  });
});
