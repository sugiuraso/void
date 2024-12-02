/* eslint-disable vue/no-irregular-whitespace */
/* eslint-disable no-irregular-whitespace */
import { isFinite, isNumber } from 'lodash-es';
import i18n from '@/i18n';
const t = i18n.global.t;

function isNumberStr(num) {
  return isFinite(num) || ((typeof num === 'string' && num.trim() !== '') && isFinite(+num));
}

const validator = {

  // 半角英字
  alpha: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([a-zA-z\s]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.alpha')));
    }
  },

  numberValue: (rule, value, callback) => {
    if (isNumber(rule.minValue) && value < rule.minValue) {
      callback(new Error(t('validation.error.number')));
      return;
    }
    if (isNumber(rule.maxValue) && value > rule.maxValue) {
      callback(new Error(t('validation.error.number')));
      return;
    }
    callback();
  },

  // 半角数字(整数＋小数)
  number: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    value = `${value}`;
    if (/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.number')));
    }
  },

  // 半角数字（整数のみ）
  integer: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    value = `${value}`;
    if (/^([0-9]+|[-]?[1-9]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.integer')));
    }
  },

  // 半角数字(負の整数を含まない整数)
  digits: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    value = `${value}`;
    if (/^\d+$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.digits')));
    }
  },

  // 半角数字（正整数のみ）
  positiveint: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    value = `${value}`;
    if (/^([1-9]+|[1-9][0-9]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.positiveint')));
    }
  },

  // 半角数字(正の整数+小数)
  positiveintdec: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    value = `${value}`;
    if (isNumberStr(value) && value > 0) {
      callback();
    } else {
      callback(new Error(t('validation.error.positiveintdec')));
    }
  },

  // 半角数字(正の整数+小数+ぜろ)
  nonnegativeintdec: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    value = `${value}`;
    if (isNumberStr(value) && value >= 0) {
      callback();
    } else {
      callback(new Error(t('validation.error.nonnegativeintdec')));
    }
  },

  // 半角数字(正の整数+ぜろ)
  nonnegativeint: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/(^[1-9]+\d*$)|(^0$)/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.nonnegativeint')));
    }
  },

  // 半角英数字
  alnum: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([a-zA-Z0-9\.]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.alnum')));
    }
  },

  // 半角英数字（整数のみ）
  alint: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([a-zA-Z0-9]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.alint')));
    }
  },

  // 半角英数字下划线
  alintunderline: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([a-zA-Z0-9_]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.alint')));
    }
  },

  // 半角カタカナ
  halfwidthkana: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([ｧ-ﾝﾞﾟ ]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.halfwidthkana')));
    }
  },

  // 全角ひらがな
  hiragana: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([ぁ-ん 　]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.hiragana')));
    }
  },

  // 全角カタカナ
  katakana: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([ァ-ヶー 　]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.katakana')));
    }
  },

  // 全角ひらがな・カタカナ
  fullwithkana: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([ァ-ヶーぁ-ん 　]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.fullwithkana')));
    }
    return /^([ァ-ヶーぁ-ん 　]+)$/.test(value);
  },

  // 半角文字（半角英数記号）
  alnumsymbol: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([0-9a-zA-Z\!\"\#\$\%\&\'\(\)\-\=\^\~\\\|\@\`\[\{\;\+\:\*\]\}\,\>\.\<;\/\?\_ ]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.alnumsymbol')));
    }
  },

  // 半角英数字ハイフンアスタリスク
  alnumhyphenasterisk: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([0-9a-zA-Z\-\*]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.alnumhyphenasterisk')));
    }
  },

  // 半角英数字ハイフン
  alnumhyphen: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([0-9a-zA-Z\-]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.alnumhyphen')));
    }
  },

  // 電話番号
  telnum: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([0-9\-]{7,13})$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.telnum')));
    }
  },

  // FAX番号
  faxnum: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([0-9\-]{7,13})$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.faxnum')));
    }
  },

  // 郵便番号
  zipnum: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^\d{3}-?\d{4}$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.zipnum')));
    }
  },

  // メールアドレス
  mailaddr: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/([\w_-]+@[\w_-]+\.[\w._-]+)$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.mailaddr')));
    }
  },

  // 日付
  date: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (!value.match(/^\d{4}\d{2}\d{2}$/)) {
      callback(new Error(t('validation.error.date')));
    }
    const result = value.match(/(\d{4})(\d{2})(\d{2})/);
    const dt = new Date(parseInt(result[1], 10), parseInt(result[2], 10) - 1, parseInt(result[3], 10));
    return (dt.getFullYear() === parseInt(result[1], 10) && dt.getMonth() === parseInt(result[2], 10) - 1 && dt.getDate() === parseInt(result[3], 10));
  },

  // 日
  day: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([1-9]|[12][0-9]|3[01])$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.day')));
    }
  },

  // 年月
  yearmonth: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^(\d{4})(0[1-9]|1[0-2])$/.test(value.replace(/\u002F/g, ''))) {
      callback();
    } else {
      callback(new Error(t('validation.error.yearmonth')));
    }
  },

  // 時間
  time: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    if (/^([01]?[0-9]|2[0-3])([0-5][0-9])$/.test(value)) {
      callback();
    } else {
      callback(new Error(t('validation.error.time')));
    }
  },

  // 日時
  datetime: (rule, value, callback) => {
    if (!value && value !== 0) {
      callback();
      return;
    }
    const result = value.match(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/);
    if (result != null && result.length > 0) {
      const dt = new Date(parseInt(result[1], 10), parseInt(result[2], 10) - 1, parseInt(result[3], 10), parseInt(result[4], 10), parseInt(result[5], 10), parseInt(result[6], 10));
      if ((dt.getFullYear() === parseInt(result[1], 10) && dt.getMonth() === parseInt(result[2], 10) - 1 && dt.getDate() === parseInt(result[3], 10) && dt.getHours() === parseInt(result[4], 10) && dt.getMinutes() === parseInt(result[5], 10) && dt.getSeconds() === parseInt(result[6], 10))) {
        callback();
      } else {
        callback(new Error(t('validation.error.datetime')));
      }
    } else {
      callback(new Error(t('validation.error.datetime')));
    }
  },
};

export { validator };
