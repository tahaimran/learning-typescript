"use strict";
var resType;
(function (resType) {
    resType[resType["BOOK"] = 0] = "BOOK";
    resType[resType["AUTHOR"] = 1] = "AUTHOR";
    resType[resType["FILM"] = 2] = "FILM";
    resType[resType["DIRECTOR"] = 3] = "DIRECTOR";
    resType[resType["PERSON"] = 4] = "PERSON";
})(resType || (resType = {}));
;
const docTh = {
    uid: 1,
    resName: resType.BOOK,
    data: "When"
};
console.log(docTh);
