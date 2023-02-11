module default {
  
    type Tenant {
        required property name -> str;
        required property created_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        required property updated_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        multi link contacts -> TenantContact {
            constraint exclusive;
        };
        required property address -> str;
        required property city -> str;
        required property country -> str;
        multi link features -> Features;
        multi link users -> User {
            constraint exclusive;
        };
        
        
        


    }

    type TenantContact {
        required property name -> str;
        required property email -> str {
    constraint exclusive;
  };
        required property phone -> str;
        required property created_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        required property updated_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        required link tenant -> Tenant;
        
    }

    type Features {
        required property name -> str;
        required property description -> str;
        required property display_name -> str;
        required property created_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        required property updated_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        multi link tenants_with := .<features[is Tenant];
        
    }

    type User {
        required property name -> str;
        required property email -> str { constraint exclusive; };
        property password -> str;
        property salt -> str;
        property reset_password_token -> str;
        property reset_password_sent_at -> datetime; 
        required property created_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        required property updated_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        required link user_role -> UserRole;
        link tenant -> Tenant;
        required property status -> str {
            default := 'pending' # non-volatile
        };;
        property phone -> str;
        property address -> str;
        property city -> str;
        property country -> str;
        property last_login -> datetime;
    }

    type UserRole {
        required property name -> str;
        required property description -> str;
        required property created_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        required property updated_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        multi link assigned_to := .<user_role[is User];
        link tenant -> Tenant;
        
        
    }





    #Accounting Module
    type Account {
        required property name -> str;
        required property description -> str;
        property notes -> str;


        
        required property opening_balance -> float64 {
            default := 0.0 # non-volatile
        };
        required property closing_balance -> float64 {
            default := 0.0 # non-volatile
        };
        required property opened_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        required property closed_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };

        required property created_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        required property updated_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };

        multi link from_transactions := .<from_account[is AccountTransaction];
        multi link to_transactions := .<to_account[is AccountTransaction];
        
            
            
        

        required link parent_account -> Account {
            constraint exclusive;
        };
        required link account_type -> AccountType;
        required link tenant -> Tenant;

    }

    type AccountType {
        required property name -> str;
        required property description -> str;
        required property created_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        required property updated_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        multi link accounts := .<account_type[is Account];
        link tenant -> Tenant;
    }

    type AccountTransaction {
        required property name -> str;
        property description -> str;
        required property amount -> float64;
        required property created_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };
        required property updated_at -> datetime {
            default := datetime_of_statement() # non-volatile
        };     
        required link tenant -> Tenant;
        link from_account -> Account;
        link to_account -> Account;

    }







}