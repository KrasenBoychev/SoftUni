const endPoints = {
    register: "users/register"
}

async function register(data) {
    return await post(endPoints, data);
}