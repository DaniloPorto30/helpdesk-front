// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  addtURL : 'https://myhelpdesk-api.herokuapp.com/tec/addTecnico',
  gettURL : 'https://myhelpdesk-api.herokuapp.com/tec/getAll',
  updattUrl : 'https://myhelpdesk-api.herokuapp.com/tec/updateTecnico',
  delettUrl : 'https://myhelpdesk-api.herokuapp.com/tec/deleteTecnicoById',

  addcURL : 'https://myhelpdesk-api.herokuapp.com/cli/addCliente',
  getcURL : 'https://myhelpdesk-api.herokuapp.com/cli/getAll',
   updatecUrl : 'https://myhelpdesk-api.herokuapp.com/cli/updateCliente',
   deletecUrl : 'https://myhelpdesk-api.herokuapp.com/cli/deleteClienteById',

   addchURL : 'https://myhelpdesk-api.herokuapp.com/cha/addChamado',
   getchURL : 'https://myhelpdesk-api.herokuapp.com/cha/getAll',
   updatechUrl : 'https://myhelpdesk-api.herokuapp.com/cha/updateChamado',
   deletechUrl : 'https://myhelpdesk-api.herokuapp.com/cha/deleteChamadoById',

   getlURL:  'https://myhelpdesk-api.herokuapp.com/log/getAll',
   addlURL : 'https://myhelpdesk-api.herokuapp.com/log/addLogin',

  };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
