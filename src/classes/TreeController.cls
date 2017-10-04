public class TreeController {

 @AuraEnabled
 public static list < Account > getAcc() {

  /*list<String> ids =new list<string>();
  ids.add('0012800001YUtKV');
  ids.add('0012800001YUtJm');*/

  return [select id, Name, (select firstName, Lastname from Contacts) from Account limit 100];
 }
}