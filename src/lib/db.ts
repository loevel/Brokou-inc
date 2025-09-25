
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

  // Seed data if the table is empty
  const count = db.prepare('SELECT COUNT(*) as count FROM job_offers').get() as { count: number };
  if (count.count === 0) {
    const insert = db.prepare(`
      INSERT INTO job_offers (
        id, title, location, type, description, mode, validityDate, introduction, 
        activities, deliverables, requirements, remuneration, status, startDate, socialBenefits
      ) VALUES (
        @id, @title, @location, @type, @description, @mode, @validityDate, @introduction, 
        @activities, @deliverables, @requirements, @remuneration, @status, @startDate, @socialBenefits
      )
    `);

    const insertMany = db.transaction((offers) => {
      for (const offer of offers) {
        insert.run({
            ...offer,
            activities: JSON.stringify(offer.activities),
            deliverables: JSON.stringify(offer.deliverables),
            requirements: JSON.stringify(offer.requirements),
            socialBenefits: offer.socialBenefits ? 1 : 0
        });
      }
    });

    insertMany(initialJobOffers);
    console.log('Database seeded with initial job offers.');
  }
}

initializeDb();

export default db;
