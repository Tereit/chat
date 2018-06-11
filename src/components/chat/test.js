import React from 'react';
import { ChatSendButton, Chat, ChatDisplay } from './index';

let handleSendFn, chatHistoryMock, wrapper;

describe('Chat component', () => {
    beforeEach(() => {
        chatHistoryMock = [
            {user: "test1", text: "hello"},
            {user: "test2", text: "hello back"}
        ];
        wrapper = shallow(<Chat chatHistory={chatHistoryMock} user={"tester"} />);
    });

    it('should render with a ChatDisplay, an input field and a Button', () => {
        expect(wrapper.find(ChatDisplay).length).toEqual(1);
        expect(wrapper.find('input').length).toEqual(1);
        expect(wrapper.find(ChatSendButton).length).toEqual(1);
    });

});