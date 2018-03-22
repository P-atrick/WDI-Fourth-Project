/* global describe it beforeEach before after afterEach */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Promise from 'bluebird';
import Axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

import MeteoritesIndex from '../../../src/components/meteorites/MeteoritesIndex';
