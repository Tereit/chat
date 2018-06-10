import React from 'react';
import ChatMessage from '.';

describe("ChatMessage component", () => {
    it('should display the correct user name and message', () => {
        const mockMsg = {user: "tester1", text:"test text"};
        const wrapper = shallow(<ChatMessage msg={mockMsg} />);

        expect(wrapper.contains(mockMsg.user)).toEqual(true);
        expect(wrapper.contains(mockMsg.text)).toEqual(true);
    })
});