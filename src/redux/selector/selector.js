export const filterSelector = state => state.phonebook.filter

export const loaderSelector = state => state.phonebook.contacts.isLoading

export const itemsSelector = state => state.phonebook.contacts.items

export const errorRequestelector = state => state.phonebook.contacts.error
