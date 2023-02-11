CREATE MIGRATION m1qkkeeyxvjrduv47bxdi45s7o4uy37rfbknsgracavaeximk4llya
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::Features {
      CREATE REQUIRED PROPERTY created_at -> std::datetime;
      CREATE REQUIRED PROPERTY description -> std::str;
      CREATE REQUIRED PROPERTY display_name -> std::str;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY updated_at -> std::datetime;
  };
  CREATE TYPE default::Tenant {
      CREATE MULTI LINK features -> default::Features;
      CREATE REQUIRED PROPERTY address -> std::str;
      CREATE REQUIRED PROPERTY city -> std::str;
      CREATE REQUIRED PROPERTY country -> std::str;
      CREATE REQUIRED PROPERTY created_at -> std::datetime;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY updated_at -> std::datetime;
  };
  ALTER TYPE default::Features {
      CREATE MULTI LINK tenants_with := (.<features[IS default::Tenant]);
  };
  CREATE TYPE default::TenantContact {
      CREATE REQUIRED LINK tenant -> default::Tenant;
      CREATE REQUIRED PROPERTY created_at -> std::datetime;
      CREATE REQUIRED PROPERTY email -> std::str;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY phone -> std::str;
      CREATE REQUIRED PROPERTY updated_at -> std::datetime;
  };
  ALTER TYPE default::Tenant {
      CREATE MULTI LINK contacts -> default::TenantContact {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE default::User {
      CREATE LINK tenant -> default::Tenant;
      CREATE REQUIRED PROPERTY created_at -> std::datetime;
      CREATE REQUIRED PROPERTY email -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY password -> std::str;
      CREATE REQUIRED PROPERTY updated_at -> std::datetime;
  };
  ALTER TYPE default::Tenant {
      CREATE MULTI LINK users -> default::User {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE default::UserRole {
      CREATE LINK tenant -> default::Tenant;
      CREATE REQUIRED PROPERTY created_at -> std::datetime;
      CREATE REQUIRED PROPERTY description -> std::str;
      CREATE REQUIRED PROPERTY name -> std::str;
      CREATE REQUIRED PROPERTY updated_at -> std::datetime;
  };
  ALTER TYPE default::User {
      CREATE REQUIRED LINK user_role -> default::UserRole;
  };
  ALTER TYPE default::UserRole {
      CREATE MULTI LINK assigned_to := (.<user_role[IS default::User]);
  };
};
