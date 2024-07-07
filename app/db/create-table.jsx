import { View, Text } from 'react-native'

export const CreateTable = (tableName) => {
    const db = ConnectDatabase()

    return db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS ' + tableName + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)'
        )
    });
    
}