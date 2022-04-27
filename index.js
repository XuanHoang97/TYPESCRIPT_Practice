"use strict";
exports.__esModule = true;
var classImplementInterface_1 = require("./classImplementInterface");
var documenOne = new classImplementInterface_1.Invoice("Google", "work on code", 1000);
var documentTwo = new classImplementInterface_1.Payment("Amazon", "work on code", 1000);
var allDocuments = [];
allDocuments.push(documenOne);
allDocuments.push(documentTwo);
console.log(allDocuments);
