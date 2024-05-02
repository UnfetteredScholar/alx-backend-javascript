/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let bond;

  beforeEach(() => {
    if (!bond) {
      bond = sinon.spy(console);
    }
  });

  afterEach(() => {
    bond.log.resetHistory();
  });

  it('sendPaymentRequestToApi with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(bond.log.calledWith('The total is: 120')).to.be.true;
    expect(bond.log.callCount).to.be.equal(1);
  });

  it('sendPaymentRequestToApi with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(bond.log.calledWith('The total is: 20')).to.be.true;
    expect(bond.log.callCount).to.be.equal(1);
  });
});
