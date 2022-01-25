import Api from './Api'

class UsersService {
  static getAll () {
    return Api().get('/user')
  }

  static postUsers (params) {
    return Api().post('/user',{
      "id": params.id,
      "firstName": params.firstName,
      "lastName": params.lastName,
      "email": params.email,
      "roleId": params.roleId,
      "active": params.active,
    });
  }

  static putUsers (params) {
    return Api().put('/user/'+params.id, {
      "firstName": params.firstName,
      "lastName": params.lastName,
      "email": params.email,
      "roleId": params.roleId,
      "active": params.active,
    });
  }

  static deleteUsers (params) {
    return Api().delete('/user/'+params.id);
  }
}

export default UsersService;