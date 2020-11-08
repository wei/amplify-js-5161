export const schema = {
    "models": {
        "Event": {
            "name": "Event",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tables": {
                    "name": "tables",
                    "isArray": true,
                    "type": {
                        "model": "Table"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "event"
                    }
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "EventType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "eventDate": {
                    "name": "eventDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "shift": {
                    "name": "shift",
                    "isArray": false,
                    "type": {
                        "enum": "EventShift"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Events",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Table": {
            "name": "Table",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "number": {
                    "name": "number",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "seatCount": {
                    "name": "seatCount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "event": {
                    "name": "event",
                    "isArray": false,
                    "type": {
                        "model": "Event"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "tableEventId"
                    }
                },
                "eventID": {
                    "name": "eventID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Tables",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {
        "EventType": {
            "name": "EventType",
            "values": [
                "WEDDING"
            ]
        },
        "EventShift": {
            "name": "EventShift",
            "values": [
                "NIGHT"
            ]
        }
    },
    "nonModels": {},
    "version": "d7e5006bca0495eef9c9eb15d759b105"
};