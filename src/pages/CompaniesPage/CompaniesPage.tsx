import { useState } from "react";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Drawer } from "../../components/Drawer";
import { Table } from "../../components/Table";
import {
  TableActions,
  TableContent,
  TableHeader,
  TableHeaderSection,
} from "../../components/Table/Table.styles";
import { TableRow } from "../../components/TableRow";
import { TextInput } from "../../components/TextInput";
import {
  addCompany,
  addEmployee,
  Company,
  deleteCompanies,
  deleteEmployees,
  Employee,
  updateCompany,
  updateEmployee,
} from "../../features/companies/companiesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import {
  CompaniesPageContentWrapper,
  CompaniesPageDrawerActions,
  CompaniesPageDrawerContent,
  CompaniesPageDrawerContentWrapper,
  CompaniesPageDrawerHeader,
  CompaniesPageRoot,
} from "./CompaniesPage.styles";

const newCompanyDataInitialValue: Pick<Company, "name" | "address"> = {
  name: "",
  address: "",
};

const newEmployeeDataInitialValue: Pick<Employee, "name" | "surname" | "role"> =
  {
    name: "",
    surname: "",
    role: "",
  };

export const CompaniesPage = () => {
  const companies = useAppSelector((state) => state.companies.companies);
  const dispatch = useAppDispatch();

  const [checkedCompanyIds, setCheckedCompanyIds] = useState<string[]>([]);
  const [checkedEmployeeIds, setCheckedEmployeeIds] = useState<string[]>([]);
  const [isAddCompanyDrawerOpen, setIsCompanyDrawerOpen] = useState(false);
  const [isAddEmployeeDrawerOpen, setIsEmployeeDrawerOpen] = useState(false);
  const [mode, setMode] = useState<"add" | "update">("add");

  const [toUpdateId, setToUpdateId] = useState<string | null>(null);
  const [newCompanyData, setNewCompanyData] = useState(
    newCompanyDataInitialValue
  );
  const [newEmployeeData, setNewEmployeeData] = useState(
    newEmployeeDataInitialValue
  );

  const handleToggleCompany = (companyId: string) => {
    setCheckedEmployeeIds([]);
    if (checkedCompanyIds.includes(companyId)) {
      setCheckedCompanyIds((prev) =>
        prev.filter((element) => element !== companyId)
      );
    } else {
      setCheckedCompanyIds((prev) => [...prev, companyId]);
    }
  };

  const handleToggleEmployee = (employeeId: string) => {
    if (checkedEmployeeIds.includes(employeeId)) {
      setCheckedEmployeeIds((prev) =>
        prev.filter((element) => element !== employeeId)
      );
    } else {
      setCheckedEmployeeIds((prev) => [...prev, employeeId]);
    }
  };

  const handleToggleAllCompanies = () => {
    if (checkedCompanyIds.length) setCheckedCompanyIds([]);
    else setCheckedCompanyIds([...companies.map((el) => el.id)]);
  };

  const handleToggleAllEmployees = () => {
    if (checkedEmployeeIds.length) setCheckedEmployeeIds([]);
    else {
      const currentCompany = companies.find(
        (el) => el.id === checkedCompanyIds[0]
      );
      const employeeIds = currentCompany
        ? currentCompany.emploees.map((el) => el.id)
        : [];

      setCheckedEmployeeIds(employeeIds);
    }
  };

  const handleDeleteSelectedEmployees = () => {
    dispatch(
      deleteEmployees({
        employeesIds: checkedEmployeeIds,
        companyId: checkedCompanyIds[0],
      })
    );
    setCheckedEmployeeIds([]);
  };

  const handleDeleteSelectedCompanies = () => {
    dispatch(deleteCompanies(checkedCompanyIds));
    setCheckedCompanyIds([]);
  };

  const handleAddOrUpdateCompany = () => {
    if (mode === "add") {
      dispatch(addCompany(newCompanyData));
      setNewCompanyData(newCompanyDataInitialValue);
      setIsCompanyDrawerOpen(false);
    }
    if (mode === "update" && toUpdateId) {
      dispatch(updateCompany({ ...newCompanyData, id: toUpdateId }));
      setNewCompanyData(newCompanyDataInitialValue);
      setToUpdateId(null);
      setIsCompanyDrawerOpen(false);
    }
  };

  const handleAddOrUpdateEmployee = () => {
    if (mode === "add") {
      dispatch(
        addEmployee({
          companyId: checkedCompanyIds[0],
          newEmployee: newEmployeeData,
        })
      );
      setNewEmployeeData(newEmployeeDataInitialValue);
      setIsEmployeeDrawerOpen(false);
    }
    if (mode === "update" && toUpdateId) {
      dispatch(
        updateEmployee({
          companyId: checkedCompanyIds[0],
          newEmployee: { ...newEmployeeData, id: toUpdateId },
        })
      );
      setToUpdateId(null);
      setNewEmployeeData(newEmployeeDataInitialValue);
      setIsEmployeeDrawerOpen(false);
    }
  };

  const handleOpenCompanyDrawerInEditMode = (company: Company) => {
    setMode("update");
    setToUpdateId(company.id);
    setNewCompanyData({
      name: company.name,
      address: company.address,
    });
    setIsCompanyDrawerOpen(true);
  };

  const handleOpenCompanyDrawerInAddMode = () => {
    setMode("add");
    setNewCompanyData(newCompanyDataInitialValue);
    setIsCompanyDrawerOpen(true);
  };

  const handleOpenEmployeeDrawerInEditMode = (employee: Employee) => {
    console.log(employee);

    setMode("update");
    setToUpdateId(employee.id);
    setNewEmployeeData({
      name: employee.name,
      surname: employee.surname,
      role: employee.role,
    });
    setIsEmployeeDrawerOpen(true);
  };

  const handleOpenEmployeeDrawerInAddMode = () => {
    setMode("add");
    setNewEmployeeData(newEmployeeDataInitialValue);
    setIsEmployeeDrawerOpen(true);
  };

  return (
    <CompaniesPageRoot>
      <Drawer
        side="right"
        open={isAddCompanyDrawerOpen}
        onClose={() => setIsCompanyDrawerOpen(false)}>
        <CompaniesPageDrawerContentWrapper>
          <CompaniesPageDrawerHeader>
            {mode === "add" ? "Добавить компанию" : "Обновить данные компании"}
          </CompaniesPageDrawerHeader>
          <CompaniesPageDrawerContent>
            <TextInput
              placeholder={"Название"}
              defaultValue={newCompanyData.name}
              onChange={(value) =>
                setNewCompanyData((prev) => ({ ...prev, name: value }))
              }
            />
            <TextInput
              placeholder={"Адрес"}
              defaultValue={newCompanyData.address}
              onChange={(value) =>
                setNewCompanyData((prev) => ({ ...prev, address: value }))
              }
            />
          </CompaniesPageDrawerContent>
          <CompaniesPageDrawerActions>
            <Button
              isDisabled={!(newCompanyData.name && newCompanyData.address)}
              onClick={handleAddOrUpdateCompany}>
              {mode === "add" ? "Добавить компанию" : "Обновить"}
            </Button>
            <Button
              onClick={() => setIsCompanyDrawerOpen(false)}
              variant="outlined">
              Отмена
            </Button>
          </CompaniesPageDrawerActions>
        </CompaniesPageDrawerContentWrapper>
      </Drawer>
      <Drawer
        open={isAddEmployeeDrawerOpen}
        onClose={() => setIsEmployeeDrawerOpen(false)}>
        <CompaniesPageDrawerContentWrapper>
          <CompaniesPageDrawerHeader>
            {mode === "add"
              ? "Добавить сотрудника"
              : "Обновить данные сотрудника"}
          </CompaniesPageDrawerHeader>
          <CompaniesPageDrawerContent>
            <TextInput
              placeholder={"Фамилия"}
              defaultValue={newEmployeeData.surname}
              onChange={(value) =>
                setNewEmployeeData((prev) => ({ ...prev, surname: value }))
              }
            />
            <TextInput
              placeholder={"Имя"}
              defaultValue={newEmployeeData.name}
              onChange={(value) =>
                setNewEmployeeData((prev) => ({ ...prev, name: value }))
              }
            />
            <TextInput
              placeholder={"Должность"}
              defaultValue={newEmployeeData.role}
              onChange={(value) =>
                setNewEmployeeData((prev) => ({ ...prev, role: value }))
              }
            />
          </CompaniesPageDrawerContent>
          <CompaniesPageDrawerActions>
            <Button
              onClick={handleAddOrUpdateEmployee}
              isDisabled={
                !(
                  newEmployeeData.name &&
                  newEmployeeData.surname &&
                  newEmployeeData.role
                )
              }>
              {mode === "add" ? "Добавить сотрудника" : "Обновить"}
            </Button>
            <Button
              onClick={() => setIsEmployeeDrawerOpen(false)}
              variant="outlined">
              Отмена
            </Button>
          </CompaniesPageDrawerActions>
        </CompaniesPageDrawerContentWrapper>
      </Drawer>
      <CompaniesPageContentWrapper>
        <Table>
          <TableHeader>
            <Checkbox
              onChange={handleToggleAllCompanies}
              isChecked={
                checkedCompanyIds.length === companies.length &&
                !!checkedCompanyIds.length
              }
              isSomeChecked={!!checkedCompanyIds.length}></Checkbox>
            <TableHeaderSection>Название</TableHeaderSection>
            <TableHeaderSection>Кол-во сотрудников</TableHeaderSection>
            <TableHeaderSection>Адрес</TableHeaderSection>
          </TableHeader>
          {companies && (
            <>
              <TableContent>
                {companies.map((company) => (
                  <TableRow
                    onDoubleClick={() =>
                      handleOpenCompanyDrawerInEditMode(company)
                    }
                    onToggle={() => handleToggleCompany(company.id)}
                    isChecked={checkedCompanyIds.includes(company.id)}
                    key={company.id}>
                    {company.name}
                    {company.emploees.length}
                    {company.address}
                  </TableRow>
                ))}
              </TableContent>
              <TableActions>
                <Button onClick={handleOpenCompanyDrawerInAddMode}>
                  Добавить компанию
                </Button>
                <Button
                  onClick={handleDeleteSelectedCompanies}
                  variant="outlined">
                  Удалить выбранное
                </Button>
              </TableActions>
            </>
          )}
        </Table>
        <Table>
          {checkedCompanyIds.length === 1 && (
            <>
              <TableHeader>
                <Checkbox
                  onChange={handleToggleAllEmployees}
                  isChecked={
                    checkedEmployeeIds.length ===
                      companies.find((el) => el.id === checkedCompanyIds[0])
                        ?.emploees.length && !!checkedEmployeeIds.length
                  }
                  isSomeChecked={!!checkedEmployeeIds.length}></Checkbox>
                <TableHeaderSection>Фамилия</TableHeaderSection>
                <TableHeaderSection>Имя</TableHeaderSection>
                <TableHeaderSection>Должность</TableHeaderSection>
              </TableHeader>
              <TableContent>
                {companies
                  .find((el) => el.id === checkedCompanyIds[0])
                  ?.emploees.map((employee) => (
                    <TableRow
                      onDoubleClick={() =>
                        handleOpenEmployeeDrawerInEditMode(employee)
                      }
                      isChecked={checkedEmployeeIds.includes(employee.id)}
                      key={employee.id}
                      onToggle={() => handleToggleEmployee(employee.id)}>
                      <div>{employee.surname}</div>
                      <div>{employee.name}</div>
                      <div>{employee.role}</div>
                    </TableRow>
                  ))}
              </TableContent>
              <TableActions>
                <Button onClick={handleOpenEmployeeDrawerInAddMode}>
                  Добавить сотрудника
                </Button>
                <Button
                  onClick={handleDeleteSelectedEmployees}
                  variant="outlined">
                  Удалить выбранное
                </Button>
              </TableActions>
            </>
          )}
        </Table>
      </CompaniesPageContentWrapper>
    </CompaniesPageRoot>
  );
};
