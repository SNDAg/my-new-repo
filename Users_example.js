const USERS = [
    { id: 1, name: "Alice", isBanned: false, role: "admin" },
    { id: 2, name: "Bob", isBanned: false, role: "user" },
    { id: 3, name: "Charlie", isBanned: false, role: "user" }
];

function getUsers() {
    return USERS;
}

function banUser(userId, performingUserId) {
    let performingUser = null;

    for (let i = 0; i < USERS.length; i++) {
        if (USERS[i].id === performingUserId) {
            performingUser = USERS[i];
            break;
        }
    }

    if (!performingUser || performingUser.role !== "admin") {
        return false;
    }

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
