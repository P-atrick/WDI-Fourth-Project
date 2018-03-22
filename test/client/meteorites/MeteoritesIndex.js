/* global describe it beforeEach before after afterEach */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Promise from 'bluebird';
import Axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

import MeteoritesIndex from '../../../src/components/meteorites/MeteoritesIndex';

const meteoriteData = [{
  id: 1,
  name: 'Test meteorite',
  weight: 100,
  height: 10,
  length: 11,
  width: 12,
  location: 'Test Location',
  type: 'Test type',
  found: '1999-12-12',
  forSale: 'yes',
  price: 111,
  image: 'https://pccdn.perfectchannel.com/christies/live/images/item/TSN15410/6072311/large/ECO_15410_0009.jpg'
}, {
  id: 2,
  name: 'Second test meteorite',
  weight: 200,
  height: 20,
  length: 21,
  width: 22,
  location: 'Second test Location',
  type: 'Second test type',
  found: '2018-01-01',
  forSale: 'yes',
  price: 999,
  image: 'https://pccdn.perfectchannel.com/christies/live/images/item/TSN15410/6072311/large/ECO_15410_0009.jpg'
}];

describe('MeteoritesIndex tests', () => {
  let wrapper = null;
  let promise = null;

  before(done => {
    promise = Promise.resolve({ data: meteoriteData });
    sinon.stub(Axios, 'get').returns(promise);
    done();
  });

  after(done => {
    Axios.get.restore;
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter>
        <MeteoritesIndex />
      </MemoryRouter>
    );
    done();
  });

  it('should display meteorites', done => {
    promise.then(() => {
      wrapper.update();

      expect(wrapper.find('div.index-image').length).to.eq(2);
      done();
    });
  });

  it('should display links to show pages', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.index-image').length).to.eq(2);
      expect(wrapper.find({ href: '/meteorites/1' }).length).to.eq(1);
      expect(wrapper.find({ href: '/meteorites/2' }).length).to.eq(1);
      done();
    });
  });

});
