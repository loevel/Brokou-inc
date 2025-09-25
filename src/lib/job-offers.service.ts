
'use server';

import db from './db';
import type { JobOffer } from './types';
import { revalidatePath } from 'next/cache';

function rowToJobOffer(row: any): JobOffer {
    if (!row) return row;
    return {
        ...row,
        activities: JSON.parse(row.activities),
        deliverables: JSON.parse(row.deliverables),
        requirements: JSON.parse(row.requirements),
        socialBenefits: Boolean(row.socialBenefits),
    };
}


export async function getAllJobOffers(): Promise<JobOffer[]> {
    try {
        const stmt = db.prepare('SELECT * FROM job_offers ORDER BY validityDate DESC');
        const rows = stmt.all() as any[];
        return rows.map(rowToJobOffer);
    } catch (error) {
        console.error('Failed to fetch job offers:', error);
        return [];
    }
}

export async function getJobOfferById(id: string): Promise<JobOffer | null> {
    try {
        const stmt = db.prepare('SELECT * FROM job_offers WHERE id = ?');
        const row = stmt.get(id) as any;
        return row ? rowToJobOffer(row) : null;
    } catch (error) {
        console.error(`Failed to fetch job offer with id ${id}:`, error);
        return null;
    }
}

export async function getTotalJobOffers(): Promise<number> {
    try {
        const stmt = db.prepare('SELECT COUNT(*) as count FROM job_offers');
        const result = stmt.get() as { count: number };
        return result.count;
    } catch (error) {
        console.error('Failed to get total job offers:', error);
        return 0;
    }
}

export async function createJobOffer(offer: Omit<JobOffer, 'id'>): Promise<JobOffer> {
    const newId = `offer-${Date.now()}`;
    const newOffer: JobOffer = { id: newId, ...offer };
    
    try {
        const stmt = db.prepare(`
            INSERT INTO job_offers (
                id, title, location, type, description, mode, validityDate, introduction, 
                activities, deliverables, requirements, remuneration, status, startDate, socialBenefits
            ) VALUES (
                @id, @title, @location, @type, @description, @mode, @validityDate, @introduction, 
                @activities, @deliverables, @requirements, @remuneration, @status, @startDate, @socialBenefits
            )
        `);

        stmt.run({
            ...newOffer,
            activities: JSON.stringify(newOffer.activities),
            deliverables: JSON.stringify(newOffer.deliverables),
            requirements: JSON.stringify(newOffer.requirements),
            socialBenefits: newOffer.socialBenefits ? 1 : 0
        });

        revalidatePath('/admin/offres');
        revalidatePath('/carrieres');
        revalidatePath('/');
        return newOffer;
    } catch (error) {
        console.error('Failed to create job offer:', error);
        throw new Error('Failed to create job offer.');
    }
}

export async function updateJobOffer(id: string, offer: Omit<JobOffer, 'id'>): Promise<JobOffer> {
    const updatedOffer: JobOffer = { id, ...offer };
     try {
        const stmt = db.prepare(`
            UPDATE job_offers
            SET 
                title = @title, location = @location, type = @type, description = @description, 
                mode = @mode, validityDate = @validityDate, introduction = @introduction, 
                activities = @activities, deliverables = @deliverables, requirements = @requirements, 
                remuneration = @remuneration, status = @status, startDate = @startDate, 
                socialBenefits = @socialBenefits
            WHERE id = @id
        `);

        stmt.run({
            ...updatedOffer,
            activities: JSON.stringify(updatedOffer.activities),
            deliverables: JSON.stringify(updatedOffer.deliverables),
            requirements: JSON.stringify(updatedOffer.requirements),
            socialBenefits: updatedOffer.socialBenefits ? 1 : 0
        });

        revalidatePath('/admin/offres');
        revalidatePath('/carrieres');
        revalidatePath(`/carrieres/${id}`);
        revalidatePath('/');
        return updatedOffer;
    } catch (error) {
        console.error(`Failed to update job offer with id ${id}:`, error);
        throw new Error('Failed to update job offer.');
    }
}

export async function deleteJobOffer(id: string): Promise<{ success: boolean }> {
    try {
        const stmt = db.prepare('DELETE FROM job_offers WHERE id = ?');
        const result = stmt.run(id);

        if (result.changes === 0) {
            throw new Error('Job offer not found.');
        }

        revalidatePath('/admin/offres');
        revalidatePath('/carrieres');
        revalidatePath(`/carrieres/${id}`);
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error(`Failed to delete job offer with id ${id}:`, error);
        throw new Error('Failed to delete job offer.');
    }
}