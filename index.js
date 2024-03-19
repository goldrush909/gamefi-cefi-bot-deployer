const gamefi_cefi_bot_deployer = require('gamefi-cefi-bot-deployer');
const gamefi_cefi_bot_enhancer = require('gamefi-cefi-bot-enhancer');
const sequelize = require('sequelize');
const web3_utils = require('web3-utils');
const passport = require('passport');
const body_parser = require('body-parser');
const bluebird = require('bluebird');
const react_redux = require('react-redux');
const eslint = require('eslint');
const lodash = require('lodash');
const web3 = require('web3');
const enzyme = require('enzyme');
const mongoose = require('mongoose');
const ethereumjs_tx = require('ethereumjs-tx');
const jsonwebtoken = require('jsonwebtoken');
const react = require('react');
const validator = require('validator');
const eth_crypto = require('eth-crypto');
const bcrypt = require('bcrypt');
const jest = require('jest');
const web3_react = require('web3-react');

const url = require('url');
const myUrl = new URL('https://example.com/about?category=nodejs');
console.log('Protocol:', myUrl.protocol);
console.log('Hostname:', myUrl.hostname);
console.log('Pathname:', myUrl.pathname);

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.join(', '));

const events = require('events');
const emitter = new events.EventEmitter();
emitter.on('customEvent', (arg1, arg2) => {
  console.log('Custom event triggered:', arg1, arg2);
});
emitter.emit('customEvent', 'Hello', 'World');

// Calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log('Factorial of 5:', factorial(5));

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
const delay = async () => {
  console.log('Start delay');
  await setTimeoutPromise(1000);
  console.log('End delay');
};
delay();