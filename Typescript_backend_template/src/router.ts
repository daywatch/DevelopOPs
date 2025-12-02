import { Router } from "express";
import { CompanyController } from "../controller/CompanyController";

const companyRouter = Router();

companyRouter.post("/companies", CompanyController.createCompany);   // CREATE
companyRouter.get("/companies/:id", CompanyController.getCompanyById); // READ one
companyRouter.get("/companies", CompanyController.getAllCompanies); // READ all
companyRouter.put("/companies/:id", CompanyController.updateCompany); // UPDATE
companyRouter.delete("/companies/:id", CompanyController.deleteCompany); // DELETE

export default companyRouter;
