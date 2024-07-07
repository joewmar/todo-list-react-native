import SQLite from "react-native-sqlite-storage"

// Enable promise for SQLite
SQLite.enablePromise(true)

export const ConnectDatabase = () => {
    return SQLite.openDatabase(
        { 
            name: 'todos', 
            location: 'default' 
        },
        () => {},
        (error) => {
            console.error(error)
            throw Error("Could not connect to database")
        }
    )
  }

