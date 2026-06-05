import { z } from 'zod';

export const leadSchema = z.object({
  place_id: z.string(),
  type: z.enum([
    'whatsapp_click',
    'website_click',
    'phone_click',
    'instagram_click',
    'form',
  ]),
  source: z.enum(['tourist', 'business']),
});

export type LeadInput = z.infer<typeof leadSchema>;
