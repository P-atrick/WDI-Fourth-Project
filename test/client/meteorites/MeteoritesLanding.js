/* global describe it */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MeteoritesLanding from '../../../src/components/meteorites/MeteoritesLanding';

describe('MeteoritesLanding tests', () => {

  it('should render one div with a class of landing', done => {

    const wrapper = shallow(<MeteoritesLanding />);

    expect(wrapper.find('div.landing').length).to.eq(1);
    done();
  });

});
