CREATE MIGRATION m1nzwa4qteiotzvzf6tbb7x4tlbrihxapmf6bly4bsirdd5o5ws7nq
    ONTO m1qkkeeyxvjrduv47bxdi45s7o4uy37rfbknsgracavaeximk4llya
{
  ALTER TYPE default::Features {
      ALTER PROPERTY created_at {
          SET default := (std::datetime_of_statement());
      };
  };
  ALTER TYPE default::Features {
      ALTER PROPERTY updated_at {
          SET default := (std::datetime_of_statement());
      };
  };
  ALTER TYPE default::Tenant {
      ALTER PROPERTY created_at {
          SET default := (std::datetime_of_statement());
      };
  };
  ALTER TYPE default::Tenant {
      ALTER PROPERTY updated_at {
          SET default := (std::datetime_of_statement());
      };
  };
  ALTER TYPE default::TenantContact {
      ALTER PROPERTY created_at {
          SET default := (std::datetime_of_statement());
      };
  };
  ALTER TYPE default::TenantContact {
      ALTER PROPERTY updated_at {
          SET default := (std::datetime_of_statement());
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY created_at {
          SET default := (std::datetime_of_statement());
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY updated_at {
          SET default := (std::datetime_of_statement());
      };
  };
  ALTER TYPE default::UserRole {
      ALTER PROPERTY created_at {
          SET default := (std::datetime_of_statement());
      };
  };
  ALTER TYPE default::UserRole {
      ALTER PROPERTY updated_at {
          SET default := (std::datetime_of_statement());
      };
  };
};
