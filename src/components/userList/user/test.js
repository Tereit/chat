import React from 'react';
import { User } from '..';

describe('User component', () => {
    it('should display a green dot if user is online, nothing if offline', () => {
        const user1 = {name: "test1", online: false};
        const user2 = {name: "test2", online: true};
        const wrapper1 = shallow(<User user={user1} />);
        const wrapper2 = shallow(<User user={user2} />);
        expect(wrapper1.find('div.dot').length).toEqual(0);
        expect(wrapper2.find('div.dot').length).toEqual(1);
    });
});