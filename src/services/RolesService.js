import Api from './Api'

class RolesService {
  static getAll () {
    return Api().get('/role')
  }
}

export default RolesService;