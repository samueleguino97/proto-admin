CREATE MIGRATION m1p3wzn7ei37vkgb743xejakbvtnxpohu2quoustvajb6fbhwichea
    ONTO m1s6lxeppkpldehqwdcsy36zdzhegksoyz5lndgq6hn6372dehemaq
{
  ALTER TYPE default::User {
      ALTER PROPERTY status {
          SET default := 'unactive';
      };
  };
};
