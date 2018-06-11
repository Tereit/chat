import React from 'react';
import { UserList } from '.';

let wrapper, users;

describe('UserList component', () => {
    beforeEach(() => {
        users = [{userName: 'test1'}, {userName: 'test2'}, {userName: 'test3'}];
        wrapper = shallow(<UserList users={users} />);
    });

    it('should display all users', () => {
        expect(wrapper.find('User').length).toEqual(users.length);
    });

    xit('should be able to select a user from the list', () => {
        // TODO
    });
});