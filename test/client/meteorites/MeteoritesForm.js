/* global describe it */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MeteoritesForm from '../../../src/components/meteorites/MeteoritesForm';

describe('MeteoritesForm tests', () => {

  it('should render eight input fields and two selects', done => {
    const props = {
      meteorite: {
        id: '',
        name: '',
        weight: '',
        height: '',
        length: '',
        width: '',
        location: '',
        type: '',
        found: '',
        forSale: '',
        price: '',
        image: ''
      },
      errors: {}
    };

    const wrapper = shallow(<MeteoritesForm {...props}/>);

    expect(wrapper.find('input').length).to.eq(8);
    expect(wrapper.find('select').length).to.eq(2);
    done();
  });

  it('should populate the form with prop values', done => {
    const props = {
      meteorite: {
        id: 1,
        name: 'Test name',
        weight: 2,
        height: 3,
        length: 4,
        width: 5,
        location: 'Test location',
        type: 'Iron',
        found: '2000-01-01',
        forSale: 'yes',
        price: 1,
        image: 'Test image'
      },
      errors: {}
    };

    const wrapper = shallow(<MeteoritesForm {...props}/>);

    expect(wrapper.find({ value: 1 }).length).to.equal(1);
    expect(wrapper.find({ value: 'Test name' }).length).to.equal(1);
    expect(wrapper.find({ value: 2 }).length).to.equal(1);
    expect(wrapper.find({ value: 3 }).length).to.equal(1);
    expect(wrapper.find({ value: 4 }).length).to.equal(1);
    expect(wrapper.find({ value: 5 }).length).to.equal(1);
    expect(wrapper.find({ value: 'Test location' }).length).to.equal(1);

    done();
  });

  it('should correctly display errors', done => {
    const props = {
      meteorite: {
        id: 1,
        name: '',
        weight: 2,
        height: 3,
        length: 4,
        width: 5,
        location: '',
        type: 'Iron',
        found: '2000-01-01',
        forSale: 'yes',
        price: 1,
        image: 'Test image'
      },
      errors: {
        name: 'Please enter a name',
        weight: 'Please enter a weight',
        location: 'Please enter a location'
      }
    };

    const wrapper = shallow(<MeteoritesForm {...props} />);

    expect(wrapper.find('.form-error').length).to.equal(3);

    done();
  });

});
