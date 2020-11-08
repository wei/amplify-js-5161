import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Event, EventShift, EventType, Table } from './models'
import { DataStore } from 'aws-amplify';

function App() {
  const [events, setEvents] = useState()
  const [tables, setTables] = useState()

  async function fetchEvents () {
    const events = (await DataStore.query(Event));
    setEvents(events)
    console.log('Events', events)
    const tables = (await DataStore.query(Table));
    setTables(tables)
    console.log('Tables', tables)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  async function addStuff () {
    const event = await DataStore.save(
      new Event({
        name: `New title ${Date.now()}`,
        notes: "NOTES TESTING",
        type: EventType.WEDDING,
        shift: EventShift.NIGHT,
        eventDate: new Date().toISOString()
      })
    );

    const tableInput = {
      number: 1,
      seatCount: 10,
      eventID: event.id,
      event: event
    };
    const tableSAve = await DataStore.save(new Table(tableInput));
    console.log("TableSave", tableSAve);
    fetchEvents()
  }

  return (
    <div className="App">
      <h1>Events</h1>
      <pre>{JSON.stringify(events, null ,2)}</pre>
      <h1>All Tables</h1>
      <pre>{JSON.stringify(tables, null ,2)}</pre>
      <button onClick={addStuff}>Add Stuff</button>
    </div>
  );
}

export default App;
