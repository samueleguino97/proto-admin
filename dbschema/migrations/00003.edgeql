CREATE MIGRATION m1of3ysxitgxcqsr7a5xquw4ejo2jjvixqsoqvaqoqi35u4z4agn6q
    ONTO m1nzwa4qteiotzvzf6tbb7x4tlbrihxapmf6bly4bsirdd5o5ws7nq
{
  ALTER TYPE default::User {
      ALTER PROPERTY password {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::User {
      CREATE PROPERTY reset_password_sent_at -> std::datetime;
  };
  ALTER TYPE default::User {
      CREATE PROPERTY reset_password_token -> std::str;
  };
  ALTER TYPE default::User {
      CREATE PROPERTY salt -> std::str;
  };
};
