import { Invoice, Payment } from "./classImplementInterface";
import { hasPrint } from "./interfaceForClass";

const documenOne: hasPrint = new Invoice("Google", "work on code", 1000);
const documentTwo: hasPrint = new Payment("Amazon", "work on code", 1000);

const allDocuments: hasPrint[] = [];
allDocuments.push(documenOne);
allDocuments.push(documentTwo);

console.log(allDocuments);