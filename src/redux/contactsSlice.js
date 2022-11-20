import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [ ];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                if (!state.some(contact => contact.name === action.payload)) {
                    state.push(action.payload);
                    return;
                }
                alert(`${action.payload} is already in contacts`); 
            },
            prepare(text) {
                return {
                    payload: {
                        text,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
