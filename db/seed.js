// connection to pg is already loadedin client.js.
import client from './client.js'

async function seedEmployees() {
  // TODO
  try {
    await client.connect()
    const SQL = `
    INSERT INTO employees(name, birthday, salary)
    VALUES('Kanisha Carter', '1990-10-05', 250000),
    ('Timmy Turner', '1994-09-15', 69000),
    ('Amori Carter', '2004-08-21', 150000),
    ('Jessica Simpson', '1989-12-10', 1000000),
    ('Frankie Holiday', '1986-01-01', 33000),
    ('Jill Davidson', '1957-03-19', 75000),
    ('Lonnie Johnson', '1942-06-19', 50000),
    ('Devante Berry', '1992-09-26', 300000),
    ('Danielle Williams', '1995-07-20', 500000),
    ('Jackie Smith', '1960-02-14', 88000),
    ('Donald Hanks', '1945-06-13', 111000);
    `
    const result = await client.query(SQL);
    console.log("🌱 Database seeded.");
    app.listen(3000, ()=> {
      console.log('The server is running!')
    })
  } catch(err) {
    console.log(err);
  } finally {
    // Close link to database
    await client.end();
  }
}

seedEmployees()
