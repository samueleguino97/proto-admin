// GENERATED by @edgedb/generate v0.0.7
// Run 'npx @edgedb/generate edgeql-js' to re-generate

import * as $ from "../reflection";
import * as _ from "../imports";
import type * as _std from "./std";
export type $AccountλShape = $.typeutil.flatten<_std.$Object_008214927ccf11eda8a2756e5970bb5fλShape & {
  "closed_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "closing_balance": $.PropertyDesc<_std.$float64, $.Cardinality.One, false, false, false, true>;
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "notes": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "opened_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "opening_balance": $.PropertyDesc<_std.$float64, $.Cardinality.One, false, false, false, true>;
  "updated_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "parent_account": $.LinkDesc<$Account, $.Cardinality.One, {}, true, false,  false, false>;
  "tenant": $.LinkDesc<$Tenant, $.Cardinality.One, {}, false, false,  false, false>;
  "account_type": $.LinkDesc<$AccountType, $.Cardinality.One, {}, false, false,  false, false>;
  "from_transactions": $.LinkDesc<$AccountTransaction, $.Cardinality.Many, {}, false, true,  false, false>;
  "to_transactions": $.LinkDesc<$AccountTransaction, $.Cardinality.Many, {}, false, true,  false, false>;
  "<parent_account[is Account]": $.LinkDesc<$Account, $.Cardinality.AtMostOne, {}, true, false,  false, false>;
  "<accounts[is AccountType]": $.LinkDesc<$AccountType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<from_account[is AccountTransaction]": $.LinkDesc<$AccountTransaction, $.Cardinality.Many, {}, false, false,  false, false>;
  "<to_account[is AccountTransaction]": $.LinkDesc<$AccountTransaction, $.Cardinality.Many, {}, false, false,  false, false>;
  "<accounts": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<from_account": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<parent_account": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<to_account": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Account = $.ObjectType<"default::Account", $AccountλShape, null, [
  ..._std.$Object_008214927ccf11eda8a2756e5970bb5f['__exclusives__'],
  {parent_account: {__element__: $Account, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $Account = $.makeType<$Account>(_.spec, "a0e2ab47-aa07-11ed-9d82-91b2f79af580", _.syntax.literal);

const Account: $.$expr_PathNode<$.TypeSet<$Account, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Account, $.Cardinality.Many), null);

export type $AccountTransactionλShape = $.typeutil.flatten<_std.$Object_008214927ccf11eda8a2756e5970bb5fλShape & {
  "amount": $.PropertyDesc<_std.$float64, $.Cardinality.One, false, false, false, false>;
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "updated_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "from_account": $.LinkDesc<$Account, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "to_account": $.LinkDesc<$Account, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "tenant": $.LinkDesc<$Tenant, $.Cardinality.One, {}, false, false,  false, false>;
  "<from_transactions[is Account]": $.LinkDesc<$Account, $.Cardinality.Many, {}, false, false,  false, false>;
  "<to_transactions[is Account]": $.LinkDesc<$Account, $.Cardinality.Many, {}, false, false,  false, false>;
  "<from_transactions": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<to_transactions": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $AccountTransaction = $.ObjectType<"default::AccountTransaction", $AccountTransactionλShape, null, [
  ..._std.$Object_008214927ccf11eda8a2756e5970bb5f['__exclusives__'],
]>;
const $AccountTransaction = $.makeType<$AccountTransaction>(_.spec, "a0eed90b-aa07-11ed-a2e3-41b716a94c64", _.syntax.literal);

const AccountTransaction: $.$expr_PathNode<$.TypeSet<$AccountTransaction, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($AccountTransaction, $.Cardinality.Many), null);

export type $AccountTypeλShape = $.typeutil.flatten<_std.$Object_008214927ccf11eda8a2756e5970bb5fλShape & {
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "updated_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "description": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "tenant": $.LinkDesc<$Tenant, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "accounts": $.LinkDesc<$Account, $.Cardinality.Many, {}, false, true,  false, false>;
  "<account_type[is Account]": $.LinkDesc<$Account, $.Cardinality.Many, {}, false, false,  false, false>;
  "<account_type": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $AccountType = $.ObjectType<"default::AccountType", $AccountTypeλShape, null, [
  ..._std.$Object_008214927ccf11eda8a2756e5970bb5f['__exclusives__'],
]>;
const $AccountType = $.makeType<$AccountType>(_.spec, "a0e8f5ca-aa07-11ed-9f28-03c7a27f4c3b", _.syntax.literal);

const AccountType: $.$expr_PathNode<$.TypeSet<$AccountType, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($AccountType, $.Cardinality.Many), null);

export type $FeaturesλShape = $.typeutil.flatten<_std.$Object_008214927ccf11eda8a2756e5970bb5fλShape & {
  "description": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "display_name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "updated_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "tenants_with": $.LinkDesc<$Tenant, $.Cardinality.Many, {}, false, true,  false, false>;
  "<features[is Tenant]": $.LinkDesc<$Tenant, $.Cardinality.Many, {}, false, false,  false, false>;
  "<features": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Features = $.ObjectType<"default::Features", $FeaturesλShape, null, [
  ..._std.$Object_008214927ccf11eda8a2756e5970bb5f['__exclusives__'],
]>;
const $Features = $.makeType<$Features>(_.spec, "eb26d30b-a94a-11ed-b737-d1eb7b2c8d0f", _.syntax.literal);

const Features: $.$expr_PathNode<$.TypeSet<$Features, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Features, $.Cardinality.Many), null);

export type $TenantλShape = $.typeutil.flatten<_std.$Object_008214927ccf11eda8a2756e5970bb5fλShape & {
  "address": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "city": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "country": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "updated_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "features": $.LinkDesc<$Features, $.Cardinality.Many, {}, false, false,  false, false>;
  "contacts": $.LinkDesc<$TenantContact, $.Cardinality.Many, {}, true, false,  false, false>;
  "users": $.LinkDesc<$User, $.Cardinality.Many, {}, true, false,  false, false>;
  "<tenants_with[is Features]": $.LinkDesc<$Features, $.Cardinality.Many, {}, false, false,  false, false>;
  "<tenant[is TenantContact]": $.LinkDesc<$TenantContact, $.Cardinality.Many, {}, false, false,  false, false>;
  "<tenant[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<tenant[is UserRole]": $.LinkDesc<$UserRole, $.Cardinality.Many, {}, false, false,  false, false>;
  "<tenant[is Account]": $.LinkDesc<$Account, $.Cardinality.Many, {}, false, false,  false, false>;
  "<tenant[is AccountType]": $.LinkDesc<$AccountType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<tenant[is AccountTransaction]": $.LinkDesc<$AccountTransaction, $.Cardinality.Many, {}, false, false,  false, false>;
  "<tenant": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<tenants_with": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Tenant = $.ObjectType<"default::Tenant", $TenantλShape, null, [
  ..._std.$Object_008214927ccf11eda8a2756e5970bb5f['__exclusives__'],
  {users: {__element__: $User, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
  {contacts: {__element__: $TenantContact, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $Tenant = $.makeType<$Tenant>(_.spec, "eb294147-a94a-11ed-a0be-fb1616bf324d", _.syntax.literal);

const Tenant: $.$expr_PathNode<$.TypeSet<$Tenant, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Tenant, $.Cardinality.Many), null);

export type $TenantContactλShape = $.typeutil.flatten<_std.$Object_008214927ccf11eda8a2756e5970bb5fλShape & {
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "phone": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "updated_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "tenant": $.LinkDesc<$Tenant, $.Cardinality.One, {}, false, false,  false, false>;
  "<contacts[is Tenant]": $.LinkDesc<$Tenant, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "<contacts": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $TenantContact = $.ObjectType<"default::TenantContact", $TenantContactλShape, null, [
  ..._std.$Object_008214927ccf11eda8a2756e5970bb5f['__exclusives__'],
  {email: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $TenantContact = $.makeType<$TenantContact>(_.spec, "eb2e272c-a94a-11ed-a0c8-3b354186d93b", _.syntax.literal);

const TenantContact: $.$expr_PathNode<$.TypeSet<$TenantContact, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($TenantContact, $.Cardinality.Many), null);

export type $UserλShape = $.typeutil.flatten<_std.$Object_008214927ccf11eda8a2756e5970bb5fλShape & {
  "email": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "password": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "updated_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "reset_password_sent_at": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "reset_password_token": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "salt": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "address": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "city": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "country": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "last_login": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "phone": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "status": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, true>;
  "tenant": $.LinkDesc<$Tenant, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "user_role": $.LinkDesc<$UserRole, $.Cardinality.One, {}, false, false,  false, false>;
  "<users[is Tenant]": $.LinkDesc<$Tenant, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "<assigned_to[is UserRole]": $.LinkDesc<$UserRole, $.Cardinality.Many, {}, false, false,  false, false>;
  "<assigned_to": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
  "<users": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $User = $.ObjectType<"default::User", $UserλShape, null, [
  ..._std.$Object_008214927ccf11eda8a2756e5970bb5f['__exclusives__'],
  {email: {__element__: _std.$str, __cardinality__: $.Cardinality.One | $.Cardinality.AtMostOne },},
]>;
const $User = $.makeType<$User>(_.spec, "eb31f5ef-a94a-11ed-b371-67537e22ebad", _.syntax.literal);

const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null);

export type $UserRoleλShape = $.typeutil.flatten<_std.$Object_008214927ccf11eda8a2756e5970bb5fλShape & {
  "description": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "created_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "updated_at": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, true>;
  "tenant": $.LinkDesc<$Tenant, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "assigned_to": $.LinkDesc<$User, $.Cardinality.Many, {}, false, true,  false, false>;
  "<user_role[is User]": $.LinkDesc<$User, $.Cardinality.Many, {}, false, false,  false, false>;
  "<user_role": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $UserRole = $.ObjectType<"default::UserRole", $UserRoleλShape, null, [
  ..._std.$Object_008214927ccf11eda8a2756e5970bb5f['__exclusives__'],
]>;
const $UserRole = $.makeType<$UserRole>(_.spec, "eb365519-a94a-11ed-bcfe-fb8dc85fccbb", _.syntax.literal);

const UserRole: $.$expr_PathNode<$.TypeSet<$UserRole, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($UserRole, $.Cardinality.Many), null);



export { $Account, Account, $AccountTransaction, AccountTransaction, $AccountType, AccountType, $Features, Features, $Tenant, Tenant, $TenantContact, TenantContact, $User, User, $UserRole, UserRole };

type __defaultExports = {
  "Account": typeof Account;
  "AccountTransaction": typeof AccountTransaction;
  "AccountType": typeof AccountType;
  "Features": typeof Features;
  "Tenant": typeof Tenant;
  "TenantContact": typeof TenantContact;
  "User": typeof User;
  "UserRole": typeof UserRole
};
const __defaultExports: __defaultExports = {
  "Account": Account,
  "AccountTransaction": AccountTransaction,
  "AccountType": AccountType,
  "Features": Features,
  "Tenant": Tenant,
  "TenantContact": TenantContact,
  "User": User,
  "UserRole": UserRole
};
export default __defaultExports;
