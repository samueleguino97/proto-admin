CREATE MIGRATION m1q5wfmwaqdpiec5hoq6unvzzqhe4mxuv3ojjbbvgd3f4sergrrxtq
    ONTO m1wxwixhhuc3nynfyau6c5gzjspzsbt4qklbuwhziocoqxr2j6crba
{
  CREATE TYPE default::Account {
      CREATE REQUIRED LINK parent_account -> default::Account {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE REQUIRED LINK tenant -> default::Tenant;
      CREATE REQUIRED PROPERTY closed_at -> std::datetime {
          SET default := (std::datetime_of_statement());
      };
      CREATE REQUIRED PROPERTY closing_balance -> std::float64 {
          SET default := 0.0;
      };
      CREATE REQUIRED PROPERTY created_at -> std::datetime {
          SET default := (std::datetime_of_statement());
      };
      CREATE REQUIRED PROPERTY description -> std::str;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE PROPERTY notes -> std::str;
      CREATE REQUIRED PROPERTY opened_at -> std::datetime {
          SET default := (std::datetime_of_statement());
      };
      CREATE REQUIRED PROPERTY opening_balance -> std::float64 {
          SET default := 0.0;
      };
      CREATE REQUIRED PROPERTY updated_at -> std::datetime {
          SET default := (std::datetime_of_statement());
      };
  };
  CREATE TYPE default::AccountType {
      CREATE LINK tenant -> default::Tenant;
      CREATE REQUIRED PROPERTY created_at -> std::datetime {
          SET default := (std::datetime_of_statement());
      };
      CREATE REQUIRED PROPERTY description -> std::str;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY updated_at -> std::datetime {
          SET default := (std::datetime_of_statement());
      };
  };
  ALTER TYPE default::Account {
      CREATE REQUIRED LINK account_type -> default::AccountType;
  };
  ALTER TYPE default::AccountType {
      CREATE MULTI LINK accounts := (.<account_type[IS default::Account]);
  };
  CREATE TYPE default::AccountTransaction {
      CREATE LINK from_account -> default::Account;
      CREATE LINK to_account -> default::Account;
      CREATE REQUIRED LINK tenant -> default::Tenant;
      CREATE REQUIRED PROPERTY amount -> std::float64;
      CREATE REQUIRED PROPERTY created_at -> std::datetime {
          SET default := (std::datetime_of_statement());
      };
      CREATE PROPERTY description -> std::str;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY updated_at -> std::datetime {
          SET default := (std::datetime_of_statement());
      };
  };
  ALTER TYPE default::Account {
      CREATE MULTI LINK from_transactions := (.<from_account[IS default::AccountTransaction]);
      CREATE MULTI LINK to_transactions := (.<to_account[IS default::AccountTransaction]);
  };
};
