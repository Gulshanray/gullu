import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReviewSchema, insertContactSchema } from "@shared/schema";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// Initialize Google Sheets
const initGoogleSheets = async () => {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID || '', serviceAccountAuth);
    await doc.loadInfo();
    return doc;
  } catch (error) {
    console.error('Failed to initialize Google Sheets:', error);
    return null;
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  const googleDoc = await initGoogleSheets();

  // Get all reviews
  app.get("/api/reviews", async (req, res) => {
    try {
      const reviews = await storage.getAllReviews();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  });

  // Create new review
  app.post("/api/reviews", async (req, res) => {
    try {
      const validatedData = insertReviewSchema.parse(req.body);
      const review = await storage.createReview(validatedData);
      res.status(201).json(review);
    } catch (error) {
      res.status(400).json({ message: "Invalid review data" });
    }
  });

  // Create contact submission with Google Sheets integration
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);

      // Store in Google Sheets if available
      if (googleDoc) {
        try {
          const sheet = googleDoc.sheetsByIndex[0];
          await sheet.addRow({
            'First Name': validatedData.firstName,
            'Last Name': validatedData.lastName,
            'Email': validatedData.email,
            'Phone': validatedData.phone || '',
            'Service': validatedData.service,
            'Message': validatedData.message,
            'Timestamp': new Date().toISOString(),
          });
        } catch (sheetError) {
          console.error('Failed to save to Google Sheets:', sheetError);
          // Continue with local storage even if Google Sheets fails
        }
      }

      res.status(201).json(contact);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
