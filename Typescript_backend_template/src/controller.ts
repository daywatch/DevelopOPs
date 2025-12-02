import { Request, Response } from "express";
import { Company } from "../entity/Company";

export const CompanyController = {
  // CREATE
  async createCompany(req: Request, res: Response) {
    const { name, description, website, companySize } = req.body;
    if (!name || !description) return res.status(400).json({ error: "Missing fields" });

    const company = Company.create({ name, description, website, companySize });
    await company.save();
    return res.status(201).json(company);
  },

  // READ (Get by ID)
  async getCompanyById(req: Request, res: Response) {
    const { id } = req.params;
    const company = await Company.findOne({ where: { id } });
    if (!company) return res.status(404).json({ error: "Not found" });
    return res.json(company);
  },

  // READ (Get all)
  async getAllCompanies(req: Request, res: Response) {
    const companies = await Company.find();
    return res.json(companies);
  },

  // UPDATE
  async updateCompany(req: Request, res: Response) {
    const { id } = req.params;
    const company = await Company.findOne({ where: { id } });
    if (!company) return res.status(404).json({ error: "Not found" });

    Object.assign(company, req.body); // merge updates
    await company.save();
    return res.json(company);
  },

  // DELETE
  async deleteCompany(req: Request, res: Response) {
    const { id } = req.params;
    const company = await Company.findOne({ where: { id } });
    if (!company) return res.status(404).json({ error: "Not found" });

    await company.remove();
    return res.json({ message: "Company deleted successfully" });
  },
};
