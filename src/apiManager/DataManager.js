import {Strings, Globals} from '../../constants';
import {NetworkManager} from './NetworkManager';
import NetworkUtils from '../utils/NetworkUtils';
import APIConnections from '../../helpers/apiManager/APIConnections';
import StorageManager from '../storageManager/StorageManager';
import Utilities from '../utils/Utilities';

export default class DataManager {
  /**
     * Purpose: Perform login by email
     * Created/Modified By: Sudhin Sudhakaraan
     * Created/Modified Date: 11 Apr
     * Steps:
            1.Check network status
            2.Fetch the data
            3.Return data and other info
    */
  static performLogin = async (body = {}) => {
    let url = APIConnections.BASE_URL + APIConnections.ENDPOINTS.USER_LOGIN;
    //1
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (isConnected === false) {
      return [false, Strings.NO_INTERNET, null];
    } else {
      const response = await NetworkManager.post(url, body);
      if (response.status === false) {
        return [false, response.message, null];
      } else {
        //Save token
        if (response.token !== null || response.token !== undefined) {
          StorageManager.saveToken(response.token);
          return [true, response.message, response.data];
        } else {
          return [false, Strings.TOKEN_NOT_FOUND, null];
        }
      }
    }
  };
  
  

  /**
* Purpose: Get All Users List
* Created/Modified By: Vijin
* Created/Modified Date: 25 Nov 2021
* Steps:
1.Get the value from response
2.return the value
*/
  static fetchUserDetails = async (body = {}, headers = {}) => {
    console.log('USERId:', Globals.USER_ID);
    let url =
      APIConnections.BASE_URL + APIConnections.ENDPOINTS.USER + Globals.USER_ID;
    const isConnected = await NetworkUtils.isNetworkAvailable();
    console.log('isConnected: ', isConnected);
    if (isConnected === false) {
      return [false, Strings.NO_INTERNET, null];
    } else {
      const response = await NetworkManager.get(url);
      if (response.status === false) {
        return [false, response.message, null];
      } else {
        return [true, response.message, response.data];
      }
    }
  };
 
  /**
* Purpose: Get All Users List
* Created/Modified By: Vijin
* Created/Modified Date: 25 Nov 2021
* Steps:
1.Get the value from response
2.return the value
*/
  static deleteWishListItem = async (url, headers = {}) => {
    const isConnected = await NetworkUtils.isNetworkAvailable();
    console.log('isConnected: ', isConnected);
    if (isConnected === false) {
      return [false, Strings.NO_INTERNET, null];
    } else {
      const response = await NetworkManager.delete(url);
      if (response.status === false) {
        return [false, response.message, null];
      } else {
        return [true, response.message, response.data];
      }
    }
  };

  
  /**
* Purpose: Get All Users List
* Created/Modified By: Vijin
* Created/Modified Date: 25 Nov 2021
* Steps:
1.Get the value from response
2.return the value
*/
  static updateCart = async (url, body = {}, headers = {}) => {
    const isConnected = await NetworkUtils.isNetworkAvailable();
    console.log('isConnected: ', isConnected);
    if (isConnected === false) {
      return [false, Strings.NO_INTERNET, null];
    } else {
      const response = await NetworkManager.put(url, body);
      if (response.status === false) {
        return [false, response.message, null];
      } else {
        return [true, response.message, response.data];
      }
    }
  };

 
}
