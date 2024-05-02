const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const bond = sinon.spy(console);
    const fake = sinon.stub(Utils, 'calculateNumber');

    fake.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(fake.calledWith('SUM', 100, 20)).to.be.true;
    expect(fake.callCount).to.be.equal(1);
    expect(bond.log.calledWith('The total is: 10')).to.be.true;
    expect(bond.log.callCount).to.be.equal(1);
    bond.log.restore();
    fake.restore();
  });
});
