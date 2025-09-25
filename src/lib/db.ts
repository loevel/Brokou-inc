
import Database from 'better-sqlite3';
import { jobOffers as initialJobOffers } from '@/lib/data';

const db = new Database('app.db', { verbose: console.log });

function initializeDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS job_offers (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      location TEXT NOT NULL,
      type TEXT NOT NULL,
      description TEXT NOT NULL,
      mode TEXT NOT NULL,
      validityDate TEXT NOT NULL,
      introduction TEXT NOT NULL,
      activities TEXT NOT NULL,
      deliverables TEXT NOT NULL,
      requirements TEXT NOT NULL,
      remuneration TEXT NOT NULL,
      status TEXT NOT NULL,
      startDate TEXT NOT NULL,
      socialBenefits INTEGER NOT NULL
    );
  `);

  // Add duration_months column if it doesn't exist
  const columns: { name: string }[] = db.pragma('table_info(job_offers)');
  if (!columns.some(col => col.name === 'duration_months')) {
    db.exec('ALTER TABLE job_offers ADD COLUMN duration_months INTEGER');
  }

  // Add isActive column if it doesn't exist
  if (!columns.some(col => col.name === 'isActive')) {
    db.exec('ALTER TABLE job_offers ADD COLUMN isActive INTEGER DEFAULT 1');
  }


  // Seed data if the table is empty
  const count = db.prepare('SELECT COUNT(*) as count FROM job_offers').get() as { count: number };
  if (count.count === 0) {
    const insert = db.prepare(`
      INSERT INTO job_offers (
        id, title, location, type, description, mode, validityDate, introduction, 
        activities, deliverables, requirements, remuneration, status, startDate, socialBenefits,
        duration_months, isActive
      ) VALUES (
        @id, @title, @location, @type, @description, @mode, @validityDate, @introduction, 
        @activities, @deliverables, @requirements, @remuneration, @status, @startDate, @socialBenefits,
        @duration_months, @isActive
      )
    `);

    const insertMany = db.transaction((offers) => {
      let counter = 1;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for (const offer of offers) {
         const paddedNumber = counter.toString().padStart(4, '0');
         let randomLetters = '';
         for (let i = 0; i < 2; i++) {
            randomLetters += characters.charAt(Math.floor(Math.random() * characters.length));
         }
        const newId = `BRK${paddedNumber}${randomLetters}`;
        counter++;

        insert.run({
            ...offer,
            id: newId, // Use the new generated ID
            activities: JSON.stringify(offer.activities),
            deliverables: JSON.stringify(offer.deliverables),
            requirements: JSON.stringify(offer.requirements),
            socialBenefits: offer.socialBenefits ? 1 : 0,
            duration_months: offer.duration_months || null,
            isActive: 1 // Default to active
        });
      }
    });

    // We remove the id from the initial data so it can be generated
    const offersToSeed = initialJobOffers.map(({ id, ...rest }) => rest);
    insertMany(offersToSeed);

    console.log('Database seeded with initial job offers.');
  }
}

initializeDb();

export default db;
