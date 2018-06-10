import React from 'react';
import ChatSendButton from './ChatSendButton';

describe('ChatSendButton component', () => {
    it('should call `props.onClick` when send button is clicked', () => {
        const handleSendFn = jest.fn();
        const button = shallow(<ChatSendButton onClick={handleSendFn} />);
        expect(handleSendFn.mock.calls.length).toEqual(0);
        button.simulate('click');
        expect(handleSendFn.mock.calls.length).toEqual(1);
        handleSendFn.mockReset();
    });
});