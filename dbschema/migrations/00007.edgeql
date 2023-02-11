CREATE MIGRATION m1wxwixhhuc3nynfyau6c5gzjspzsbt4qklbuwhziocoqxr2j6crba
    ONTO m1p3wzn7ei37vkgb743xejakbvtnxpohu2quoustvajb6fbhwichea
{
  ALTER TYPE default::User {
      ALTER PROPERTY status {
          SET default := 'pending';
      };
  };
};
