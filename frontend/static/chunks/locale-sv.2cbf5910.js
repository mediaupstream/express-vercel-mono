/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkaxiom_local_dash"] = self["webpackChunkaxiom_local_dash"] || []).push([["locale-sv"],{

/***/ 6950:
/*!******************************************!*\
  !*** ./node_modules/moment/locale/sv.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("//! moment.js locale configuration\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(/*! ../moment */ 36105)) :\n   0\n}(this, (function (moment) { 'use strict';\n\n\n    var sv = moment.defineLocale('sv', {\n        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),\n        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),\n        weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),\n        weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),\n        weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),\n        longDateFormat : {\n            LT : 'HH:mm',\n            LTS : 'HH:mm:ss',\n            L : 'YYYY-MM-DD',\n            LL : 'D MMMM YYYY',\n            LLL : 'D MMMM YYYY [kl.] HH:mm',\n            LLLL : 'dddd D MMMM YYYY [kl.] HH:mm',\n            lll : 'D MMM YYYY HH:mm',\n            llll : 'ddd D MMM YYYY HH:mm'\n        },\n        calendar : {\n            sameDay: '[Idag] LT',\n            nextDay: '[Imorgon] LT',\n            lastDay: '[Igår] LT',\n            nextWeek: '[På] dddd LT',\n            lastWeek: '[I] dddd[s] LT',\n            sameElse: 'L'\n        },\n        relativeTime : {\n            future : 'om %s',\n            past : 'för %s sedan',\n            s : 'några sekunder',\n            ss : '%d sekunder',\n            m : 'en minut',\n            mm : '%d minuter',\n            h : 'en timme',\n            hh : '%d timmar',\n            d : 'en dag',\n            dd : '%d dagar',\n            M : 'en månad',\n            MM : '%d månader',\n            y : 'ett år',\n            yy : '%d år'\n        },\n        dayOfMonthOrdinalParse: /\\d{1,2}(e|a)/,\n        ordinal : function (number) {\n            var b = number % 10,\n                output = (~~(number % 100 / 10) === 1) ? 'e' :\n                (b === 1) ? 'a' :\n                (b === 2) ? 'a' :\n                (b === 3) ? 'e' : 'e';\n            return number + output;\n        },\n        week : {\n            dow : 1, // Monday is the first day of the week.\n            doy : 4  // The week that contains Jan 4th is the first week of the year.\n        }\n    });\n\n    return sv;\n\n})));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjk1MC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxDQUFDO0FBQ0QsR0FBRyxLQUNvQyxXQUFXLG1CQUFPLENBQUMsc0JBQVc7QUFDckUsR0FBRyxDQUNzQjtBQUN6QixDQUFDLDRCQUE0Qjs7O0FBRzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsb0NBQW9DLElBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvd2F0ZXJtZWxvbi9Qcm9qZWN0cy9BeGlvbS9jb2RlL2F4aW9taHEtYXBwL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuXG4gICAgdmFyIHN2ID0gbW9tZW50LmRlZmluZUxvY2FsZSgnc3YnLCB7XG4gICAgICAgIG1vbnRocyA6ICdqYW51YXJpX2ZlYnJ1YXJpX21hcnNfYXByaWxfbWFqX2p1bmlfanVsaV9hdWd1c3RpX3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICAgICAgICBtb250aHNTaG9ydCA6ICdqYW5fZmViX21hcl9hcHJfbWFqX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXMgOiAnc8O2bmRhZ19tw6VuZGFnX3Rpc2RhZ19vbnNkYWdfdG9yc2RhZ19mcmVkYWdfbMO2cmRhZycuc3BsaXQoJ18nKSxcbiAgICAgICAgd2Vla2RheXNTaG9ydCA6ICdzw7ZuX23DpW5fdGlzX29uc190b3JfZnJlX2zDtnInLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzTWluIDogJ3PDtl9tw6VfdGlfb25fdG9fZnJfbMO2Jy5zcGxpdCgnXycpLFxuICAgICAgICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgICAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgICAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICAgICAgICBMIDogJ1lZWVktTU0tREQnLFxuICAgICAgICAgICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICAgICAgTExMIDogJ0QgTU1NTSBZWVlZIFtrbC5dIEhIOm1tJyxcbiAgICAgICAgICAgIExMTEwgOiAnZGRkZCBEIE1NTU0gWVlZWSBba2wuXSBISDptbScsXG4gICAgICAgICAgICBsbGwgOiAnRCBNTU0gWVlZWSBISDptbScsXG4gICAgICAgICAgICBsbGxsIDogJ2RkZCBEIE1NTSBZWVlZIEhIOm1tJ1xuICAgICAgICB9LFxuICAgICAgICBjYWxlbmRhciA6IHtcbiAgICAgICAgICAgIHNhbWVEYXk6ICdbSWRhZ10gTFQnLFxuICAgICAgICAgICAgbmV4dERheTogJ1tJbW9yZ29uXSBMVCcsXG4gICAgICAgICAgICBsYXN0RGF5OiAnW0lnw6VyXSBMVCcsXG4gICAgICAgICAgICBuZXh0V2VlazogJ1tQw6VdIGRkZGQgTFQnLFxuICAgICAgICAgICAgbGFzdFdlZWs6ICdbSV0gZGRkZFtzXSBMVCcsXG4gICAgICAgICAgICBzYW1lRWxzZTogJ0wnXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgICAgIGZ1dHVyZSA6ICdvbSAlcycsXG4gICAgICAgICAgICBwYXN0IDogJ2bDtnIgJXMgc2VkYW4nLFxuICAgICAgICAgICAgcyA6ICduw6VncmEgc2VrdW5kZXInLFxuICAgICAgICAgICAgc3MgOiAnJWQgc2VrdW5kZXInLFxuICAgICAgICAgICAgbSA6ICdlbiBtaW51dCcsXG4gICAgICAgICAgICBtbSA6ICclZCBtaW51dGVyJyxcbiAgICAgICAgICAgIGggOiAnZW4gdGltbWUnLFxuICAgICAgICAgICAgaGggOiAnJWQgdGltbWFyJyxcbiAgICAgICAgICAgIGQgOiAnZW4gZGFnJyxcbiAgICAgICAgICAgIGRkIDogJyVkIGRhZ2FyJyxcbiAgICAgICAgICAgIE0gOiAnZW4gbcOlbmFkJyxcbiAgICAgICAgICAgIE1NIDogJyVkIG3DpW5hZGVyJyxcbiAgICAgICAgICAgIHkgOiAnZXR0IMOlcicsXG4gICAgICAgICAgICB5eSA6ICclZCDDpXInXG4gICAgICAgIH0sXG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShlfGEpLyxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gKH5+KG51bWJlciAlIDEwMCAvIDEwKSA9PT0gMSkgPyAnZScgOlxuICAgICAgICAgICAgICAgIChiID09PSAxKSA/ICdhJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ2EnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMykgPyAnZScgOiAnZSc7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgb3V0cHV0O1xuICAgICAgICB9LFxuICAgICAgICB3ZWVrIDoge1xuICAgICAgICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdjtcblxufSkpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6950\n");

/***/ }),

/***/ 47897:
/*!*********************************************************!*\
  !*** ./node_modules/numbro/dist/languages/sv-SE.min.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("!function(e){if(true)module.exports=e();else { var t; }}(function(){return function a(i,u,s){function f(t,e){if(!u[t]){if(!i[t]){var n=undefined;if(!e&&n)return require(t,!0);if(d)return d(t,!0);var r=new Error(\"Cannot find module '\"+t+\"'\");throw r.code=\"MODULE_NOT_FOUND\",r}var o=u[t]={exports:{}};i[t][0].call(o.exports,function(e){return f(i[t][1][e]||e)},o,o.exports,a,i,u,s)}return u[t].exports}for(var d=undefined,e=0;e<s.length;e++)f(s[e]);return f}({1:[function(e,t,n){\"use strict\";t.exports={languageTag:\"sv-SE\",delimiters:{thousands:\" \",decimal:\",\"},abbreviations:{thousand:\"t\",million:\"M\",billion:\"md\",trillion:\"tmd\"},ordinal:function(){return\"\"},currency:{symbol:\"kr\",position:\"postfix\",code:\"SEK\"},currencyFormat:{thousandSeparated:!0,totalLength:4,spaceSeparated:!0,average:!0},formats:{fourDigits:{totalLength:4,spaceSeparated:!0,average:!0},fullWithTwoDecimals:{output:\"currency\",mantissa:2,spaceSeparated:!0,thousandSeparated:!0},fullWithTwoDecimalsNoCurrency:{mantissa:2,thousandSeparated:!0},fullWithNoDecimals:{output:\"currency\",spaceSeparated:!0,thousandSeparated:!0,mantissa:0}}}},{}]},{},[1])(1)});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc4OTcuanMiLCJtYXBwaW5ncyI6IkNBQUEsU0FBQUEsR0FBQSxPQUFBRSxDQUFBQSxPQUFBRCxRQUFBRCxTQUFBLFVBQUFBLENBQUEsNEJBQUFZLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsU0FBQUMsRUFBQUMsRUFBQWpCLEdBQUEsSUFBQWMsRUFBQUcsR0FBQSxLQUFBSixFQUFBSSxHQUFBLEtBQUFDLEVBQUEsU0FBQUMsQ0FBQSxJQUFBbkIsR0FBQWtCLEVBQUEsT0FBQUEsT0FBQUEsQ0FBQUQsR0FBQSxNQUFBRyxFQUFBLE9BQUFBLEVBQUFILEdBQUEsT0FBQUksRUFBQSxJQUFBQyxNQUFBLHVCQUFBTCxFQUFBLFdBQUFJLEVBQUFFLEtBQUEsbUJBQUFGLEVBQUEsSUFBQUcsRUFBQVYsRUFBQUcsR0FBQSxDQUFBaEIsUUFBQSxJQUFBWSxFQUFBSSxHQUFBLEdBQUFRLEtBQUFELEVBQUF2QixRQUFBLFNBQUFXLEdBQUEsT0FBQUksRUFBQUgsRUFBQUksR0FBQSxHQUFBTCxJQUFBQSxJQUFBWSxFQUFBQSxFQUFBdkIsUUFBQVcsRUFBQUMsRUFBQUMsRUFBQUMsR0FBQSxPQUFBRCxFQUFBRyxHQUFBaEIsUUFBQSxRQUFBbUIsRUFBQSxTQUFBRCxDQUFBRixFQUFBLEVBQUFBLEVBQUFGLEVBQUFXLE9BQUFULElBQUFELEVBQUFELEVBQUFFLElBQUEsT0FBQUQsRUFBQSxFQUFBVyxFQUFBLFVBQUFSLEVBQUFqQixFQUFBRCxnQkNPQUMsRUFBT0QsUUFBVSxDQUNiMkIsWUFBYSxRQUNiQyxXQUFZLENBQ1JDLFVBQVcsSUFDWEMsUUFBUyxLQUViQyxjQUFlLENBQ1hDLFNBQVUsSUFDVkMsUUFBUyxJQUNUQyxRQUFTLEtBQ1RDLFNBQVUsT0FFZEMsUUFBUyxpQkFBTSxJQUNmQyxTQUFVLENBQ05DLE9BQVEsS0FDUkMsU0FBVSxVQUNWakIsS0FBTSxPQUVWa0IsZUFBZ0IsQ0FDWkMsbUJBQW1CLEVBQ25CQyxZQUFhLEVBQ2JDLGdCQUFnQixFQUNoQkMsU0FBUyxHQUViQyxRQUFTLENBQ0xDLFdBQVksQ0FDUkosWUFBYSxFQUNiQyxnQkFBZ0IsRUFDaEJDLFNBQVMsR0FFYkcsb0JBQXFCLENBQ2pCQyxPQUFRLFdBQ1JDLFNBQVUsRUFDVk4sZ0JBQWdCLEVBQ2hCRixtQkFBbUIsR0FFdkJTLDhCQUErQixDQUMzQkQsU0FBVSxFQUNWUixtQkFBbUIsR0FFdkJVLG1CQUFvQixDQUNoQkgsT0FBUSxXQUNSTCxnQkFBZ0IsRUFDaEJGLG1CQUFtQixFQUNuQlEsU0FBVSxrQkRuRHRCIiwic291cmNlcyI6WyJmaWxlOi8vL1VzZXJzL3dhdGVybWVsb24vUHJvamVjdHMvQXhpb20vY29kZS9heGlvbWhxLWFwcC9mcm9udGVuZC9ub2RlX21vZHVsZXMvbnVtYnJvL2Rpc3QvbGFuZ3VhZ2VzL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmaWxlOi8vL1VzZXJzL3dhdGVybWVsb24vUHJvamVjdHMvQXhpb20vY29kZS9heGlvbWhxLWFwcC9mcm9udGVuZC9ub2RlX21vZHVsZXMvbnVtYnJvL2Rpc3QvbGFuZ3VhZ2VzL2xhbmd1YWdlcy9zdi1TRS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyohXG4gKiBudW1icm8uanMgbGFuZ3VhZ2UgY29uZmlndXJhdGlvblxuICogbGFuZ3VhZ2UgOiBTd2VkaXNoXG4gKiBsb2NhbGUgOiBTd2VkZW5cbiAqIGF1dGhvciA6IEJlbmphbWluIFZhbiBSeXNlZ2hlbSAoYmVuamFtaW4udmFucnlzZWdoZW0uY29tKVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGxhbmd1YWdlVGFnOiBcInN2LVNFXCIsXG4gICAgZGVsaW1pdGVyczoge1xuICAgICAgICB0aG91c2FuZHM6IFwiIFwiLFxuICAgICAgICBkZWNpbWFsOiBcIixcIlxuICAgIH0sXG4gICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICB0aG91c2FuZDogXCJ0XCIsXG4gICAgICAgIG1pbGxpb246IFwiTVwiLFxuICAgICAgICBiaWxsaW9uOiBcIm1kXCIsXG4gICAgICAgIHRyaWxsaW9uOiBcInRtZFwiXG4gICAgfSxcbiAgICBvcmRpbmFsOiAoKSA9PiBcIlwiLFxuICAgIGN1cnJlbmN5OiB7XG4gICAgICAgIHN5bWJvbDogXCJrclwiLFxuICAgICAgICBwb3NpdGlvbjogXCJwb3N0Zml4XCIsXG4gICAgICAgIGNvZGU6IFwiU0VLXCJcbiAgICB9LFxuICAgIGN1cnJlbmN5Rm9ybWF0OiB7XG4gICAgICAgIHRob3VzYW5kU2VwYXJhdGVkOiB0cnVlLFxuICAgICAgICB0b3RhbExlbmd0aDogNCxcbiAgICAgICAgc3BhY2VTZXBhcmF0ZWQ6IHRydWUsXG4gICAgICAgIGF2ZXJhZ2U6IHRydWVcbiAgICB9LFxuICAgIGZvcm1hdHM6IHtcbiAgICAgICAgZm91ckRpZ2l0czoge1xuICAgICAgICAgICAgdG90YWxMZW5ndGg6IDQsXG4gICAgICAgICAgICBzcGFjZVNlcGFyYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGF2ZXJhZ2U6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZnVsbFdpdGhUd29EZWNpbWFsczoge1xuICAgICAgICAgICAgb3V0cHV0OiBcImN1cnJlbmN5XCIsXG4gICAgICAgICAgICBtYW50aXNzYTogMixcbiAgICAgICAgICAgIHNwYWNlU2VwYXJhdGVkOiB0cnVlLFxuICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0ZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZnVsbFdpdGhUd29EZWNpbWFsc05vQ3VycmVuY3k6IHtcbiAgICAgICAgICAgIG1hbnRpc3NhOiAyLFxuICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0ZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZnVsbFdpdGhOb0RlY2ltYWxzOiB7XG4gICAgICAgICAgICBvdXRwdXQ6IFwiY3VycmVuY3lcIixcbiAgICAgICAgICAgIHNwYWNlU2VwYXJhdGVkOiB0cnVlLFxuICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICBtYW50aXNzYTogMFxuICAgICAgICB9XG4gICAgfVxufTtcbiJdLCJuYW1lcyI6WyJmIiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImciLCJ3aW5kb3ciLCJnbG9iYWwiLCJzZWxmIiwidGhpcyIsIm51bWJybyIsInN2U0UiLCJyIiwiZSIsIm4iLCJ0IiwibyIsImkiLCJjIiwicmVxdWlyZSIsInUiLCJhIiwiRXJyb3IiLCJjb2RlIiwicCIsImNhbGwiLCJsZW5ndGgiLCIxIiwibGFuZ3VhZ2VUYWciLCJkZWxpbWl0ZXJzIiwidGhvdXNhbmRzIiwiZGVjaW1hbCIsImFiYnJldmlhdGlvbnMiLCJ0aG91c2FuZCIsIm1pbGxpb24iLCJiaWxsaW9uIiwidHJpbGxpb24iLCJvcmRpbmFsIiwiY3VycmVuY3kiLCJzeW1ib2wiLCJwb3NpdGlvbiIsImN1cnJlbmN5Rm9ybWF0IiwidGhvdXNhbmRTZXBhcmF0ZWQiLCJ0b3RhbExlbmd0aCIsInNwYWNlU2VwYXJhdGVkIiwiYXZlcmFnZSIsImZvcm1hdHMiLCJmb3VyRGlnaXRzIiwiZnVsbFdpdGhUd29EZWNpbWFscyIsIm91dHB1dCIsIm1hbnRpc3NhIiwiZnVsbFdpdGhUd29EZWNpbWFsc05vQ3VycmVuY3kiLCJmdWxsV2l0aE5vRGVjaW1hbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///47897\n");

/***/ }),

/***/ 86780:
/*!***********************************************!*\
  !*** ./node_modules/sugar-date/locales/sv.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar addLocale = __webpack_require__(/*! ../date/addLocale */ 5187);\n\n/*\n * Swedish locale definition.\n * See the readme for customization and more information.\n * To set this locale globally:\n *\n * Sugar.Date.setLocale('sv')\n *\n */\naddLocale('sv', {\n  'plural': true,\n  'units': 'millisekund:|er,sekund:|er,minut:|er,timm:e|ar,dag:|ar,veck:a|or|an,månad:|er|en+manad:|er|en,år:||et+ar:||et',\n  'months': 'jan:uari|,feb:ruari|,mar:s|,apr:il|,maj,jun:i|,jul:i|,aug:usti|,sep:tember|,okt:ober|,nov:ember|,dec:ember|',\n  'weekdays': 'sön:dag|+son:dag|,mån:dag||dagen+man:dag||dagen,tis:dag|,ons:dag|,tor:sdag|,fre:dag|,lör:dag||dag',\n  'numerals': 'noll,en|ett,två|tva,tre,fyra,fem,sex,sju,åtta|atta,nio,tio',\n  'tokens': 'den,för|for',\n  'articles': 'den',\n  'short':  '{yyyy}-{MM}-{dd}',\n  'medium': '{d} {month} {yyyy}',\n  'long':   '{d} {month} {yyyy} {time}',\n  'full':   '{weekday} {d} {month} {yyyy} {time}',\n  'stamp':  '{dow} {d} {mon} {yyyy} {time}',\n  'time':   '{H}:{mm}',\n  'past':   '{num} {unit} {sign}',\n  'future': '{sign} {num} {unit}',\n  'duration': '{num} {unit}',\n  'ampm': 'am,pm',\n  'modifiers': [\n    { 'name': 'day', 'src': 'förrgår|i förrgår|iförrgår|forrgar|i forrgar|iforrgar', 'value': -2 },\n    { 'name': 'day', 'src': 'går|i går|igår|gar|i gar|igar', 'value': -1 },\n    { 'name': 'day', 'src': 'dag|i dag|idag', 'value': 0 },\n    { 'name': 'day', 'src': 'morgon|i morgon|imorgon', 'value': 1 },\n    { 'name': 'day', 'src': 'över morgon|övermorgon|i över morgon|i övermorgon|iövermorgon|over morgon|overmorgon|i over morgon|i overmorgon|iovermorgon', 'value': 2 },\n    { 'name': 'sign', 'src': 'sedan|sen', 'value': -1 },\n    { 'name': 'sign', 'src': 'om', 'value':  1 },\n    { 'name': 'shift', 'src': 'i förra|förra|i forra|forra', 'value': -1 },\n    { 'name': 'shift', 'src': 'denna', 'value': 0 },\n    { 'name': 'shift', 'src': 'nästa|nasta', 'value': 1 }\n  ],\n  'parse': [\n    '{months} {year?}',\n    '{num} {unit} {sign}',\n    '{sign} {num} {unit}',\n    '{1?} {num} {unit} {sign}',\n    '{shift} {unit:5-7}'\n  ],\n  'timeParse': [\n    '{day|weekday}',\n    '{shift} {weekday}',\n    '{0?} {weekday?},? {date} {months?}\\\\.? {year?}'\n  ],\n  'timeFrontParse': [\n    '{day|weekday}',\n    '{shift} {weekday}',\n    '{0?} {weekday?},? {date} {months?}\\\\.? {year?}'\n  ]\n});\n\n\n// This package does not export anything as it is\n// simply registering the \"sv\" locale.//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODY3ODAuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsZ0JBQWdCLG1CQUFPLENBQUMsNkJBQW1COztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHO0FBQzdCLGNBQWMsSUFBSSxRQUFRLEtBQUs7QUFDL0IsY0FBYyxJQUFJLFFBQVEsT0FBTyxLQUFLO0FBQ3RDLGNBQWMsVUFBVSxJQUFJLFFBQVEsT0FBTyxLQUFLO0FBQ2hELGNBQWMsTUFBTSxJQUFJLE1BQU0sT0FBTyxLQUFLO0FBQzFDLGNBQWMsRUFBRSxFQUFFLEdBQUc7QUFDckIsY0FBYyxNQUFNLE9BQU8sS0FBSztBQUNoQyxjQUFjLE9BQU8sTUFBTSxLQUFLO0FBQ2hDLGdCQUFnQixNQUFNLEtBQUs7QUFDM0I7QUFDQTtBQUNBLE1BQU0sNEZBQTRGO0FBQ2xHLE1BQU0sb0VBQW9FO0FBQzFFLE1BQU0sb0RBQW9EO0FBQzFELE1BQU0sNkRBQTZEO0FBQ25FLE1BQU0saUtBQWlLO0FBQ3ZLLE1BQU0saURBQWlEO0FBQ3ZELE1BQU0sMENBQTBDO0FBQ2hELE1BQU0sb0VBQW9FO0FBQzFFLE1BQU0sNkNBQTZDO0FBQ25ELE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSxTQUFTLE1BQU07QUFDckIsTUFBTSxNQUFNLE9BQU8sS0FBSztBQUN4QixNQUFNLE9BQU8sTUFBTSxLQUFLO0FBQ3hCLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSztBQUM3QixNQUFNLFFBQVEsU0FBUztBQUN2QjtBQUNBO0FBQ0EsTUFBTSxZQUFZO0FBQ2xCLE1BQU0sUUFBUSxRQUFRO0FBQ3RCLE1BQU0sS0FBSyxTQUFTLElBQUksT0FBTyxRQUFRLE1BQU0sTUFBTTtBQUNuRDtBQUNBO0FBQ0EsTUFBTSxZQUFZO0FBQ2xCLE1BQU0sUUFBUSxRQUFRO0FBQ3RCLE1BQU0sS0FBSyxTQUFTLElBQUksT0FBTyxRQUFRLE1BQU0sTUFBTTtBQUNuRDtBQUNBLENBQUM7OztBQUdEO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvd2F0ZXJtZWxvbi9Qcm9qZWN0cy9BeGlvbS9jb2RlL2F4aW9taHEtYXBwL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9zdWdhci1kYXRlL2xvY2FsZXMvc3YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWRkTG9jYWxlID0gcmVxdWlyZSgnLi4vZGF0ZS9hZGRMb2NhbGUnKTtcblxuLypcbiAqIFN3ZWRpc2ggbG9jYWxlIGRlZmluaXRpb24uXG4gKiBTZWUgdGhlIHJlYWRtZSBmb3IgY3VzdG9taXphdGlvbiBhbmQgbW9yZSBpbmZvcm1hdGlvbi5cbiAqIFRvIHNldCB0aGlzIGxvY2FsZSBnbG9iYWxseTpcbiAqXG4gKiBTdWdhci5EYXRlLnNldExvY2FsZSgnc3YnKVxuICpcbiAqL1xuYWRkTG9jYWxlKCdzdicsIHtcbiAgJ3BsdXJhbCc6IHRydWUsXG4gICd1bml0cyc6ICdtaWxsaXNla3VuZDp8ZXIsc2VrdW5kOnxlcixtaW51dDp8ZXIsdGltbTplfGFyLGRhZzp8YXIsdmVjazphfG9yfGFuLG3DpW5hZDp8ZXJ8ZW4rbWFuYWQ6fGVyfGVuLMOlcjp8fGV0K2FyOnx8ZXQnLFxuICAnbW9udGhzJzogJ2phbjp1YXJpfCxmZWI6cnVhcml8LG1hcjpzfCxhcHI6aWx8LG1haixqdW46aXwsanVsOml8LGF1Zzp1c3RpfCxzZXA6dGVtYmVyfCxva3Q6b2Jlcnwsbm92OmVtYmVyfCxkZWM6ZW1iZXJ8JyxcbiAgJ3dlZWtkYXlzJzogJ3PDtm46ZGFnfCtzb246ZGFnfCxtw6VuOmRhZ3x8ZGFnZW4rbWFuOmRhZ3x8ZGFnZW4sdGlzOmRhZ3wsb25zOmRhZ3wsdG9yOnNkYWd8LGZyZTpkYWd8LGzDtnI6ZGFnfHxkYWcnLFxuICAnbnVtZXJhbHMnOiAnbm9sbCxlbnxldHQsdHbDpXx0dmEsdHJlLGZ5cmEsZmVtLHNleCxzanUsw6V0dGF8YXR0YSxuaW8sdGlvJyxcbiAgJ3Rva2Vucyc6ICdkZW4sZsO2cnxmb3InLFxuICAnYXJ0aWNsZXMnOiAnZGVuJyxcbiAgJ3Nob3J0JzogICd7eXl5eX0te01NfS17ZGR9JyxcbiAgJ21lZGl1bSc6ICd7ZH0ge21vbnRofSB7eXl5eX0nLFxuICAnbG9uZyc6ICAgJ3tkfSB7bW9udGh9IHt5eXl5fSB7dGltZX0nLFxuICAnZnVsbCc6ICAgJ3t3ZWVrZGF5fSB7ZH0ge21vbnRofSB7eXl5eX0ge3RpbWV9JyxcbiAgJ3N0YW1wJzogICd7ZG93fSB7ZH0ge21vbn0ge3l5eXl9IHt0aW1lfScsXG4gICd0aW1lJzogICAne0h9OnttbX0nLFxuICAncGFzdCc6ICAgJ3tudW19IHt1bml0fSB7c2lnbn0nLFxuICAnZnV0dXJlJzogJ3tzaWdufSB7bnVtfSB7dW5pdH0nLFxuICAnZHVyYXRpb24nOiAne251bX0ge3VuaXR9JyxcbiAgJ2FtcG0nOiAnYW0scG0nLFxuICAnbW9kaWZpZXJzJzogW1xuICAgIHsgJ25hbWUnOiAnZGF5JywgJ3NyYyc6ICdmw7ZycmfDpXJ8aSBmw7ZycmfDpXJ8aWbDtnJyZ8Olcnxmb3JyZ2FyfGkgZm9ycmdhcnxpZm9ycmdhcicsICd2YWx1ZSc6IC0yIH0sXG4gICAgeyAnbmFtZSc6ICdkYXknLCAnc3JjJzogJ2fDpXJ8aSBnw6VyfGlnw6VyfGdhcnxpIGdhcnxpZ2FyJywgJ3ZhbHVlJzogLTEgfSxcbiAgICB7ICduYW1lJzogJ2RheScsICdzcmMnOiAnZGFnfGkgZGFnfGlkYWcnLCAndmFsdWUnOiAwIH0sXG4gICAgeyAnbmFtZSc6ICdkYXknLCAnc3JjJzogJ21vcmdvbnxpIG1vcmdvbnxpbW9yZ29uJywgJ3ZhbHVlJzogMSB9LFxuICAgIHsgJ25hbWUnOiAnZGF5JywgJ3NyYyc6ICfDtnZlciBtb3Jnb258w7Z2ZXJtb3Jnb258aSDDtnZlciBtb3Jnb258aSDDtnZlcm1vcmdvbnxpw7Z2ZXJtb3Jnb258b3ZlciBtb3Jnb258b3Zlcm1vcmdvbnxpIG92ZXIgbW9yZ29ufGkgb3Zlcm1vcmdvbnxpb3Zlcm1vcmdvbicsICd2YWx1ZSc6IDIgfSxcbiAgICB7ICduYW1lJzogJ3NpZ24nLCAnc3JjJzogJ3NlZGFufHNlbicsICd2YWx1ZSc6IC0xIH0sXG4gICAgeyAnbmFtZSc6ICdzaWduJywgJ3NyYyc6ICdvbScsICd2YWx1ZSc6ICAxIH0sXG4gICAgeyAnbmFtZSc6ICdzaGlmdCcsICdzcmMnOiAnaSBmw7ZycmF8ZsO2cnJhfGkgZm9ycmF8Zm9ycmEnLCAndmFsdWUnOiAtMSB9LFxuICAgIHsgJ25hbWUnOiAnc2hpZnQnLCAnc3JjJzogJ2Rlbm5hJywgJ3ZhbHVlJzogMCB9LFxuICAgIHsgJ25hbWUnOiAnc2hpZnQnLCAnc3JjJzogJ27DpHN0YXxuYXN0YScsICd2YWx1ZSc6IDEgfVxuICBdLFxuICAncGFyc2UnOiBbXG4gICAgJ3ttb250aHN9IHt5ZWFyP30nLFxuICAgICd7bnVtfSB7dW5pdH0ge3NpZ259JyxcbiAgICAne3NpZ259IHtudW19IHt1bml0fScsXG4gICAgJ3sxP30ge251bX0ge3VuaXR9IHtzaWdufScsXG4gICAgJ3tzaGlmdH0ge3VuaXQ6NS03fSdcbiAgXSxcbiAgJ3RpbWVQYXJzZSc6IFtcbiAgICAne2RheXx3ZWVrZGF5fScsXG4gICAgJ3tzaGlmdH0ge3dlZWtkYXl9JyxcbiAgICAnezA/fSB7d2Vla2RheT99LD8ge2RhdGV9IHttb250aHM/fVxcXFwuPyB7eWVhcj99J1xuICBdLFxuICAndGltZUZyb250UGFyc2UnOiBbXG4gICAgJ3tkYXl8d2Vla2RheX0nLFxuICAgICd7c2hpZnR9IHt3ZWVrZGF5fScsXG4gICAgJ3swP30ge3dlZWtkYXk/fSw/IHtkYXRlfSB7bW9udGhzP31cXFxcLj8ge3llYXI/fSdcbiAgXVxufSk7XG5cblxuLy8gVGhpcyBwYWNrYWdlIGRvZXMgbm90IGV4cG9ydCBhbnl0aGluZyBhcyBpdCBpc1xuLy8gc2ltcGx5IHJlZ2lzdGVyaW5nIHRoZSBcInN2XCIgbG9jYWxlLiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///86780\n");

/***/ })

}]);