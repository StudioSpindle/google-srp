const jsdom = require('jsdom');
const { JSDOM } = jsdom;
import { describe } from 'mocha';
const expect = require('chai').expect;

const getParameterByName = require('../src/helpers/getParameterByName').default;

describe('getParameterByName...', function() {
  beforeEach(function() {
    const parameter = 'search';
    const parameterValue = 'test';
    const { window } = new JSDOM('', {
      url: `https://example.org/?${parameter}=${parameterValue}`
    });
    global.window = window;
    global.parameter = parameter;
    global.parameterValue = parameterValue;
  });
  it(`should be a function`, function() {
    expect(getParameterByName).to.be.a('function');
  });
  it(`should return a string`, function() {
    const exampleUrl = global.window.location.href;
    expect(getParameterByName(parameter, exampleUrl)).to.be.a('string');
  });
  it(`should return the example parameter`, function() {
    const exampleUrl = global.window.location.href;
    expect(getParameterByName(parameter, exampleUrl)).to.equal(parameterValue);
  });
});
