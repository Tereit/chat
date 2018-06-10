import React from 'react';
import ChatDisplay from '.';
import { ChatMessage } from '..';

let chatHistoryMock, wrapper;

describe("ChatDisplay component", () => {
    beforeEach(() => {
        chatHistoryMock = [
            {user: "test1", text: "hello"},
            {user: "test2", text: "hello back"}
        ];
        wrapper = shallow(<ChatDisplay chatHistory={chatHistoryMock} />);
    });

    it('should render all messages', () => {
        expect(wrapper.find(ChatMessage).length).toEqual(chatHistoryMock.length);
    });

    it('should show the message and the user that sent the message', () => {
        const mounted = mount(<ChatDisplay chatHistory={chatHistoryMock} />);
        const first = mounted.find(ChatMessage).first();
        expect(first.contains(chatHistoryMock[0].user)).toEqual(true);
        expect(first.contains(chatHistoryMock[0].text)).toEqual(true);
    });

});