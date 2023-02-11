CREATE MIGRATION m1s6lxeppkpldehqwdcsy36zdzhegksoyz5lndgq6hn6372dehemaq
    ONTO m1wo4fprxfkv22rphhlfmdk64vszlm66n5qdkntda5i3gwlomvl2na
{
  ALTER TYPE default::TenantContact {
      ALTER PROPERTY email {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
