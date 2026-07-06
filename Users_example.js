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
            // Change name for privacy as per business requirements
            USERS[i].name = "Banned User";
            return true;
        }
    }
    return false;
}

module.exports = { getUsers, banUser };
