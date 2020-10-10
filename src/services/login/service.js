import api from '../api';

export async function getUsuarios() {
    return api.get('/');
}

export async function doLogin(user, pass) {
    return api.post('usuarios/login', {user, pass});
}