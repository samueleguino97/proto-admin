CREATE MIGRATION m1wo4fprxfkv22rphhlfmdk64vszlm66n5qdkntda5i3gwlomvl2na
    ONTO m1of3ysxitgxcqsr7a5xquw4ejo2jjvixqsoqvaqoqi35u4z4agn6q
{
  ALTER TYPE default::User {
      CREATE PROPERTY address -> std::str;
      CREATE PROPERTY city -> std::str;
      CREATE PROPERTY country -> std::str;
      CREATE PROPERTY last_login -> std::datetime;
      CREATE PROPERTY phone -> std::str;
      CREATE REQUIRED PROPERTY status -> std::str {
          SET REQUIRED USING ('blocked');
      };
  };
};
