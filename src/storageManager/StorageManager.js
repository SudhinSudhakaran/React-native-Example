import Globals from '../../constants/globals/Globals';
import APIConnections from '../../helpers/apiManager/APIConnections';
import {AppStorage} from '../../../src/helpers/storageManager/AppStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class StorageManager {
  /**
    * Purpose:Save the value for base url and type
    * Created/Modified By: Jenson John
    * Created/Modified Date: 04 Aug 2021
    * Steps:
        1.Get the base url from Async storage
        2.return the base url
     */
  static saveBaseURL = async (type: String, url: String) => {
    try {
      APIConnections.BASE_URL = url;
      APIConnections.URL_TYPE = type;
      await AppStorage.setItem(Globals.STORAGE_KEYS.BASE_URL, url);
      await AppStorage.setItem(Globals.STORAGE_KEYS.BASE_URL_TYPE, type);
    } catch (e) { }
  };
  /**
        * Purpose:Get the value of base url
        * Created/Modified By: Jenson John
        * Created/Modified Date: 27 Dec 2021
        * Steps:
            1.Get the base url from Async storage
            2.return the base url
         */
  static getBaseURL = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.BASE_URL);
      return res;
    } catch (e) { }
  };

  /**
        * Purpose:Get the value of base url type
        * Created/Modified By: Jenson John
        * Created/Modified Date: 27 Dec 2021
        * Steps:
            1.Get the base url type from Async storage
            2.return the base url type
         */
  static getBaseURLType = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.BASE_URL_TYPE);
      return res;
    } catch (e) { }
  };

  /**
        *
        Purpose:clear data from Async storage
       * Created/Modified By: Jenson
       * Created/Modified Date: 27 Dec 2021
       * Steps:
           1.Clear the data in the Async storage
        */
  static clearAllData = async () => {
    try {
      let res = await AppStorage.clearAll();
      return res;
    } catch (e) {
      //consol.log(e)
    }
  };

  /**
        *
        Purpose:clear data from Async storage
       * Created/Modified By: Jenson
       * Created/Modified Date: 27 Dec 2021
       * Steps:
           1.Clear the data in the Async storage
        */
  static clearUserRelatedData = async () => {
    try {
      Globals.TOKEN = null;
      let keys = [
        Globals.STORAGE_KEYS.USER_DETAILS,
        Globals.STORAGE_KEYS.IS_AUTH,
        Globals.STORAGE_KEYS.TOKEN,
      ];

      //Clearing from globals
      Globals.USER_DETAILS = {};
      Globals.IS_AUTHORIZED = false;
      Globals.TOKEN = '';
      //Clearing from db
      try {
        let res = await AsyncStorage.multiRemove(keys);
        return res;
      } catch (e) {
        console.log(`AsyncStorage clearItems ${keys} failed:`, e);
        throw e;
      }

    } catch (e) {
      console.log('ClearUserRelatedData: ', e);
    }
  };

  /**
  *
  Purpose:Save the value in to result in Async storage
 * Created/Modified By: Jenson John
 * Created/Modified Date:  27 Dec 2021
 * Steps:
     1.Create the value true
     2.Store the value into result
  */

  static saveToken = async info => {
    try {
      await AppStorage.setItem(Globals.STORAGE_KEYS.TOKEN, info);
    } catch (e) { }
  };

  /**
       *
       Purpose:Get the value
      * Created/Modified By: Jenson John
      * Created/Modified Date: 27 Dec 2021
      * Steps:
          1.Get the value from Async storage
          2.return the value
       */
  static getSavedToken = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.TOKEN);
      return res;
    } catch (e) { }
  };

  /**
       *
       Purpose:Get the value
      * Created/Modified By: Jenson John
      * Created/Modified Date: 27 Dec 2021
      * Steps:
          1.Get the value from Async storage
          2.return the value
       */
  static getIsAuthorized = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.IS_AUTH);
      return res;
    } catch (e) { }
  };

  /**
    * Purpose:Save the value in to result in Async storage
    * Created/Modified By: Jenson John
    * Created/Modified Date:  28 Dec 2021
    * Steps:
        1.Create the value true
        2.Store the value into result
    */

  static saveBusinessDetails = async info => {
    try {
      await AppStorage.setItem(Globals.STORAGE_KEYS.BUSINESS_DETAILS, info);
    } catch (e) { }
  };

  /**
       *
       Purpose:Get the value
      * Created/Modified By: Jenson John
      * Created/Modified Date: 28 Dec 2021
      * Steps:
          1.Get the value from Async storage
          2.return the value
       */
  static getBusinessDetails = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.BUSINESS_DETAILS);
      return res;
    } catch (e) { }
  };

  /**
    * Purpose:Save the value in to result in Async storage
    * Created/Modified By: Jenson John
    * Created/Modified Date:  31 Dec 2021
    * Steps:
        1.Create the value true
        2.Store the value into result
    */

  static saveUserDetails = async info => {
    try {
      await AppStorage.setItem(Globals.STORAGE_KEYS.USER_DETAILS, info);
      await AppStorage.setItem(Globals.STORAGE_KEYS.IS_AUTH, 'true');
    } catch (e) { }
  };

  /**
       *
       Purpose:Get the value
      * Created/Modified By: Jenson John
      * Created/Modified Date: 31 Dec 2021
      * Steps:
          1.Get the value from Async storage
          2.return the value
       */
  static getUserDetails = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.USER_DETAILS);
      return res;
    } catch (e) { }
  };
  /**
     *
     Purpose:Save the value in to result in Async storage
    * Created/Modified By: Jenson John
    * Created/Modified Date:  27 Dec 2021
    * Steps:
        1.Create the value true
        2.Store the value into result
     */

  static saveLanguage = async (info) => {
    try {
      const item = JSON.stringify(info);
      return await AsyncStorage.setItem(Globals.STORAGE_KEYS.SELECTED_LANGUAGE, item);
    } catch (e) { }
  };


  /**
     *
     Purpose:Get the value
    * Created/Modified By: Jenson John
    * Created/Modified Date: 27 Dec 2021
    * Steps:
        1.Get the value from Async storage
        2.return the value
     */
  static getSavedLanguage = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.SELECTED_LANGUAGE);
      return res;
    } catch (e) { }
  };
}
