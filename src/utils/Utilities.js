import React from 'react';
import { AppStorage } from '../storageManager/AppStorage';
import Globals from '../../constants/globals/Globals';
import APIConnections from '../apiManager/APIConnections';
import Toast from 'react-native-toast-message';

export default class Utilities {
  static showToast(
    message,
    subMessage = '',
    type = 'error',
    position = 'bottom',
  ) {
    Toast.show({
      type: type, //'success | error | info '
      text1: message,
      text2: subMessage,
      position: position,
      topOffset: 60,
      bottomOffset: 100,
      visibilityTime: 3000,
      // text1Style: {marginLeft: 30, marginRight:30},
    });
  }
  /**
    *
    Purpose:clear data from Async storage
   * Created/Modified By: Sudhin Sudhakaran
   * Created/Modified Date: 03 August 2021
   * Steps:
       1.Clear the data in the Async storage
    */
  static ClearAllData = async () => {
    try {
      Globals.TOKEN = 'a';
      let res = await AppStorage.clearAll();
      return res;
    } catch (e) {
      //consol.log(e)
    }
  };

  /**
    *
    Purpose:clear data from Async storage
   * Created/Modified By: Sudhin Sudhakaran
   * Created/Modified Date: 03 August 2021
   * Steps:
       1.Clear the data in the Async storage
    */
  static ClearUserRelatedData = async () => {
    try {
      Globals.TOKEN = 'a';
      let keys = [
        Globals.STORAGE_KEYS.USER_ID,
        Globals.STORAGE_KEYS.IS_AUTH,
        Globals.STORAGE_KEYS.IS_PUSH_TOKEN_UUID_CREATED,
        Globals.STORAGE_KEYS.NOTIFICATION_COUNT,
        Globals.STORAGE_KEYS.PUSH_TOKEN_UUID,
        Globals.STORAGE_KEYS.TOKEN,
        Globals.STORAGE_KEYS.USER_NAME,
        Globals.STORAGE_KEYS.USER_DETAILS,
      ];
      let res = await AppStorage.clearItems(keys);
      return res;
    } catch (e) {
      console.log('ClearUserRelatedData: ', e);
    }
  };

  /**
    *
    Purpose:Save the value in to result in Async storage
   * Created/Modified By: Sudhin Sudhakaran
   * Created/Modified Date: 09 July 2021
   * Steps:
       1.Create the value true
       2.Store the value into result
    */

  static setUserLoggedIn = async () => {
    console.log('Utilities : setUserLoggedIn : -')
    try {
      let result = await AppStorage.setItem(
        Globals.STORAGE_KEYS.IS_AUTH,
        'true',
      );
      Globals.IS_AUTHORIZED = true;
      console.log(result);
    } catch (e) { }
  };

  /**
     *
     Purpose:Get the value
    * Created/Modified By: Sudhin Sudhakaran
    * Created/Modified Date: 09 July 2021
    * Steps:
        1.Get the value from Async storage
        2.return the value
     */
  static getUserLoggedIn = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.IS_AUTH);
      return res;
    } catch (e) { }
  };

  /**
    *
    Purpose:Get the X_Auth_Token
   * Created/Modified By: Sudhin Sudhakaran
   * Created/Modified Date: 14 July 2021
   * Steps:
       1.Get the Token from API response
       2.return the value
    */
  static saveToken = async token => {
    try {
      await AppStorage.setItem(Globals.STORAGE_KEYS.TOKEN, token);
      Globals.TOKEN = token;
      // console.log(Globals.TOKEN)
    } catch (e) { }
  };
  /**
      * Purpose:Get the value
      * Created/Modified By: Sudhin Sudhakaran
      * Created/Modified Date: 14 July 2021
      * Steps:
          1.Get the value from Async storage
          2.return the value
       */
  static getToken = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.TOKEN);
      //    console.log("utils",res)
      return res;
    } catch (e) { }
  };
  /**
  *
  Purpose:Save the value in to result in Async storage
 * Created/Modified By: Jenson John
 * Created/Modified Date:  21 Oct 2021
 * Steps:
     1.Create the value true
     2.Store the value into result
  */

  static saveUserDetails = async info => {
    console.log('Utilities : saveUserDetails - function called');
    try {
      await AppStorage.setItem(Globals.STORAGE_KEYS.USER_DETAILS, info);
      await AppStorage.setItem(Globals.STORAGE_KEYS.IS_AUTH, 'true');
    } catch (e) { }
  };

  /**
     *
     Purpose:Get the value
    * Created/Modified By: Jenson John
    * Created/Modified Date: 21 Oct 2021
    * Steps:
        1.Get the value from Async storage
        2.return the value
     */
  static getSavedUserDetails = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.USER_DETAILS);
      return res;
    } catch (e) { }
  };

  /**
*
Purpose:Save the value of time zone in Async storage
* Created/Modified By: Jenson John
* Created/Modified Date:  21 Oct 2021
* Steps:
   1.Create the value true
   2.Store the value into result
*/

  static saveTimeZone = async timeZone => {
    try {
      await AppStorage.setItem(Globals.STORAGE_KEYS.TIME_ZONE, timeZone);
    } catch (e) { }
  };

  /**
     *
     Purpose:Get the value of TimeZone
    * Created/Modified By: Jenson John
    * Created/Modified Date: 21 Oct 2021
    * Steps:
        1.Get the value from Async storage
        2.return the value
     */
  static getSavedTimeZone = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.TIME_ZONE);
      return res;
    } catch (e) { }
  };
  /**
    *
    Purpose:Get the X_Auth_Token
   * Created/Modified By: Sudhin Sudhakaran
   * Created/Modified Date: 14 July 2021
   * Steps:
       1.Get the Token from API response
       2.return the value
    */
  static saveUserName = async userName => {
    try {
      await AppStorage.setItem(Globals.STORAGE_KEYS.USER_NAME, userName);
      Globals.USER_NAME = userName;
      // console.log(Globals.TOKEN)
    } catch (e) { }
  };
  /**
      * Purpose:Get the value
      * Created/Modified By: Sudhin Sudhakaran
      * Created/Modified Date: 14 July 2021
      * Steps:
          1.Get the value from Async storage
          2.return the value
       */
  static getUserName = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.USER_NAME);
      //    console.log("utils",res)
      return res;
    } catch (e) { }
  };
  /**
         * Purpose:Get the user id from Api
        * Created/Modified By: Sudhin Sudhakaran
        * Created/Modified Date: 14 July 2021
        * Steps:
            1.Get the Api responce
            2.Store the value into a variable
         */
  static setUserId = async userId => {
    try {
      await AppStorage.setItem(Globals.STORAGE_KEYS.USER_ID, userId);
      Globals.USER_ID = userId;
    } catch (e) { }
  };
  /**
      *  Purpose:Get the value and display how many items in  cart
      * Created/Modified By: Sudhin Sudhakaran
      * Created/Modified Date: 14 July 2021
      * Steps:
          1.Get the userid from Async storage
          2.return the userid
       */
  static getUserId = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.USER_ID);
      console.log('utils - userID', res);
      return res;
    } catch (e) { }
  };
  /**
       * Purpose:Save Basic profile
       * Created/Modified By: Vijin
       * Created/Modified Date: 15 Sep 2021
       * Steps:
           1.Get the basic profile from Async storage
        */
  static saveContact = async contactDetail => {
    try {
      await AppStorage.setItem(
        Globals.STORAGE_KEYS.CONTACT_DETAIL,
        contactDetail,
      );
    } catch (e) { }
  };
  /**
        *  Purpose:Get the value from basic profile
       * Created/Modified By: Vijin
       * Created/Modified Date: 15 Sep 2021
       * Steps:
           1.Get the value from Async storage
           2.return the value
        */
  static getContact = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.CONTACT_DETAIL);
      return res;
    } catch (e) { }
  };
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
      * Created/Modified Date: 04 Aug 2021
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
      * Created/Modified Date: 04 Aug 2021
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
      * Purpose:Save UUID for push notification
      * Created/Modified By: Jenson John
      * Created/Modified Date: 19 Aug 2021
      * Steps:
          1.Get the base url from Async storage
       */
  static saveTokenUUID = async (uuid: String) => {
    try {
      await AppStorage.setItem(Globals.STORAGE_KEYS.PUSH_TOKEN_UUID, uuid);
      await AppStorage.setItem(
        Globals.STORAGE_KEYS.IS_PUSH_TOKEN_UUID_CREATED,
        'true',
      );
      Globals.TOKEN_UUID = uuid;
      Globals.IS_TOKEN_UUID_CREATED = true;
    } catch (e) { }
  };

  /**
       *  Purpose:Get the value of token UUID
      * Created/Modified By: Jenson
      * Created/Modified Date: 19 Aug 2021
      * Steps:
          1.Get the value from Async storage
          2.return the value
       */
  static getTokenUUID = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.PUSH_TOKEN_UUID);
      console.log('Utils PUSH_TOKEN_UUID', res);
      return res;
    } catch (e) { }
  };

  /**
       *  Purpose:Get the value of token UUID
      * Created/Modified By: Jenson
      * Created/Modified Date: 19 Aug 2021
      * Steps:
          1.Get the value from Async storage
          2.return the value
       */
  static isTokenUUIDCreated = async () => {
    try {
      let res = await AppStorage.getItem(
        Globals.STORAGE_KEYS.IS_PUSH_TOKEN_UUID_CREATED,
      );
      console.log('Utils IS_PUSH_TOKEN_UUID_CREATED', res);
      return res;
    } catch (e) { }
  };
  static clearRegistrationData = async () => {
    try {
      let keys = [
        Globals.STORAGE_KEYS.BASIC_PROFILE,
        Globals.STORAGE_KEYS.STORE_INFO,
      ];
      let res = await AppStorage.clearItems(keys);
      return res;
    } catch (e) {
      console.log('clearRegistrationData: ', e);
    }
  };
  /**
       * Purpose:Get the value from responce for count the value of cart items
      * Created/Modified By: Sudhin Sudhakaran
      * Created/Modified Date: 14 July 2021
      * Steps:
          1.Get the Api responce
          2.increase the count
       */
  static setNotificationCount = async notificationCount => {
    try {
      await AppStorage.setItem(
        Globals.STORAGE_KEYS.NOTIFICATION_COUNT,
        notificationCount,
      );
      Globals.NOTIFICATION_COUNT = notificationCount;
      console.log('Notification Count:', Globals.NOTIFICATION_COUNT);
    } catch (e) { }
  };
  /**
       *  Purpose:Get the value and display how many items in  cart
      * Created/Modified By: Sudhin Sudhakaran
      * Created/Modified Date: 14 July 2021
      * Steps:
          1.Get the value from Async storage
          2.return the value
       */
  static getNotificationCount = async () => {
    try {
      let res = await AppStorage.getItem(
        Globals.STORAGE_KEYS.NOTIFICATION_COUNT,
      );
      console.log('Utils', res);
      return res;
    } catch (e) { }
  };
  /**
       * Purpose:Get the value from responce for count the value of cart items
      * Created/Modified By: Sudhin Sudhakaran
      * Created/Modified Date: 14 July 2021
      * Steps: 
          1.Get the Api responce
          2.increase the count
       */
  static setCartCount = async numberOfCart => {
    try {
      await AppStorage.setItem(Globals.STORAGE_KEYS.NUMBER_OF_CART, numberOfCart);
      Globals.NUMBER_OF_CART = numberOfCart;
      console.log("CART COUNT", Globals.NUMBER_OF_CART);
    } catch (e) { }
  };
  /**
       *  Purpose:Get the value and display how many items in  cart
      * Created/Modified By: Sudhin Sudhakaran
      * Created/Modified Date: 14 July 2021
      * Steps: 
          1.Get the value from Async storage
          2.return the value
       */
  static getCartCount = async () => {
    try {
      let res = await AppStorage.getItem(Globals.STORAGE_KEYS.NUMBER_OF_CART);
      console.log('CART COUNT', res);
      return res;
    } catch (e) { }
  };
}
