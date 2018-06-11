import React from 'react';
import ChatMessage from '.';

describe("ChatMessage component", () => {
    it('should display the correct user name and message', () => {
        const mockMsg = {sentBy: "tester1", message:"test text"};
        const wrapper = shallow(<ChatMessage msg={mockMsg} />);

        expect(wrapper.contains(mockMsg.sentBy)).toEqual(true);
        expect(wrapper.contains(mockMsg.message)).toEqual(true);
    })
});