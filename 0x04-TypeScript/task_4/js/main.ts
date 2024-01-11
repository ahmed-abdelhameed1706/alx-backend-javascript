/// <reference path='./crud.d.ts' />

import * as CRUD from './crud'
import { RowID, RowElement } from './interface'

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const rowID: RowID = CRUD.insertRow(row)

const updatedRow : RowElement = {
    ...row,
    age: 25,
}

console.log(CRUD.updateRow(rowID, updatedRow))
console.log(CRUD.deleteRow(rowID))
