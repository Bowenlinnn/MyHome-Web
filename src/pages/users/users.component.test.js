import React from "react";
import { render } from "@testing-library/react";
import Users from "./users.component";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

describe('Users Page', () => {

    const mockStore = configureStore();
    const initialData = {
        user: {
            match: { params: { uuid: null } },
            currentUser: null
        }
    };
    const loggedInUserData = {
        user: {
            match: { params: { uuid: 'any-uuid' } },
            currentUser: {
                userId: 'any-uuid',
                token: 'any-token'
            }
        }
    };

    const storeWithNoUserData = mockStore(initialData);

    it('should match snapshot test for Users page component', () => {
        expect(render(<Provider store={storeWithNoUserData}>
            <Users match={initialData.user.match} currentUser={initialData.user.currentUser} />
        </Provider>)).toMatchSnapshot()
    });

    it('should render welcome message only if user is not having token', () => {
        expect(render(<Provider store={storeWithNoUserData}>
            <Users match={initialData.user.match} currentUser={initialData.user.currentUser} />
        </Provider>)).toBeTruthy();
    });

});
