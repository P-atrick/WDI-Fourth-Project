// /* global describe it beforeEach before after afterEach */
//
// import React from 'react';
// import { expect } from 'chai';
// import { mount } from 'enzyme';
// import sinon from 'sinon';
// import Promise from 'bluebird';
// import Axios from 'axios';
// import { MemoryRouter } from 'react-router-dom';
//
// import MeteoritesShow from '../../../src/components/meteorites/MeteoritesShow';
//
// const meteoriteData = {
//   id: 1,
//   name: 'Test meteorite',
//   weight: 100,
//   height: 10,
//   length: 11,
//   width: 12,
//   location: 'Test Location',
//   type: 'Test type',
//   found: '1999-12-12',
//   forSale: 'yes',
//   price: 111,
//   image: 'https://pccdn.perfectchannel.com/christies/live/images/item/TSN15410/6072311/large/ECO_15410_0009.jpg'
// };
//
// describe('MeteoritesShow tests', () => {
//   let wrapper = null;
//   let promise = null;
//
//   before(done => {
//     promise = Promise.resolve({ data: meteoriteData });
//     sinon.stub(Axios, 'get').returns(promise);
//     done();
//   });
//
//   after(done => {
//     Axios.get.restore();
//     done();
//   });
//
//   beforeEach(done => {
//     wrapper = mount(
//       <MemoryRouter>
//         <MeteoritesShow />
//       </MemoryRouter>
//     );
//     done();
//   });
//
//   it('should display one meteorite', done => {
//     promise.then(() => {
//       wrapper.update();
//
//       expect(wrapper.find('img.image-square-show').length).to.eq(1);
//       done();
//     });
//   });
//
//
// });
