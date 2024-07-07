import { View, Text } from 'react-native'
import React from 'react'
import {ConnectDatabase} from './connect'
import CreateTable from './create-table'


export const InsertRecord = (tableName, columns, values) => {
    const db = ConnectDatabase()
    CreateTable(tableName);

    return db.transaction(async (tx) => {
        await tx.executeSql(
            'INSERT INTO ' + tableName + ' (' + columns.join(', ') + ') VALUES (' + values.map(() => '?').join(', ') + ')',
            [...values]
        )
    })
}