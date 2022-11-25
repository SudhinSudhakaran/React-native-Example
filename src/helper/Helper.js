import Toast from 'react-native-toast-message';
import moment from 'moment';
import Globals from '../../constants/globals/Globals';
import APIConnections from '../apiManager/APIConnections';
import {OrderFilterTypes} from '../enums/Enums';
export default class Helper {
  static isEmailValid(email) {
    //  const reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email) === true;
  }

  static isValidInput(text) {
    return text[0].match(/^[0-9A-Za-z]+$/);
  }
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

  static checkAlreadyExist(object, array) {
    let index = null;
    for (let i = 0; i < array.length; i++) {
      if (array[i].seller === object) {
        index = i;
        i = array.length;
      }
    }
    return index;
  }
  /*
         Get utc to local
         * Created/Modified By: Vijin Raj
         * Created/Modified Date: 10 Aug 2021
         Link: //https://stackoverflow.com/questions/33321495/how-to-convert-from-utc-to-local-time-in-moment-js
     */
  static getUtcToLocal(utcDate) {
    let gmtDateTime = moment(utcDate);
    let local = gmtDateTime.local().format('hh:mm A,DD MMM YYYY');
    return local;
  }

  /*
            Get utc to local
            * Created/Modified By: Vijin Raj
            * Created/Modified Date: 10 Aug 2021
            Link: //https://stackoverflow.com/questions/33321495/how-to-convert-from-utc-to-local-time-in-moment-js
        */
  static getUtcToLocalWithFormat(utcDate, format) {
    let gmtDateTime = moment(utcDate);
    let local = gmtDateTime.local().format(format);
    return local;
  }

  static getImageSrc = img => {
    const baseProductUrl = `${APIConnections.BASE_URL}/uploads/products/large/`;
    const isbnPath = 'https://images.isbndb.com';
    const googleApiPath = 'http://books.google.com/books/';
    const noPreview = 'assets/imgs/nopreview.png';
    const emptyImage = 'assets/imgs/nopreview.png';
    const imgUrl = img
      ? img.startsWith(isbnPath) || img.startsWith(googleApiPath)
        ? img
        : img !== emptyImage
        ? `${baseProductUrl}${img}`
        : noPreview
      : noPreview;
    return imgUrl;
  };

  static getFormattedOrderStatus = status => {
    switch (status) {
      case 'PENDING':
        return 'In Process';
      case 'CANCEL_REQUEST':
        return 'Buyer requested to cancel order';
      case 'CANCEL_REQUEST_ACCEPTED':
        return 'Cancel order request accepted';
      case 'CANCEL_REQUEST_REJECTED':
        return 'Cancel order request rejected';
      case 'CANCELLED':
        return 'Cancelled';
      case 'RETURN_REQUEST':
        return 'Requested for return order';
      case 'RETURN_REQUEST_ACCEPTED':
        return 'Return request accepted';
      case 'RETURN_REQUEST_REJECTED':
        return 'Return request rejected';
      case 'RETURNED':
        return 'Returned';
      case 'REFUND_REQUEST':
        return 'Refund request in processing';
      case 'REFUND_REQUEST_AWAITING':
        return 'Refund request in processing';
      case 'REFUND_COMPLETED':
        return 'Refund completed';
      case 'SHIPPED':
        return 'Shipped';
      case 'DELIVERED':
        return 'Delivered';
      case 'REJECTED':
        return 'Rejected';
      default:
        return status;
    }
  };
  static getFileName(url) {
    const lastInd = url.lastIndexOf('/');
    const strLen = url.length;
    const fileName = url.slice(lastInd + 1, strLen + 1);
    return fileName;
  }
  static Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static getShortFilename(filename) {
    let ext = filename.split('.').pop();
    var newFilename = filename.replace('.' + ext, '');
    if (newFilename.length <= 20) {
      return filename;
    }
    newFilename =
      newFilename.substr(0, 20) + (filename.length > 20 ? '[...]' : '');
    return newFilename + '.' + ext;
  }
  static getImageFullURL = imgEndpoint => {
    const baseProductUrl = `${APIConnections.BASE_URL}/uploads/${imgEndpoint}`;
    return baseProductUrl;
  };
  static getFormattedOrderFilter = (status: OrderFilterTypes) => {
    /*
"" --> All
PENDING --> In Processing
ORDER_UNDER_PENDING --> Orders not accepted in 5 minutes
CANCELLED --> Cancelled
RETURNED --> Returned
SHIPPED --> Shipped
DELIVERED --> Delivered
*/
    switch (status) {
      case OrderFilterTypes.all:
        return 'All';
      case OrderFilterTypes.pending:
        return 'In Process';
      case OrderFilterTypes.orderUnderProcessing:
        return 'Orders not accepted in 5 minutes';
      case OrderFilterTypes.cancelled:
        return 'Cancelled';
      case OrderFilterTypes.returned:
        return 'Returned';
      case OrderFilterTypes.shipped:
        return 'Shipped';
      case OrderFilterTypes.delivered:
        return 'Delivered';
      case OrderFilterTypes.rejected:
        return 'Rejected';
      default:
        return status;
    }
  };

  static getMainHeading(text) {
    if (text) {
      const index = text.lastIndexOf(' ');
      if (index > -1) {
        return text.slice(0, index);
      } else return '';
    } else return '';
  }

  static getSubHeading(text) {
    if (text) {
      const arr = text.split(' ');
      return arr[arr.length - 1] ? arr[arr.length - 1] : '';
    } else return '';
  }
}
