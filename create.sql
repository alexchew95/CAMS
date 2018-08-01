CREATE TABLE "tbl_custWork" (
"workId"INTEGER PRIMARY KEY,
"customerId"INTEGER,
"companyName"TEXT,
positionTEXT,
"officePhone"TEXT,
"faxNumber"TEXT,
"compAddr1"TEXT,
"compAddr2"TEXT,
"compCity"TEXT,
"compPostCode"NUMERIC (5),
"compState"TEXT REFERENCES "tbl_masterData" (code)
);

CREATE TABLE "tbl_salary" (
"salaryId"INTEGER PRIMARY KEY,
"customerId"INTEGER,
salaryNUMERIC(100,2),
allowanceNUMERIC(100,2),
deductionNUMERIC(20,2),
"inTransit"NUMERIC(20,2),
"amtBooked"NUMERIC(20,2),
"payslipMonth"DATE
);

CREATE TABLE tbl_loan (
"loanId"INTEGER PRIMARY KEY,
"customerId"INTEGER,
"installment"NUMERIC(20,2),
"eligibleDeduction"INTEGER,
"loanAppliedAmt"NUMERIC(100,2),
"tenure"INTEGER,
"profitRate"NUMERIC (3,2),
"approvalCode"TEXT,
"loanApprovedAmt"NUMERIC(20,2),
"invoiceAmt"NUMERIC(100,2),
"approvalDate"DATE,
"netLoanApproved"NUMERIC(100,2),
"settleOwnLoan"NUMERIC(20,2),
"marketingOfficerAdv"NUMERIC(20,2),
"companyAdv"NUMERIC(20,2),
"commissionDeductionAmt"NUMERIC(20,2),
"bankId"TEXT REFERENCES "tbl_masterData" (code),
"bankInName"TEXT,
"bankInDate"DATE,
"chequeNo"TEXT,
"reconciliationDate"DATE,
"dateToBank"DATE,
"bankRef"TEXT,
"commissionDeductionSettlement"NUMERIC(20,2)
);

CREATE TABLE tbl_remark (
"remarkId"INTEGER PRIMARY KEY,
"customerId"INTEGER,
"remarkType"TEXT,
"remarkContent"TEXT,
"user"INTEGER,
"createDateTime" timestamp ,
"completeUser"INTEGER ,
"completeDateTime" timestamp ,
"attentionTo"INTEGER,
"dateTime"DATETIME
);