const USERS = [
    { id: 1, name: "Alice", isBanned: false },
    { id: 2, name: "Bob", isBanned: false }
];

function getUsers() {
    return USERS;
}

function banUser(userId) {
    for (let i = 0; i < USERS.length; i++) {
        if (USERS[i].id === userId) {
            USERS[i].isBanned = true;
            return true;
        }
    }
    return false;
}

module.exports = { getUsers, banUser };
