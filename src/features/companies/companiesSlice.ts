import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Employee {
  id: string;
  name: string;
  surname: string;
  role: string;
}

export interface Company {
  id: string;
  name: string;
  address: string;
  emploees: Employee[];
}

export interface CompaniesState {
  companies: Company[];
}

const initialState: CompaniesState = {
  companies: [
    {
      id: "d0c9841b-26fa-4392-9aa4-8c5212cef06f",
      name: "First Company",
      address: "г.Москва, Базовская улица",
      emploees: [
        {
          name: "Виталий",
          surname: "Жданов",
          id: "e631ddd0-9f97-4eb4-8d04-5d23c88fd1ed",
          role: "продавец",
        },
        {
          name: "Валерий",
          surname: "Лопанов",
          id: "789133f7-9523-4393-b91c-b2970a082f88",
          role: "продавец",
        },
        {
          name: "Анатолий",
          surname: "Кравченко",
          id: "40ac2dc3-7fa0-42be-8711-8c2094df4f27",
          role: "продавец",
        },
        {
          name: "Илья",
          surname: "Норин",
          id: "87381b5d-a6ba-4ce9-a89e-c4efe95843dc",
          role: "руководитель",
        },
        {
          name: "Дмитрий",
          surname: "Пучков",
          id: "8e7b9ba6-a9ba-4ca6-a1ab-f9603a1eb900",
          role: "директор",
        },
        {
          name: "Александр",
          surname: "Штефанов",
          id: "d6e1a6f5-24de-4c0c-b026-97fc4b439112",
          role: "руководитель",
        },
      ],
    },
    {
      id: "50a1b339-97df-4e61-89b0-8e4dfe7c4783",
      name: "Second company",
      address: "г.Санкт-Петербург, пр.Невский 2",
      emploees: [
        {
          name: "Владимир",
          surname: "Жуковский",
          id: "81ca5ff7-55d1-47be-b733-256e402026a5",
          role: "директор",
        },
        {
          name: "Николай",
          surname: "Ладин",
          id: "c6a15685-f51a-4b76-b17b-262fad7be8d0",
          role: "продавец",
        },
      ],
    },
    {
      id: "fdb8a9f9-b94f-432e-8ff1-cbb1520df434",
      name: "Third company",
      address: "г.Астрахань, ул.Моздокская 5",
      emploees: [],
    },
  ],
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addCompany: (
      state,
      action: PayloadAction<Pick<Company, "name" | "address">>
    ) => {
      if (action.payload.name.trim() && action.payload.address.trim())
        state.companies.push({ ...action.payload, id: uuidv4(), emploees: [] });
    },
    updateCompany: (
      state,
      action: PayloadAction<Pick<Company, "name" | "address" | "id">>
    ) => {
      if (
        action.payload.name.trim() &&
        action.payload.address.trim() &&
        action.payload.id.trim()
      ) {
        const company = state.companies.find(
          (el) => el.id === action.payload.id
        );
        if (company) {
          company.name = action.payload.name;
          company.address = action.payload.address;
        }
      }
    },
    addEmployee: (
      state,
      action: PayloadAction<{
        newEmployee: Pick<Employee, "name" | "surname" | "role">;
        companyId: string;
      }>
    ) => {
      const { newEmployee, companyId } = action.payload;
      if (
        newEmployee.name.trim() &&
        newEmployee.surname.trim() &&
        newEmployee.role.trim()
      )
        state.companies
          .find((el) => el.id === companyId)
          ?.emploees.push({ ...action.payload.newEmployee, id: uuidv4() });
    },
    updateEmployee: (
      state,
      action: PayloadAction<{
        newEmployee: Pick<Employee, "name" | "surname" | "role" | "id">;
        companyId: string;
      }>
    ) => {
      const { newEmployee, companyId } = action.payload;
      if (
        newEmployee.name.trim() &&
        newEmployee.surname.trim() &&
        newEmployee.role.trim() &&
        newEmployee.id.trim()
      ) {
        const employee = state.companies
          .find((el) => el.id === companyId)
          ?.emploees.find((el) => el.id === newEmployee.id);
        if (employee) {
          employee.name = newEmployee.name;
          employee.surname = newEmployee.surname;
          employee.role = newEmployee.role;
        }
      }
    },
    deleteCompanies: (state, action: PayloadAction<string[]>) => {
      state.companies = state.companies.filter(
        (company) => !action.payload.includes(company.id)
      );
    },
    deleteEmployees: (
      state,
      action: PayloadAction<{ companyId: string; employeesIds: string[] }>
    ) => {
      state.companies = state.companies.map((company) => {
        if (company.id !== action.payload.companyId) return company;
        company.emploees = company.emploees.filter(
          (employee) => !action.payload.employeesIds.includes(employee.id)
        );
        return company;
      });
    },
  },
});

export const {
  addCompany,
  addEmployee,
  updateCompany,
  updateEmployee,
  deleteCompanies,
  deleteEmployees,
} = companiesSlice.actions;

export default companiesSlice.reducer;
